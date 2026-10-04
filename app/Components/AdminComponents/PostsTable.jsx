"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "../CompanyComponents/Shared";
import { formatDate } from "../BlogComponents/BlogCard";

const filters = ["All", "Published", "Draft"];

function StatusBadge({ status }) {
  const published = status === "published";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        published ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${published ? "bg-green-500" : "bg-gray-400"}`} />
      {published ? "Published" : "Draft"}
    </span>
  );
}

export default function PostsTable({ posts }) {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  const shown = posts.filter((p) => filter === "All" || p.status === filter.toLowerCase());

  async function request(id, init) {
    setBusyId(id);
    setError("");
    try {
      const res = await fetch(`/api/posts/${id}`, init);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusyId(null);
    }
  }

  function toggleStatus(post) {
    const status = post.status === "published" ? "draft" : "published";
    return request(post.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...post, status }),
    });
  }

  function remove(post) {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    return request(post.id, { method: "DELETE" });
  }

  return (
    <div className="rounded-[1.5rem] border border-gray-200 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 p-4 sm:p-5">
        <div className="flex gap-1 rounded-full bg-gray-100 p-1">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f ? "bg-white text-[#0c0705] shadow-sm" : "text-gray-500 hover:text-[#0c0705]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF5F2D] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0c0705]"
        >
          <span className="text-lg leading-none">+</span> New Post
        </Link>
      </div>

      {error && <p className="mx-5 mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      {shown.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="text-lg font-medium text-[#0c0705]">No posts here yet</p>
          <p className="mt-1 text-sm text-gray-500">Create your first article to see it listed.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {shown.map((post) => (
            <li
              key={post.id}
              className={`flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center ${busyId === post.id ? "opacity-50" : ""}`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={post.status} />
                  <span className="rounded-full bg-[#FF5F2D]/10 px-2.5 py-1 text-xs font-medium text-[#FF5F2D]">
                    {post.category}
                  </span>
                </div>
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="mt-2 block truncate text-base font-semibold text-[#0c0705] hover:text-[#FF5F2D]"
                >
                  {post.title}
                </Link>
                <p className="mt-1 truncate text-sm text-gray-500">
                  /blogs/{post.slug} · Updated {formatDate(post.updatedAt)} · {post.readingTime} min read
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {post.status === "published" && (
                  <Link
                    href={`/blogs/${post.slug}`}
                    target="_blank"
                    className="rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-[#0c0705]"
                  >
                    View
                  </Link>
                )}
                <Link
                  href={`/admin/posts/${post.id}/edit`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-[#0c0705]"
                >
                  <Icon name="gear" className="h-3.5 w-3.5" />
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={busyId === post.id}
                  onClick={() => toggleStatus(post)}
                  className="rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
                >
                  {post.status === "published" ? "Unpublish" : "Publish"}
                </button>
                <button
                  type="button"
                  disabled={busyId === post.id}
                  onClick={() => remove(post)}
                  className="rounded-full border border-red-200 px-3.5 py-1.5 text-sm text-red-600 transition-colors hover:bg-red-600 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
