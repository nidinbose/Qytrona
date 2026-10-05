"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CtaBanner,
  FaqItem,
  Icon,
  LogoMark,
  ProcessTimeline,
  Reveal,
  Section,
  SectionHeader,
  useInView,
} from "../CompanyComponents/Shared";
import { FeaturedProjectCard } from "../PortfolioComponents/ProjectCard";
import { projects } from "../PortfolioComponents/portfolioData";
import BlogCard from "../BlogComponents/BlogCard";
import { featured as featuredTestimonial, testimonials } from "../CompanyComponents/testimonialsData";

/* ---------------------------------- data ---------------------------------- */

const reasons = [
  { icon: "bolt", tag: "Live in 2–4 weeks", title: "Fast turnaround", desc: "Clear timelines and weekly updates — most websites go live in 2 to 4 weeks." },
  { icon: "dollar", tag: "Fixed quote", title: "Transparent pricing", desc: "A fixed, itemised quote before we start. No hidden costs or surprise invoices." },
  { icon: "growth", tag: "SEO-ready", title: "Built to grow", desc: "SEO-ready, fast and mobile-first, so your site brings in real enquiries." },
  { icon: "headset", tag: "Ongoing care", title: "Support after launch", desc: "We stay with you for updates, fixes and new features as you grow." },
];

const orbitIcons = ["layout", "code", "megaphone", "search", "mobile", "gear"];

const process = [
  { step: "01", icon: "target", title: "Discover", desc: "We learn your goals, audience and competition." },
  { step: "02", icon: "layout", title: "Design", desc: "Wireframes and visuals shaped around real user flows." },
  { step: "03", icon: "code", title: "Develop", desc: "Fast, scalable builds with regular check-ins." },
  { step: "04", icon: "growth", title: "Grow", desc: "SEO, ads and ongoing support after launch." },
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages and features. After a short call we send a fixed, itemised quote — so you know the full cost before any work starts.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are ready in 2 to 4 weeks. Web apps, e-commerce stores and mobile apps usually take 6 to 12 weeks depending on scope.",
  },
  {
    q: "Will my website work on mobile and show up on Google?",
    a: "Yes. Every site we build is mobile-first, fast-loading and set up with SEO basics like page titles, descriptions, sitemaps and Google Search Console.",
  },
  {
    q: "Do you work with clients outside Kerala?",
    a: "Absolutely. We work with businesses across India, the UAE and the UK, collaborating over WhatsApp, email and video calls.",
  },
  {
    q: "Can you manage our marketing after launch?",
    a: "Yes. We offer monthly SEO, social media and Google and Meta ads plans with clear monthly reports.",
  },
];

/* ------------------------------ why choose us ------------------------------ */

