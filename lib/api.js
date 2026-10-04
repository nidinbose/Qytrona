import "server-only";
import { NextResponse } from "next/server";
import { getSession } from "./session";

export function jsonError(message, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

// Rejects state-changing requests that come from another site (CSRF defence on top of SameSite=Lax).
export function isSameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-origin fetches from older browsers / server tools
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}

// Returns { session } for a signed-in admin, or { response } to return immediately.
export async function requireAdmin(request) {
  if (request.method !== "GET" && !isSameOrigin(request)) {
    return { response: jsonError("Cross-site request blocked.", 403) };
  }
  const session = await getSession();
  if (!session) return { response: jsonError("Not signed in.", 401) };
  return { session };
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

// Simple in-memory login throttle: 5 failed attempts per IP per 15 minutes.
// Resets when the server restarts; use a shared store (e.g. Redis) if you run several instances.
const attempts = globalThis._loginAttempts ?? (globalThis._loginAttempts = new Map());
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

export function clientIp(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "local";
}

export function isRateLimited(ip) {
  const entry = attempts.get(ip);
  if (!entry || Date.now() - entry.first > WINDOW_MS) return false;
  return entry.count >= MAX_ATTEMPTS;
}

export function recordFailedLogin(ip) {
  const entry = attempts.get(ip);
  if (!entry || Date.now() - entry.first > WINDOW_MS) attempts.set(ip, { first: Date.now(), count: 1 });
  else entry.count += 1;
}

export function clearFailedLogins(ip) {
  attempts.delete(ip);
}
