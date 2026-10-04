import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Optimistic check only: verifies the signed session cookie before /admin pages render.
// Every admin page and API route verifies the session again on the server.
const SESSION_COOKIE = "qt_admin_session";

async function hasValidSession(request) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const secret = process.env.SESSION_SECRET;
  if (!token || !secret) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret), { algorithms: ["HS256"] });
    return true;
  } catch {
    return false;
  }
}

export async function proxy(request) {
  const { pathname, search } = request.nextUrl;
  const isLogin = pathname === "/admin/login";
  const signedIn = await hasValidSession(request);

  if (!signedIn && !isLogin) {
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("next", pathname + search);
    return NextResponse.redirect(url);
  }
  if (signedIn && isLogin) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
