"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm({ next = "/admin" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }
      router.replace(next);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0705] px-4 py-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
      <span className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#FF5F2D]/25 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#FF5F2D]/15 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Image src="/Images/Logowhite.png" alt="Qytrona Technologies" width={44} height={44} className="h-11 w-11 rounded-md" />
          <div className="leading-tight text-white">
            <p className="text-sm font-semibold uppercase tracking-wide">Qytrona</p>
            <p className="text-xs uppercase tracking-widest text-white/50">Admin Panel</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0c0705]">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500">Sign in to manage blog posts.</p>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-[#0c0705]">Email</span>
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-[#0c0705] outline-none transition-colors focus:border-[#FF5F2D]"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-medium text-[#0c0705]">Password</span>
            <span className="relative mt-2 block">
              <input
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-16 text-[#0c0705] outline-none transition-colors focus:border-[#FF5F2D]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-[#FF5F2D]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </span>
          </label>

          {error && (
            <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-[#FF5F2D] py-3.5 font-medium text-white transition-colors hover:bg-[#0c0705] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          <Link href="/" className="transition-colors hover:text-[#FF5F2D]">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}
