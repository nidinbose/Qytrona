"use client";

import { useState } from "react";
import { CtaBanner, Icon, PageHero, Reveal, Section, SectionHeader, StatRow } from "./Shared";
import { featured, regions, testimonials } from "./testimonialsData";

/* ---------------------------------- data ---------------------------------- */

const stats = [
  { value: "120+", label: "Happy Clients" },
  { value: "60+", label: "Projects Delivered" },
  { value: "8", label: "Industries Served" },
  { value: "24h", label: "Reply Time" },
];

/* ------------------------------- small pieces ------------------------------ */

function Stars({ className = "h-4 w-4" }) {
  return (
    <div className="flex gap-0.5 text-[#FF5F2D]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark({ className }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 8C7.5 9.6 4 13.8 4 19.4 4 23 6.2 25 9 25c2.6 0 4.6-2 4.6-4.6 0-2.5-1.8-4.3-4.2-4.3-.5 0-1 .1-1.3.2.5-2.9 2.8-5.4 6-6.6L13 8Zm14 0c-5.5 1.6-9 5.8-9 11.4 0 3.6 2.2 5.6 5 5.6 2.6 0 4.6-2 4.6-4.6 0-2.5-1.8-4.3-4.2-4.3-.5 0-1 .1-1.3.2.5-2.9 2.8-5.4 6-6.6L27 8Z" />
    </svg>
  );
}

function Avatar({ name, dark }) {
  const initials = name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
        dark ? "bg-[#FF5F2D] text-white" : "bg-[#FF5F2D]/10 text-[#FF5F2D] ring-1 ring-[#FF5F2D]/20"
      }`}
    >
      {initials}
    </span>
  );
}

function Location({ t, dark }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs ${dark ? "text-white/60" : "text-gray-500"}`}>
      <Icon name="pin" className="h-3.5 w-3.5 text-[#FF5F2D]" />
      {t.city}, {t.state}
    </span>
  );
}

function TestimonialCard({ t }) {
  return (
    <figure className="group relative mb-6 break-inside-avoid rounded-[1.75rem] border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF5F2D]/40 hover:shadow-xl hover:shadow-[#FF5F2D]/5">
      <div className="flex items-center justify-between">
        <Stars />
        <QuoteMark className="h-8 w-8 text-[#FF5F2D]/15 transition-colors duration-300 group-hover:text-[#FF5F2D]/40" />
      </div>

      <blockquote className="mt-5 text-base leading-relaxed text-gray-700 sm:text-lg">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <span className="mt-6 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
        {t.service}
      </span>

      <figcaption className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
        <Avatar name={t.name} />
        <div className="min-w-0">
          <p className="font-semibold text-[#0c0705]">{t.name}</p>
          <p className="text-sm text-gray-500">
            {t.role}, {t.company}
          </p>
          <Location t={t} />
        </div>
      </figcaption>
    </figure>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function TestimonialsPage() {
  const [region, setRegion] = useState("All");
  const shown = region === "All" ? testimonials : testimonials.filter((t) => t.state === region);
  const count = (r) => (r === "All" ? testimonials.length : testimonials.filter((t) => t.state === r).length);

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients"
        highlight="say about us"
        description="Businesses across Kerala, Tamil Nadu, Karnataka, the UAE and the UK trust Qytrona to build their websites, apps and software — and to help them grow online."
      >
        <div className="flex items-center gap-3">
          <Stars className="h-5 w-5" />
          <span className="text-sm text-gray-600">Loved by 120+ clients</span>
        </div>
      </PageHero>

      {/* stats */}
      <div className="px-6 sm:px-10 lg:px-14">
        <StatRow stats={stats} />
      </div>

      {/* featured */}
      <Section className="bg-white">
        <Reveal variant="scale">
          <figure className="relative overflow-hidden rounded-[2rem] bg-[#0c0705] p-8 sm:p-12 lg:p-16">
            <span className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FF5F2D]/25 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-dashed border-white/15 animate-[spin_40s_linear_infinite]" />
            <QuoteMark className="pointer-events-none absolute right-8 top-8 h-24 w-24 text-white/5 sm:h-36 sm:w-36" />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F2D]" />
                  Featured Story
                </span>
                <Stars className="mt-6 h-5 w-5" />
                <blockquote className="mt-6 max-w-4xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="flex items-center gap-4 lg:flex-col lg:items-start">
                <Avatar name={featured.name} dark />
                <div>
                  <p className="text-lg font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-white/60">
                    {featured.role}, {featured.company}
                  </p>
                  <Location t={featured} dark />
                  <span className="mt-3 block w-fit rounded-full bg-[#FF5F2D] px-3 py-1 text-xs font-medium text-white">
                    {featured.service}
                  </span>
                </div>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </Section>

      {/* wall of love */}
      <Section className="bg-white !pt-0">
        <SectionHeader title="Trusted in India" highlight="&amp; abroad">
          From clinics in Thiruvananthapuram and startups in Bengaluru to traders in Dubai and retailers in London — here&apos;s what working with us is like.
        </SectionHeader>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter by region">
          {regions.map((r) => {
            const active = region === r;
            return (
              <button
                key={r}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setRegion(r)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-[#0c0705] bg-[#0c0705] text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
                }`}
              >
                {r}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    active ? "bg-[#FF5F2D] text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {count(r)}
                </span>
              </button>
            );
          })}
        </div>

        <div key={region} className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {shown.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>

      <Reveal variant="scale">
        <CtaBanner
          eyebrow="Your Story Next"
          title="Ready to be our next"
          highlight="success story?"
          text="Tell us about your business and we'll get back within one business day with ideas and a clear quote."
          label="Start Your Project"
        />
      </Reveal>
    </>
  );
}
