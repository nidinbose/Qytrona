import PostEditor from "../../../../Components/AdminComponents/PostEditor";
import { verifyAdmin } from "@/lib/dal";

export default async function NewPostPage() {
  await verifyAdmin();
  return (
    <div className="mx-auto max-w-7xl">
      <PostEditor />
    </div>
  );
}
