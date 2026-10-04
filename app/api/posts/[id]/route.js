import { NextResponse } from "next/server";
import { deletePost, getPostById, parsePostInput, updatePost } from "@/lib/posts";
import { jsonError, readJson, requireAdmin } from "@/lib/api";

const validId = (id) => /^[a-f0-9]{24}$/i.test(id);

// GET /api/posts/:id -> a single post incl. drafts (admin only)
export async function GET(request, { params }) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  const { id } = await params;
  const post = validId(id) ? await getPostById(id) : null;
  if (!post) return jsonError("Post not found.", 404);
  return NextResponse.json({ post });
}

// PUT /api/posts/:id -> update a post (admin only)
export async function PUT(request, { params }) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  const { id } = await params;
  if (!validId(id)) return jsonError("Post not found.", 404);

  const { data, error } = parsePostInput(await readJson(request));
  if (error) return jsonError(error);

  try {
    const post = await updatePost(id, data);
    if (!post) return jsonError("Post not found.", 404);
    return NextResponse.json({ post });
  } catch (err) {
    if (err?.code === 11000) return jsonError("A post with this slug already exists. Choose another slug.", 409);
    console.error("[posts PUT]", err);
    return jsonError("Could not save the post.", 500);
  }
}

// DELETE /api/posts/:id -> delete a post (admin only)
export async function DELETE(request, { params }) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  const { id } = await params;
  if (!validId(id) || !(await deletePost(id))) return jsonError("Post not found.", 404);
  return NextResponse.json({ ok: true });
}
