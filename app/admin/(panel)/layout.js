import AdminShell from "../../Components/AdminComponents/AdminShell";
import { verifyAdmin } from "@/lib/dal";

export const metadata = {
  title: "Admin | Qytrona Technologies",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }) {
  const admin = await verifyAdmin();
  return <AdminShell admin={admin}>{children}</AdminShell>;
}
