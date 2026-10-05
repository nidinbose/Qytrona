import { connection } from "next/server";
import Homepage from "./Homepage/Homepage";
import { getPublishedPosts } from "@/lib/posts";

export default async function Home() {
  await connection(); // latest blog posts are loaded per request
  let posts = [];
  try {
    posts = (await getPublishedPosts()).slice(0, 4);
  } catch (err) {
    console.error("[home] could not load latest posts", err);
  }
  return <Homepage posts={posts} />;
}
