"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "../CompanyComponents/Shared";

const nav = [
  { label: "Dashboard", icon: "layout", href: "/admin" },
  { label: "New Post", icon: "spark", href: "/admin/posts/new" },
];

export default function AdminShell({ admin, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  async function logout() {
    setSigningOut(true);
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* top bar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0c0705] text-white">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="flex items-center gap-3">
            <Image src="/Images/Logowhite.png" alt="Qytrona" width={36} height={36} className="h-9 w-9 rounded-md" />
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold uppercase tracking-wide">Qytrona</span>
              <span className="block text-[11px] uppercase tracking-widest text-white/50">Admin Panel</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/blogs"
              target="_blank"
              className="hidden items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D] sm:inline-flex"
            >
              View blog
              <Icon name="arrow" className="h-3.5 w-3.5 -rotate-45" />
            </Link>
            <span className="hidden text-right text-xs leading-tight text-white/60 md:block">
              Signed in as
              <span className="block text-sm text-white">{admin.email}</span>
            </span>
            <button
              type="button"
              onClick={logout}
              disabled={signingOut}
              className="rounded-full bg-[#FF5F2D] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0c0705] disabled:opacity-60"
            >
              {signingOut ? "Signing out…" : "Log out"}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* sidebar */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 border-r border-gray-200 bg-white p-4 lg:block">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">Blog</p>
          <nav className="space-y-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active ? "bg-[#FF5F2D]/10 text-[#FF5F2D]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* mobile nav */}
        <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-gray-200 bg-white lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium ${
                pathname === item.href ? "text-[#FF5F2D]" : "text-gray-600"
              }`}
            >
              <Icon name={item.icon} className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>

        <main className="min-w-0 flex-1 px-4 pb-24 pt-8 sm:px-6 lg:px-10 lg:pb-12">{children}</main>
      </div>
    </div>
  );
}
