import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/session";
import { isSameOrigin, jsonError } from "@/lib/api";

export async function POST(request) {
  if (!isSameOrigin(request)) return jsonError("Cross-site request blocked.", 403);
  await deleteSession();
  return NextResponse.json({ ok: true });
}
