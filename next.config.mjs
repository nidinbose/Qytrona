/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets a production build go to a separate folder (e.g. NEXT_DIST_DIR=.next-prod) without touching the dev server's .next.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  experimental: {
    // Inline the (small, Tailwind) CSS into the HTML so it no longer blocks first render.
    // Only applies to production builds.
    inlineCss: true,
  },
};

export default nextConfig;
