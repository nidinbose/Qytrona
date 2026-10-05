import Link from "next/link";
import { Icon } from "../CompanyComponents/Shared";

// Fixed locale + timezone so server and client render the same string.
export function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

export function BlogCover({ post, className = "" }) {
  if (post.coverImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- admin-supplied URLs from any host
      <img src={post.coverImage} alt="" className={`h-full w-full object-cover ${className}`} loading="lazy" />
    );
  }
  // No cover image: branded gradient with the category as a watermark.
  return (
    <div className={`relative flex h-full w-full items-end overflow-hidden bg-[#0c0705] p-6 ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      <span className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#FF5F2D]/40 blur-3xl" />
      <span className="relative text-4xl font-semibold leading-none tracking-tight text-white/15 sm:text-5xl">
        {post.category}
      </span>
    </div>
  );
}

export function PostMeta({ post, dark }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${dark ? "text-white/60" : "text-gray-500"}`}>
      <span className="inline-flex items-center gap-1.5">
        <Icon name="calendar" className="h-4 w-4 text-[#FF5F2D]" />
        {formatDate(post.publishedAt)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Icon name="clock" className="h-4 w-4 text-[#FF5F2D]" />
        {post.readingTime} min read
      </span>
    </div>
  );
}

export default function BlogCard({ post, compact = false }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={`group relative flex h-full flex-col border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_60px_-20px_rgba(255,95,45,0.35)] ${
        compact ? "rounded-[1.5rem] p-2.5" : "rounded-[2rem] p-3"
      }`}
    >
      {/* inset image with category + meta chips */}
      <div className={`relative overflow-hidden ${compact ? "aspect-[16/11] rounded-[1.1rem]" : "aspect-[4/3] rounded-[1.5rem]"}`}>
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
          <BlogCover post={post} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0705]/70 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-[#FF5F2D] px-3 py-1 text-xs font-medium text-white shadow-lg shadow-black/10">
          {post.category}
        </span>

        <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-xs font-medium text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-md">
            <Icon name="calendar" className="h-3.5 w-3.5" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-md">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {post.readingTime} min
          </span>
        </div>
      </div>

      {/* text */}
      <div className={`flex flex-1 flex-col ${compact ? "px-2.5 pb-2 pt-4" : "px-3 pb-3 pt-6"}`}>
        <div className={compact ? "mb-4" : "mb-6"}>
          <h3
            className={`font-semibold leading-snug tracking-tight text-[#0c0705] ${
              compact ? "line-clamp-2 text-lg" : "text-xl sm:text-2xl"
            }`}
          >
            <span className="bg-gradient-to-r from-[#FF5F2D] to-[#FF5F2D] bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
              {post.title}
            </span>
          </h3>
          {post.excerpt && (
            <p className={`line-clamp-2 leading-relaxed text-gray-600 ${compact ? "mt-2 text-sm" : "mt-3 text-base"}`}>
              {post.excerpt}
            </p>
          )}
        </div>

        {/* footer: author + arrow */}
        <div
          className={`mt-auto flex items-center justify-between gap-3 border-t border-dashed border-gray-200 ${
            compact ? "pt-3" : "pt-5"
          }`}
        >
          <span className="flex min-w-0 items-center gap-3">
            <span
              className={`flex shrink-0 items-center justify-center rounded-full bg-[#0c0705] font-semibold text-white ${
                compact ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm"
              }`}
            >
              {post.author.charAt(0).toUpperCase()}
            </span>
            <span className="truncate text-sm font-medium text-[#0c0705]">{post.author}</span>
          </span>
          <span
            className={`flex shrink-0 items-center justify-center rounded-full border border-gray-200 text-[#0c0705] transition-all duration-500 group-hover:-rotate-45 group-hover:border-[#FF5F2D] group-hover:bg-[#FF5F2D] group-hover:text-white ${
              compact ? "h-9 w-9" : "h-11 w-11"
            }`}
          >
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
