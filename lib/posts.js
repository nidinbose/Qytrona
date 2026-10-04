import "server-only";
import { connection } from "next/server";
import { connectDB } from "./db";
import Post from "./models/Post";

/* --------------------------------- helpers --------------------------------- */

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function readingTime(content = "") {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Mongo documents -> plain JSON-safe objects for Server -> Client Components.
function serialize(doc) {
  if (!doc) return null;
  return {
    id: String(doc._id),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt || "",
    content: doc.content,
    coverImage: doc.coverImage || "",
    category: doc.category || "General",
    tags: doc.tags || [],
    author: doc.author || "Qytrona Team",
    status: doc.status,
    publishedAt: doc.publishedAt ? doc.publishedAt.toISOString() : null,
    createdAt: doc.createdAt ? doc.createdAt.toISOString() : null,
    updatedAt: doc.updatedAt ? doc.updatedAt.toISOString() : null,
    readingTime: readingTime(doc.content),
  };
}

/* ------------------------------- validation -------------------------------- */

const isHttpUrl = (v) => {
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

// Validates and normalises an incoming post body. Returns { data } or { error }.
export function parsePostInput(body) {
  if (!body || typeof body !== "object") return { error: "Invalid request body." };

  const str = (v) => (typeof v === "string" ? v.trim() : "");
  const title = str(body.title);
  const content = typeof body.content === "string" ? body.content : "";
  const slug = slugify(str(body.slug) || title);
  const coverImage = str(body.coverImage);
  const status = body.status === "published" ? "published" : "draft";
  const tags = (Array.isArray(body.tags) ? body.tags : String(body.tags || "").split(","))
    .map((t) => String(t).trim())
    .filter(Boolean)
    .slice(0, 10);

  if (!title) return { error: "Title is required." };
  if (title.length > 160) return { error: "Title must be 160 characters or fewer." };
  if (!content.trim()) return { error: "Content is required." };
  if (!slug) return { error: "Slug must contain letters or numbers." };
  if (str(body.excerpt).length > 300) return { error: "Excerpt must be 300 characters or fewer." };
  if (coverImage && !coverImage.startsWith("/") && !isHttpUrl(coverImage)) {
    return { error: "Cover image must be a full http(s) URL or a path like /Images/blog.png." };
  }

  return {
    data: {
      title,
      slug,
      content,
      coverImage,
      status,
      tags,
      excerpt: str(body.excerpt),
      category: str(body.category) || "General",
      author: str(body.author) || "Qytrona Team",
    },
  };
}

/* ------------------------------ public queries ----------------------------- */

export async function getPublishedPosts() {
  await connection();
  await connectDB();
  const docs = await Post.find({ status: "published" }).sort({ publishedAt: -1 }).lean();
  return docs.map(serialize);
}

export async function getPublishedPostBySlug(slug) {
  await connection();
  await connectDB();
  const doc = await Post.findOne({ slug: String(slug).toLowerCase(), status: "published" }).lean();
  return serialize(doc);
}

export async function getRelatedPosts(post, limit = 3) {
  await connectDB();
  const docs = await Post.find({ status: "published", _id: { $ne: post.id }, category: post.category })
    .sort({ publishedAt: -1 })
    .limit(limit)
    .lean();
  if (docs.length >= limit) return docs.map(serialize);

  const more = await Post.find({ status: "published", _id: { $nin: [post.id, ...docs.map((d) => d._id)] } })
    .sort({ publishedAt: -1 })
    .limit(limit - docs.length)
    .lean();
  return [...docs, ...more].map(serialize);
}

/* ------------------------------- admin queries ----------------------------- */

export async function getAllPosts() {
  await connectDB();
  const docs = await Post.find({}).sort({ updatedAt: -1 }).lean();
  return docs.map(serialize);
}

export async function getPostById(id) {
  await connectDB();
  if (!/^[a-f0-9]{24}$/i.test(String(id))) return null;
  return serialize(await Post.findById(id).lean());
}

export async function createPost(data) {
  await connectDB();
  const doc = await Post.create({ ...data, publishedAt: data.status === "published" ? new Date() : undefined });
  return serialize(doc.toObject());
}

export async function updatePost(id, data) {
  await connectDB();
  const existing = await Post.findById(id);
  if (!existing) return null;
  // Keep the original publish date; stamp one the first time a post goes live.
  const publishedAt = data.status === "published" ? existing.publishedAt || new Date() : existing.publishedAt;
  existing.set({ ...data, publishedAt });
  await existing.save();
  return serialize(existing.toObject());
}

export async function deletePost(id) {
  await connectDB();
  const res = await Post.findByIdAndDelete(id);
  return Boolean(res);
}
