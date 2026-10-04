import LoginForm from "../../Components/AdminComponents/LoginForm";

export const metadata = {
  title: "Admin Login | Qytrona Technologies",
  robots: { index: false, follow: false },
};

export default async function Page({ searchParams }) {
  const { next } = await searchParams;
  // Only allow redirects back into the admin area (prevents open redirects).
  const target = typeof next === "string" && /^\/admin(\/|$|\?)/.test(next) ? next : "/admin";
  return <LoginForm next={target} />;
}
