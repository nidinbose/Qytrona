import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createPost, getAllPosts, getPublishedPosts, parsePostInput } from "@/lib/posts";
import { jsonError, readJson, requireAdmin } from "@/lib/api";
import { getSession } from "@/lib/session";

// Post changes show up on the cached home page and blog list straight away.
function refreshPostPages() {
  revalidatePath("/");
  revalidatePath("/blogs");
}

// GET /api/posts            -> published posts (public)
// GET /api/posts?all=1      -> every post incl. drafts (admin only)
export async function GET(request) {
  try {
    if (request.nextUrl.searchParams.get("all") === "1") {
      if (!(await getSession())) return jsonError("Not signed in.", 401);
      return NextResponse.json({ posts: await getAllPosts() });
    }
    return NextResponse.json({ posts: await getPublishedPosts() });
  } catch (err) {
    console.error("[posts GET]", err);
    return jsonError("Could not load posts.", 500);
  }
}

// POST /api/posts -> create a post (admin only)
export async function POST(request) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  const { data, error } = parsePostInput(await readJson(request));
  if (error) return jsonError(error);

  try {
    const post = await createPost(data);
    refreshPostPages();
    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    if (err?.code === 11000) return jsonError("A post with this slug already exists. Choose another slug.", 409);
    console.error("[posts POST]", err);
    return jsonError("Could not save the post.", 500);
  }
}
