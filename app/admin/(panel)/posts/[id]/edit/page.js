import { notFound } from "next/navigation";
import PostEditor from "../../../../../Components/AdminComponents/PostEditor";
import { verifyAdmin } from "@/lib/dal";
import { getPostById } from "@/lib/posts";

export default async function EditPostPage({ params }) {
  await verifyAdmin();
  const { id } = await params;
  const post = await getPostById(id);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-7xl">
      <PostEditor key={post.id} post={post} />
    </div>
  );
}
