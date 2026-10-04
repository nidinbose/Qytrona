import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/lib/models/Admin";
import { createSession } from "@/lib/session";
import {
  clearFailedLogins,
  clientIp,
  isRateLimited,
  isSameOrigin,
  jsonError,
  readJson,
  recordFailedLogin,
} from "@/lib/api";

// A real hash to compare against when the email is unknown, so response time doesn't reveal which emails exist.
const DUMMY_HASH = "$2b$12$NwvVtYI3.H8N2ODqMwkg9uIG85w3RfVyPMiubQVhTEOsUTGcgd70S";

export async function POST(request) {
  if (!isSameOrigin(request)) return jsonError("Cross-site request blocked.", 403);

  const ip = clientIp(request);
  if (isRateLimited(ip)) return jsonError("Too many failed attempts. Try again in 15 minutes.", 429);

  const body = await readJson(request);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body?.password === "string" ? body.password : "";
  if (!email || !password) return jsonError("Email and password are required.");

  try {
    await connectDB();
    const admin = await Admin.findOne({ email });
    const ok = await bcrypt.compare(password, admin?.passwordHash || DUMMY_HASH);

    if (!admin || !ok) {
      recordFailedLogin(ip);
      return jsonError("Invalid email or password.", 401);
    }

    clearFailedLogins(ip);
    admin.lastLoginAt = new Date();
    await admin.save();
    await createSession(admin);

    return NextResponse.json({ ok: true, admin: { email: admin.email, name: admin.name } });
  } catch (err) {
    console.error("[auth/login]", err);
    return jsonError("Login is unavailable right now. Check the server logs.", 500);
  }
}
