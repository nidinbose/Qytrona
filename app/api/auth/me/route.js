import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { jsonError } from "@/lib/api";

export async function GET() {
  const session = await getSession();
  if (!session) return jsonError("Not signed in.", 401);
  return NextResponse.json({ admin: session });
}
