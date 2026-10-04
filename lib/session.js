import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "qt_admin_session";
const SESSION_DAYS = 7;

function secretKey() {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be set in .env.local and be at least 32 characters long.");
  }
  return new TextEncoder().encode(secret);
}

export async function encrypt(payload, expiresAt) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(secretKey());
}

export async function decrypt(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey(), { algorithms: ["HS256"] });
    return payload;
  } catch {
    return null;
  }
}

// Signs the admin's id into an httpOnly cookie. Call only from a Route Handler or Server Function.
export async function createSession(admin) {
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  const token = await encrypt({ sub: String(admin._id), email: admin.email, name: admin.name }, expiresAt);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

// Reads and verifies the session cookie. Returns { id, email, name } or null.
export async function getSession() {
  const store = await cookies();
  const payload = await decrypt(store.get(SESSION_COOKIE)?.value);
  if (!payload?.sub) return null;
  return { id: payload.sub, email: payload.email, name: payload.name };
}
