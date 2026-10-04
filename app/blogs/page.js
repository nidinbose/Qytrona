import Navbar from "../Components/HomeComponents/Navbar";
import Footer from "../Components/HomeComponents/Footer";
import BlogListPage from "../Components/BlogComponents/BlogListPage";
import { connection } from "next/server";
import { getPublishedPosts } from "@/lib/posts";

export const metadata = {
  title: "Blogs | Qytrona Technologies",
  description: "Guides and insights on websites, mobile apps, SEO and digital marketing from Qytrona Technologies.",
};

export default async function Page() {
  await connection(); // render per request, never at build time
  let posts = [];
  let unavailable = false;
  try {
    posts = await getPublishedPosts();
  } catch (err) {
    console.error("[blogs] could not load posts", err);
    unavailable = true;
  }

  return (
    <main>
      <Navbar />
      <BlogListPage posts={posts} unavailable={unavailable} />
      <Footer />
    </main>
  );
}