function OrbitCard() {
  return (
    <div className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0c0705] p-8 text-white sm:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      <span className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FF5F2D]/30 blur-3xl" />

      {/* rotating ring of service icons around the logo mark */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 sm:-right-16">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
          {orbitIcons.map((name, i) => {
            const angle = (i / orbitIcons.length) * 2 * Math.PI;
            return (
              <span
                key={name}
                className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur"
                style={{
                  left: `${(50 + 50 * Math.cos(angle)).toFixed(2)}%`,
                  top: `${(50 + 50 * Math.sin(angle)).toFixed(2)}%`,
                }}
              >
                <span className="animate-[spin_30s_linear_infinite_reverse]">
                  <Icon name={name} className="h-5 w-5 text-[#FF5F2D]" />
                </span>
              </span>
            );
          })}
        </div>
        <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-white/15 bg-[#0c0705] shadow-2xl shadow-[#FF5F2D]/40">
          <LogoMark className="h-12 w-12" ringClassName="fill-white" />
        </span>
      </div>

      <span className="relative inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80">
        <span className="h-2 w-2 rounded-full bg-[#FF5F2D]" />
        One Team
      </span>

      <div className="relative max-w-sm">
        <h3 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Design, development &amp; marketing <span className="text-[#FF5F2D]">under one roof</span>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-white/65">
          No juggling freelancers. One dedicated team plans, builds and grows your digital presence end to end.
        </p>
        <Link
          href="/about"
          className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#FF5F2D]"
        >
          About Qytrona
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

function ReasonCard({ reason, index, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#FF5F2D]/10 bg-[#fff7f3] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_-20px_rgba(12,7,5,0.55)]">
        {/* dark fill that rises from the bottom on hover */}
        <span className="pointer-events-none absolute inset-0 translate-y-full rounded-t-[2rem] bg-[#0c0705] transition-[transform,border-radius] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:rounded-t-none" />
        {/* oversized watermark icon */}
        <span className="pointer-events-none absolute -bottom-8 -right-8 text-[#FF5F2D]/[0.07] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-[#FF5F2D]/15">
          <Icon name={reason.icon} className="h-40 w-40" />
        </span>
        {/* orange glow that appears on hover */}
        <span className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#FF5F2D]/0 blur-3xl transition-all duration-700 group-hover:bg-[#FF5F2D]/30" />

        <div className="relative flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
            <Icon name={reason.icon} className="h-6 w-6" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-widest text-[#0c0705]/25 transition-colors duration-500 group-hover:text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="relative mt-8 text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
          {reason.title}
        </h3>
        <p className="relative mt-2 text-base leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/65">
          {reason.desc}
        </p>

        <div className="relative mt-auto pt-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F2D]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF5F2D] transition-colors duration-500 group-hover:border-white/10 group-hover:bg-white/5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F2D]" />
            {reason.tag}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <SectionHeader title="Why businesses" highlight="choose Qytrona">
        We combine thoughtful design, solid engineering and growth marketing to deliver results you can measure.
      </SectionHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal variant="left" className="h-full">
          <OrbitCard />
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:auto-rows-fr sm:grid-cols-2 lg:col-span-2">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} delay={i * 120} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------- process --------------------------------- */

export function HowWeWork() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader title="A simple process," highlight="real results">
        From the first call to launch day and beyond — you always know what happens next.
      </SectionHeader>
      <ProcessTimeline steps={process} />
    </Section>
  );
}

/* ------------------------------ featured work ------------------------------ */

export function FeaturedWork() {
  const featured = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)].slice(0, 4);
  if (featured.length === 0) return null;

  return (
    <Section className="bg-white">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F2D]">Featured Work</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl lg:text-5xl">
            Projects we&apos;re <span className="text-[#FF5F2D]">proud of</span>
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="group inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 py-1.5 pl-5 pr-1.5 text-sm font-medium text-[#0c0705] transition-colors hover:border-[#0c0705]"
        >
          View all work
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 120} className="h-full">
            <FeaturedProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- testimonials ------------------------------ */

function Stars() {
  return (
    // one SVG for all five stars keeps the (repeated) testimonial markup light
    <svg viewBox="0 0 136 24" fill="currentColor" className="h-4 w-[5.5rem] text-[#FF5F2D]" role="img" aria-label="5 out of 5 stars">
      {[0, 28, 56, 84, 112].map((x) => (
        <path key={x} transform={`translate(${x})`} d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
      ))}
    </svg>
  );
}

function QuoteCard({ t, hidden }) {
  const initials = t.name.replace(/^Dr\.\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <figure aria-hidden={hidden || undefined} className="flex w-[340px] shrink-0 flex-col rounded-[1.75rem] border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-[#FF5F2D]/50 sm:w-[400px]">
      <Stars />
      <blockquote className="mt-4 line-clamp-4 text-base leading-relaxed text-gray-700">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-auto flex items-center gap-3 pt-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF5F2D]/10 text-sm font-semibold text-[#FF5F2D]">
          {initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-[#0c0705]">{t.name}</span>
          <span className="block truncate text-xs text-gray-500">
            {t.company} · {t.city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function QuoteRow({ items, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="group/row relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      <div
        className={`flex w-max items-stretch gap-5 py-2 group-hover/row:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: "60s" }}
      >
        {loop.map((t, i) => (
          <QuoteCard key={`${t.name}-${i}`} t={t} hidden={i >= items.length} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsStrip() {
  const all = [featuredTestimonial, ...testimonials];
  const half = Math.ceil(all.length / 2);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="px-6 sm:px-10 lg:px-14">
        <SectionHeader title="Loved by clients" highlight="near and far">
          From Kerala and Tamil Nadu to the UAE and the UK — here&apos;s what businesses say about working with us.
        </SectionHeader>
      </div>

      <div className="space-y-5">
        <QuoteRow items={all.slice(0, half)} />
        <QuoteRow items={all.slice(half)} reverse />
      </div>

      <div className="mt-10 flex justify-center px-6">
        <Link
          href="/testimonials"
          className="group inline-flex items-center gap-3 rounded-full bg-[#0c0705] py-1.5 pl-6 pr-1.5 font-medium text-white transition-colors hover:bg-[#FF5F2D]"
        >
          Read all testimonials
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-[#FF5F2D]">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------- latest blogs ------------------------------ */

export function LatestBlogs({ posts }) {
  if (!posts?.length) return null;

  return (
    <Section className="bg-white">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F2D]">From the Blog</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl lg:text-5xl">
            Latest <span className="text-[#FF5F2D]">insights</span>
          </h2>
        </div>
        <Link
          href="/blogs"
          className="group inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 py-1.5 pl-5 pr-1.5 text-sm font-medium text-[#0c0705] transition-colors hover:border-[#0c0705]"
        >
          All articles
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {posts.slice(0, 4).map((post, i) => (
          <Reveal key={post.id} delay={i * 120} className="h-full">
            <BlogCard post={post} compact />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------- faq ----------------------------------- */

export function HomeFaq() {
  const [open, setOpen] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <Section className="bg-white">
      <div ref={ref} className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div
          className={`transition-all duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F2D]">FAQ</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl lg:text-5xl">
            Questions? <span className="text-[#FF5F2D]">We&apos;ve got answers</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
            Everything you need to know before starting a project with us.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6">
            <p className="font-semibold text-[#0c0705]">Still have a question?</p>
            <p className="mt-1 text-sm text-gray-600">Talk to us directly — we usually reply within the hour.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="https://wa.me/918089913696"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5F2D] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0c0705]"
              >
                <Icon name="chat" className="h-4 w-4" />
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[#0c0705] transition-colors hover:border-[#0c0705]"
              >
                Contact page
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} item={item} index={i} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------- cta ----------------------------------- */

export function HomeCta() {
  return (
    <Reveal variant="scale">
      <CtaBanner
        eyebrow="Let's Build Together"
        title="Ready to grow your"
        highlight="business online?"
        text="Tell us about your goals and we'll get back within one business day with ideas and a clear quote."
        label="Get a Free Quote"
      />
    </Reveal>
  );
}
