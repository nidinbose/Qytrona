import PostsTable from "../../Components/AdminComponents/PostsTable";
import { verifyAdmin } from "@/lib/dal";
import { getAllPosts } from "@/lib/posts";

export default async function AdminDashboard() {
  const admin = await verifyAdmin();
  const posts = await getAllPosts();
  const published = posts.filter((p) => p.status === "published").length;

  const stats = [
    { label: "Total posts", value: posts.length },
    { label: "Published", value: published },
    { label: "Drafts", value: posts.length - published },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <p className="text-sm text-gray-500">Welcome back{admin.name ? `, ${admin.name}` : ""}</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">Blog dashboard</h1>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[1.5rem] border border-gray-200 bg-white p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-gray-400">{s.label}</p>
            <p className="mt-3 text-4xl font-semibold text-[#0c0705]">{s.value}</p>
            <span className="mt-3 block h-[2px] w-8 rounded-full bg-[#FF5F2D]" />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <PostsTable posts={posts} />
      </div>
    </div>
  );
}
