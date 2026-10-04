import "server-only";
import { redirect } from "next/navigation";
import { getSession } from "./session";

// Use at the top of every admin page/layout. Redirects to the login page when the session is missing or invalid.
export async function verifyAdmin() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  return session;
}
