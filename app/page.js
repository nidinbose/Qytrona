import Homepage from "./Homepage/Homepage";
import { getLatestPublishedPosts } from "@/lib/posts";

// Serve the home page from cache and refresh it in the background every 5 minutes,
// instead of querying MongoDB on every visit. Saving a post in admin refreshes it immediately.
export const revalidate = 300;

export default async function Home() {
  let posts = [];
  try {
    posts = await getLatestPublishedPosts(4);
  } catch (err) {
    console.error("[home] could not load latest posts", err);
  }
  return <Homepage posts={posts} />;
}
