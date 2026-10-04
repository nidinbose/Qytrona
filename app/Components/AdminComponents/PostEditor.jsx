"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PostContent from "../BlogComponents/PostContent";
import { BlogCover } from "../BlogComponents/BlogCard";

const CATEGORIES = ["Website Development", "Digital Marketing", "SEO", "Mobile Apps", "Custom Software", "Business Tips", "Company News"];

const STARTER = `## Introduction

Write a short opening paragraph that tells readers what they will learn.

## Main point

Explain the idea with **bold highlights**, *emphasis* and [links](https://example.com).

- First tip
- Second tip
- Third tip

> A memorable quote or key takeaway.

## Conclusion

Wrap up and invite readers to get in touch.`;

const toSlug = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-[#0c0705]">{label}</span>
        {hint && <span className="text-xs text-gray-400">{hint}</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[#0c0705] outline-none transition-colors focus:border-[#FF5F2D]";

export default function PostEditor({ post }) {
  const router = useRouter();
  const editing = Boolean(post);
  const [form, setForm] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || STARTER,
    coverImage: post?.coverImage || "",
    category: post?.category || CATEGORIES[0],
    tags: post?.tags?.join(", ") || "",
    author: post?.author || "Qytrona Team",
    status: post?.status || "draft",
  });
  const [slugTouched, setSlugTouched] = useState(editing);
  const [tab, setTab] = useState("write");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState("");

  const set = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({
      ...f,
      [key]: value,
      ...(key === "title" && !slugTouched ? { slug: toSlug(value) } : {}),
    }));
    setSaved("");
  };

  async function save(status) {
    setSaving(true);
    setError("");
    setSaved("");
    try {
      const res = await fetch(editing ? `/api/posts/${post.id}` : "/api/posts", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, status }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not save the post.");

      setForm((f) => ({ ...f, status, slug: data.post.slug }));
      setSaved(status === "published" ? "Published" : "Draft saved");
      if (!editing) router.replace(`/admin/posts/${data.post.id}/edit`);
      router.refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  const words = form.content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        save(form.status);
      }}
    >
      {/* header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href="/admin" className="text-sm text-gray-500 hover:text-[#FF5F2D]">← All posts</Link>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">
            {editing ? "Edit post" : "New post"}
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {saved && <span className="text-sm text-green-700">✓ {saved}</span>}
          {editing && form.status === "published" && (
            <Link
              href={`/blogs/${form.slug}`}
              target="_blank"
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-[#0c0705]"
            >
              View live
            </Link>
          )}
          <button
            type="button"
            disabled={saving}
            onClick={() => save("draft")}
            className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#0c0705] disabled:opacity-60"
          >
            {form.status === "published" ? "Unpublish" : "Save draft"}
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => save("published")}
            className="rounded-full bg-[#FF5F2D] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0c0705] disabled:opacity-60"
          >
            {saving ? "Saving…" : form.status === "published" ? "Update" : "Publish"}
          </button>
        </div>
      </div>

      {error && <p role="alert" className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_340px]">
        {/* main column */}
        <div className="space-y-6">
          <div className="space-y-5 rounded-[1.5rem] border border-gray-200 bg-white p-5 sm:p-6">
            <Field label="Title" hint={`${form.title.length}/160`}>
              <input required maxLength={160} value={form.title} onChange={set("title")} className={`${inputCls} text-lg font-medium`} placeholder="e.g. 7 signs your business needs a new website" />
            </Field>
            <Field label="URL slug" hint="Letters, numbers and dashes">
              <div className="flex items-center rounded-xl border border-gray-200 focus-within:border-[#FF5F2D]">
                <span className="pl-4 text-sm text-gray-400">/blogs/</span>
                <input
                  value={form.slug}
                  onChange={(e) => {
                    setSlugTouched(true);
                    set("slug")(e);
                  }}
                  onBlur={() => setForm((f) => ({ ...f, slug: toSlug(f.slug || f.title) }))}
                  className="w-full rounded-xl bg-transparent px-1 py-3 text-[#0c0705] outline-none"
                />
              </div>
            </Field>
            <Field label="Excerpt" hint={`${form.excerpt.length}/300 · shown on cards & Google`}>
              <textarea rows={3} maxLength={300} value={form.excerpt} onChange={set("excerpt")} className={inputCls} placeholder="A one or two sentence summary of the article." />
            </Field>
          </div>

          {/* content */}
          <div className="rounded-[1.5rem] border border-gray-200 bg-white">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
              <div className="flex gap-1 rounded-full bg-gray-100 p-1">
                {["write", "preview"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                      tab === t ? "bg-white text-[#0c0705] shadow-sm" : "text-gray-500"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <span className="text-xs text-gray-400">{words} words · {Math.max(1, Math.round(words / 200))} min read</span>
            </div>
            {tab === "write" ? (
              <textarea
                required
                value={form.content}
                onChange={set("content")}
                rows={24}
                className="block w-full resize-y rounded-b-[1.5rem] px-5 py-4 font-mono text-sm leading-relaxed text-[#0c0705] outline-none"
              />
            ) : (
              <div className="min-h-[500px] px-5 py-6 sm:px-8">
                <PostContent content={form.content} />
              </div>
            )}
          </div>
        </div>

        {/* sidebar */}
        <div className="space-y-6">
          <div className="space-y-5 rounded-[1.5rem] border border-gray-200 bg-white p-5 sm:p-6">
            <p className="text-sm font-medium text-[#0c0705]">
              Status:{" "}
              <span className={form.status === "published" ? "text-green-700" : "text-gray-500"}>
                {form.status === "published" ? "Published" : "Draft"}
              </span>
            </p>
            <Field label="Category">
              <input list="post-categories" value={form.category} onChange={set("category")} className={inputCls} />
              <datalist id="post-categories">
                {CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </Field>
            <Field label="Tags" hint="Comma separated">
              <input value={form.tags} onChange={set("tags")} className={inputCls} placeholder="seo, small business" />
            </Field>
            <Field label="Author">
              <input value={form.author} onChange={set("author")} className={inputCls} />
            </Field>
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-gray-200 bg-white p-5 sm:p-6">
            <Field label="Cover image URL" hint="Optional">
              <input value={form.coverImage} onChange={set("coverImage")} className={inputCls} placeholder="https://… or /Images/blog/cover.jpg" />
            </Field>
            <div className="aspect-[16/10] overflow-hidden rounded-xl border border-gray-200">
              <BlogCover post={{ coverImage: form.coverImage, category: form.category || "General" }} />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-dashed border-gray-300 bg-white p-5 text-sm text-gray-600">
            <p className="font-medium text-[#0c0705]">Formatting</p>
            <ul className="mt-3 space-y-1.5 font-mono text-xs">
              <li>## Heading · ### Subheading</li>
              <li>**bold** · *italic* · `code`</li>
              <li>[link text](https://…)</li>
              <li>- bullet · 1. numbered</li>
              <li>&gt; quote</li>
              <li>![alt text](image-url)</li>
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}
