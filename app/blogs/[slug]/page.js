import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import Navbar from "../../Components/HomeComponents/Navbar";
import Footer from "../../Components/HomeComponents/Footer";
import { CtaBanner, Icon, Section } from "../../Components/CompanyComponents/Shared";
import BlogCard, { BlogCover, PostMeta } from "../../Components/BlogComponents/BlogCard";
import PostContent, { getHeadings } from "../../Components/BlogComponents/PostContent";
import { getPublishedPostBySlug, getRelatedPosts } from "@/lib/posts";

const siteUrl = (process.env.SITE_URL || "").replace(/\/$/, "");

async function loadPost(slug) {
  try {
    return await getPublishedPostBySlug(slug);
  } catch (err) {
    console.error("[blogs/slug] could not load post", err);
    return null;
  }
}

export async function generateMetadata({ params }) {
  await connection();
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) return { title: "Article not found | Qytrona Technologies" };

  return {
    title: `${post.title} | Qytrona Technologies`,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function ShareLinks({ post }) {
  if (!siteUrl) return null;
  const url = encodeURIComponent(`${siteUrl}/blogs/${post.slug}`);
  const text = encodeURIComponent(post.title);
  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${text}%20${url}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { label: "X", href: `https://twitter.com/intent/tweet?text=${text}&url=${url}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
  ];
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Share</p>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-[#FF5F2D] hover:bg-[#FF5F2D] hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default async function Page({ params }) {
  await connection();
  const { slug } = await params;
  const post = await loadPost(slug);
  if (!post) notFound();

  const headings = getHeadings(post.content);
  let related = [];
  try {
    related = await getRelatedPosts(post);
  } catch (err) {
    console.error("[blogs/slug] could not load related posts", err);
  }

  return (
    <main>
      <Navbar />

      <article>
        {/* header */}
        <header className="bg-white px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-14 lg:pt-40">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="transition-colors hover:text-[#FF5F2D]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/blogs" className="transition-colors hover:text-[#FF5F2D]">Blogs</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#0c0705]">{post.category}</span>
          </nav>

          <div className="max-w-5xl">
            <span className="inline-flex rounded-full bg-[#FF5F2D]/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#FF5F2D]">
              {post.category}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#0c0705] sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            {post.excerpt && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">{post.excerpt}</p>}

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5F2D] text-sm font-semibold text-white">
                  {post.author.charAt(0).toUpperCase()}
                </span>
                <span className="text-sm font-medium text-[#0c0705]">{post.author}</span>
              </span>
              <PostMeta post={post} />
            </div>
          </div>
        </header>

        {/* cover */}
        <div className="px-6 sm:px-10 lg:px-14">
          <div className="aspect-[21/9] min-h-[220px] overflow-hidden rounded-[2rem]">
            <BlogCover post={post} />
          </div>
        </div>

        {/* body */}
        <Section className="bg-white">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="min-w-0 max-w-3xl">
              <PostContent content={post.content} />

              {post.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-200 pt-8">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                      #{t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-10 lg:hidden">
                <ShareLinks post={post} />
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-10">
                {headings.length > 0 && (
                  <nav>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">In this article</p>
                    <ol className="space-y-2.5 border-l border-gray-200">
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="-ml-px block border-l border-transparent pl-4 text-sm text-gray-600 transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
                <ShareLinks post={post} />
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0c0705] transition-colors hover:text-[#FF5F2D]"
                >
                  <Icon name="arrow" className="h-4 w-4 rotate-180" />
                  All articles
                </Link>
              </div>
            </aside>
          </div>
        </Section>
      </article>

      {related.length > 0 && (
        <Section className="bg-gray-50">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">
            Keep <span className="text-[#FF5F2D]">reading</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBanner
        eyebrow="Work With Us"
        title="Need help putting this"
        highlight="into action?"
        text="Our team builds websites, apps and campaigns that grow businesses. Tell us what you need and we'll reply within one business day."
        label="Talk to Our Team"
      />

      <Footer />
    </main>
  );
}
