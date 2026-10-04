"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CtaBanner, Icon, PageHero, Reveal, Section } from "../CompanyComponents/Shared";
import BlogCard, { BlogCover, PostMeta } from "./BlogCard";

export default function BlogListPage({ posts, unavailable }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...new Set(posts.map((p) => p.category))], [posts]);
  const [featured, ...rest] = posts;

  const filtering = category !== "All" || query.trim() !== "";
  const q = query.trim().toLowerCase();
  const list = (filtering ? posts : rest).filter(
    (p) =>
      (category === "All" || p.category === category) &&
      (!q || `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase().includes(q))
  );

  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Insights &"
        highlight="ideas"
        description="Practical guides on websites, apps, SEO and digital marketing — written by the Qytrona team to help your business grow online."
      />

      {posts.length === 0 ? (
        <Section className="bg-white !pt-0">
          <div className="flex flex-col items-center rounded-[2rem] border border-dashed border-gray-300 bg-gray-50 px-6 py-20 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D]/10 text-[#FF5F2D]">
              <Icon name="spark" className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-[#0c0705] sm:text-3xl">
              {unavailable ? "Articles are unavailable right now" : "Fresh articles are on the way"}
            </h2>
            <p className="mt-3 max-w-md text-base text-gray-600">
              {unavailable
                ? "We couldn't load our articles. Please check back in a little while."
                : "We're writing our first posts. Check back soon for tips on growing your business online."}
            </p>
          </div>
        </Section>
      ) : (
        <>
          {/* featured */}
          {!filtering && featured && (
            <Section className="bg-white !pt-0 !pb-10">
              <Reveal variant="scale">
                <Link
                  href={`/blogs/${featured.slug}`}
                  className="group grid grid-cols-1 overflow-hidden rounded-[2rem] bg-[#0c0705] lg:grid-cols-2"
                >
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                      <BlogCover post={featured} />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80">
                      <span className="h-2 w-2 rounded-full bg-[#FF5F2D]" />
                      Latest · {featured.category}
                    </span>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white transition-colors group-hover:text-[#FF5F2D] sm:text-4xl">
                      {featured.title}
                    </h2>
                    {featured.excerpt && (
                      <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">{featured.excerpt}</p>
                    )}
                    <div className="mt-6">
                      <PostMeta post={featured} dark />
                    </div>
                    <span className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#FF5F2D] py-1.5 pl-6 pr-1.5 font-medium text-white">
                      Read article
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF5F2D] transition-transform duration-300 group-hover:translate-x-1">
                        <Icon name="arrow" className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            </Section>
          )}

          {/* filters + grid */}
          <Section className="bg-white !pt-0">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
                {categories.map((c) => {
                  const active = category === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setCategory(c)}
                      className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "border-[#0c0705] bg-[#0c0705] text-white"
                          : "border-gray-200 bg-white text-gray-700 hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              <label className="relative w-full lg:w-80">
                <span className="sr-only">Search articles</span>
                <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-[#0c0705] outline-none transition-colors focus:border-[#FF5F2D]"
                />
              </label>
            </div>

            {list.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {list.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p className="rounded-[1.5rem] border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center text-gray-600">
                {filtering ? "No articles match your search." : "More articles coming soon."}
              </p>
            )}
          </Section>
        </>
      )}

      <Reveal variant="scale">
        <CtaBanner
          eyebrow="Grow Online"
          title="Want these results for"
          highlight="your business?"
          text="Tell us about your goals and we'll get back within one business day with ideas and a clear quote."
          label="Get a Free Quote"
        />
      </Reveal>
    </>
  );
}
