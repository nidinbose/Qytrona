"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatedHeading,
  CtaBanner,
  FaqItem,
  Icon,
  PillButton,
  ProcessTimeline,
  Reveal,
  Section,
  SectionHeader,
  StatRow,
  useInView,
} from "../CompanyComponents/Shared";
import { FeatureCard } from "../SolutionComponents/SolutionPage";
import { solutions } from "../SolutionComponents/solutionsData";
import { industries } from "./industriesData";

const stats = [
  { value: "60+", label: "Projects Shipped" },
  { value: "120+", label: "Clients Served" },
  { value: "8", label: "Industries Served" },
  { value: "5", label: "Core Services" },
];

const process = [
  { step: "01", icon: "search", title: "Understand", desc: "We learn your industry, customers and daily workflows." },
  { step: "02", icon: "target", title: "Plan", desc: "The right mix of web, app, software and marketing." },
  { step: "03", icon: "code", title: "Build", desc: "Design and develop with regular demos and feedback." },
  { step: "04", icon: "growth", title: "Grow", desc: "Launch, market and keep improving with real data." },
];

const solutionBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s]));

/* ---------------------------------- hero ---------------------------------- */

// Industry icon at the centre with our five services orbiting around it.
function OrbitVisual({ industry }) {
  const [ref, on] = useInView({ threshold: 0.25 });
  const orbit = industry.services.map((s) => solutionBySlug[s.solution]).filter(Boolean);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[520px]">
      <span className="pointer-events-none absolute inset-[8%] rounded-full bg-[#FF5F2D]/10 blur-3xl" />

      {/* static rings */}
      <span className="absolute inset-[4%] rounded-full border border-dashed border-[#FF5F2D]/25" />
      <span className="absolute inset-[22%] rounded-full border border-[#FF5F2D]/15" />
      <span className="absolute inset-[22%] rounded-full bg-[#fbe3d1]/50" />

      {/* rotating service ring */}
      <div
        className={`absolute inset-[4%] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          on ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="relative h-full w-full animate-[spin_40s_linear_infinite]">
          {orbit.map((s, i) => {
            const rad = ((360 / orbit.length) * i - 90) * (Math.PI / 180);
            return (
              <div
                key={s.slug}
                className="absolute"
                style={{ left: `${50 + 50 * Math.cos(rad)}%`, top: `${50 + 50 * Math.sin(rad)}%` }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <div className="animate-[spin_40s_linear_infinite_reverse]">
                    <Link
                      href={`/solutions/${s.slug}`}
                      title={s.name}
                      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-black/5 bg-white text-[#FF5F2D] shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#FF5F2D] hover:text-white sm:h-16 sm:w-16"
                    >
                      <Icon name={s.icon} className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* centre */}
      <div
        className={`absolute inset-[30%] flex flex-col items-center justify-center rounded-[2rem] bg-[#0c0705] text-white shadow-2xl shadow-[#FF5F2D]/20 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          on ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-12 opacity-0"
        }`}
        style={{ transitionDelay: on ? "200ms" : "0ms" }}
      >
        <span className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-[0.1] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] sm:h-16 sm:w-16">
          <Icon name={industry.icon} className="h-7 w-7" />
        </span>
        <span className="relative mt-3 px-3 text-center text-sm font-semibold sm:text-base">
          {industry.name}
        </span>
      </div>
    </div>
  );
}

function IndustryHero({ ind }) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-14 lg:pb-24 lg:pt-40">
      <span className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#FF5F2D]/[0.06] blur-3xl" />

      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="fade" duration={600}>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-[#FF5F2D]">Home</Link>
              <span className="text-gray-300">/</span>
              <span>Industries</span>
              <span className="text-gray-300">/</span>
              <span className="text-[#0c0705]">{ind.name}</span>
            </nav>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F2D]/20 bg-[#FF5F2D]/10 px-3 py-1.5 text-xs font-medium text-[#FF5F2D]">
              <Icon name={ind.icon} className="h-3.5 w-3.5" />
              {ind.name}
            </span>
          </Reveal>

          <AnimatedHeading
            as="h1"
            title={ind.title}
            highlight={ind.highlight}
            delay={150}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#0c0705] sm:text-5xl md:text-6xl xl:text-7xl"
          />

          <Reveal delay={450}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {ind.intro}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-6 flex flex-wrap gap-2">
              {ind.badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-600"
                >
                  <Icon name="check" className="h-3.5 w-3.5 text-[#FF5F2D]" />
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={750}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PillButton href="/contact">Discuss Your Project</PillButton>
              <a
                href="#how-we-help"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0c0705] transition-colors hover:text-[#FF5F2D]"
              >
                How we help
                <Icon name="arrow" className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="px-6 sm:px-10 lg:px-0">
          <OrbitVisual industry={ind} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- challenges ------------------------------- */

// 3D flip card: the challenge on the front, our fix on the back.
// Flips on hover (desktop) or tap (touch).
function ChallengeCard({ c, index }) {
  const [flipped, setFlipped] = useState(false);
  const face = "absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] p-7 [backface-visibility:hidden]";

  return (
    <div
      className="group h-[340px] [perspective:1400px]"
      onClick={() => setFlipped((f) => !f)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* front: the challenge */}
        <div className={`${face} border border-gray-200 bg-gray-50`}>
          <span className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-dashed border-[#0c0705]/10 animate-[spin_30s_linear_infinite]" />
          <span className="pointer-events-none absolute -bottom-6 right-4 text-[7rem] font-semibold leading-none text-[#0c0705]/[0.05]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0c0705] text-white">
              <Icon name={c.icon} className="h-5 w-5" />
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
              The challenge
            </span>
          </div>

          <h3 className="relative mt-8 text-xl font-semibold tracking-tight text-[#0c0705] sm:text-2xl">
            {c.title}
          </h3>
          <p className="relative mt-2 text-sm leading-relaxed text-gray-600">{c.desc}</p>

          <span className="relative mt-auto flex items-center gap-2 text-sm font-medium text-[#FF5F2D]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 animate-[spin_6s_linear_infinite]">
              <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4" />
            </svg>
            See how we fix it
          </span>
        </div>

        {/* back: our fix */}
        <div className={`${face} bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] text-white [transform:rotateY(180deg)]`}>
          <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          <span className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-dashed border-white/40 animate-[spin_30s_linear_infinite]" />
          <span className="pointer-events-none absolute -bottom-10 -right-10 text-white/10">
            <Icon name={c.icon} className="h-40 w-40" />
          </span>

          <div className="relative flex items-center justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#FF5F2D]">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] backdrop-blur">
              How we fix it
            </span>
          </div>

          <p className="relative mt-8 text-sm font-medium text-white/70 line-through decoration-white/40">
            {c.title}
          </p>
          <p className="relative mt-3 text-xl font-semibold leading-snug tracking-tight">
            {c.fix}
          </p>

          <Link
            href="/contact"
            onClick={(e) => e.stopPropagation()}
            className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-sm font-medium text-[#0c0705] transition-colors hover:bg-[#0c0705] hover:text-white"
          >
            Solve this with us
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5F2D] text-white">
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ how we help ------------------------------- */

// Vertical service tabs; the panel animates in whenever the tab changes.
function HowWeHelp({ ind }) {
  const items = ind.services
    .map((s) => ({ ...s, meta: solutionBySlug[s.solution] }))
    .filter((s) => s.meta);
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-8">
      <Reveal variant="left">
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          {items.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.solution}
                onClick={() => setActive(i)}
                className={`group relative flex shrink-0 items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:w-full ${
                  on
                    ? "border-transparent bg-[#0c0705] text-white shadow-xl"
                    : "border-gray-200 bg-gray-50 text-[#0c0705] hover:border-[#FF5F2D]/40 hover:bg-white"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                    on ? "bg-[#FF5F2D] text-white" : "bg-white text-[#FF5F2D] border border-gray-200"
                  }`}
                >
                  <Icon name={s.meta.icon} className="h-5 w-5" />
                </span>
                <span className="whitespace-nowrap font-semibold lg:whitespace-normal">{s.meta.name}</span>
                <Icon
                  name="arrow"
                  className={`ml-auto hidden h-4 w-4 transition-all duration-300 lg:block ${
                    on ? "translate-x-0 text-[#FF5F2D] opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal variant="right" delay={150} className="h-full">
        <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-dashed border-white/40 animate-[spin_40s_linear_infinite]" />
          <span className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#0c0705]/15 blur-3xl" />

          <div key={cur.solution} className="relative flex h-full flex-col animate-[dropdown-content-in_0.45s_ease-out]">
            <span className="pointer-events-none absolute -bottom-8 -right-6 text-white/10">
              <Icon name={cur.meta.icon} className="h-48 w-48" />
            </span>

            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] backdrop-blur">
              {cur.meta.name} for {ind.name}
            </span>
            <p className="mt-6 max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              {cur.desc}
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {cur.points.map((p, i) => (
                <li
                  key={p}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur animate-[dropdown-content-in_0.5s_ease-out_both]"
                  style={{ animationDelay: `${150 + i * 90}ms` }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#FF5F2D]">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto pt-10">
              <Link
                href={`/solutions/${cur.solution}`}
                className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 font-medium text-[#0c0705] shadow-lg shadow-black/10 transition-colors hover:bg-[#0c0705] hover:text-white"
              >
                Explore {cur.meta.short}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-transform duration-300 group-hover:-rotate-45">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

/* -------------------------------- outcomes -------------------------------- */

function Outcomes({ ind }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <Reveal variant="left" className="h-full">
        <div className="relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[2rem] bg-[#0c0705] p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]" />
          <span className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#FF5F2D]/25 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-12 -right-12 text-white/[0.04]">
            <Icon name={ind.icon} className="h-64 w-64" />
          </span>

          <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]">
            <Icon name="growth" className="h-3.5 w-3.5 text-[#FF5F2D]" />
            The outcome
          </span>
          <h3 className="relative mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Technology that works as hard as your{" "}
            <span className="text-[#FF5F2D]">{ind.name.toLowerCase()}</span> business.
          </h3>
          <p className="relative mt-4 max-w-md text-white/60">{ind.tagline}</p>
          <div className="relative mt-auto pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 font-medium text-[#0c0705] transition-colors hover:bg-[#FF5F2D] hover:text-white"
            >
              Talk to our team
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-[#0c0705]">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 content-center gap-x-10 gap-y-2 sm:grid-cols-2">
        {ind.outcomes.map((o, i) => (
          <Reveal key={o} delay={i * 90}>
            <div className="group relative flex items-start gap-4 py-5">
              <span className="absolute inset-x-0 top-0 h-px bg-gray-200" />
              <span className="absolute left-0 top-0 h-px w-0 bg-[#FF5F2D] transition-all duration-500 group-hover:w-full" />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fbe3d1] text-[#FF5F2D] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5F2D] group-hover:text-white">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <p className="pt-1.5 font-medium text-[#0c0705]">{o}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- other industries --------------------------- */

// Auto-scrolling carousel of the other industries; pauses on hover.
function OtherIndustries({ current }) {
  const others = industries.filter((x) => x.slug !== current);
  const loop = [...others, ...others];

  return (
    <Reveal variant="fade" duration={1000}>
      <div className="group/marquee relative -mx-6 overflow-hidden py-4 sm:-mx-10 lg:-mx-14 [mask-image:linear-gradient(90deg,transparent_0%,black_7%,black_93%,transparent_100%)]">
        <div
          className="flex w-max animate-marquee gap-5 px-6 group-hover/marquee:[animation-play-state:paused] sm:px-10 lg:px-14"
          style={{ animationDuration: "50s" }}
        >
          {loop.map((o, i) => (
            <Link
              key={`${o.slug}-${i}`}
              href={`/industries/${o.slug}`}
              aria-hidden={i >= others.length ? "true" : undefined}
              tabIndex={i >= others.length ? -1 : undefined}
              className="group relative flex h-[230px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#0c0705]/20 sm:w-[340px]"
            >
              <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-[#0c0705] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
              <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF5F2D]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#FF5F2D]/30" />
              <span className="pointer-events-none absolute -bottom-8 -right-8 text-[#0c0705]/[0.04] transition-colors duration-500 group-hover:text-white/[0.06]">
                <Icon name={o.icon} className="h-36 w-36" />
              </span>

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c0705] transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-[#FF5F2D] group-hover:text-white">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>

              <div className="relative mt-auto">
                <h3 className="text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
                  {o.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/70">
                  {o.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function IndustryPage({ slug }) {
  const ind = industries.find((x) => x.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);
  if (!ind) return null;

  return (
    <>
      <IndustryHero ind={ind} />

      <Section className="bg-white !pt-0">
        <Reveal variant="scale" delay={150}>
          <StatRow stats={stats} />
        </Reveal>
      </Section>

      {/* Challenges */}
      <Section className="bg-white">
        <SectionHeader title="Challenges we" highlight="solve">
          The problems {ind.name.toLowerCase()} businesses bring to us most —
          hover or tap a card to see how we fix each one.
        </SectionHeader>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {ind.challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 110} className="h-full">
              <ChallengeCard c={c} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How we help */}
      <Section className="bg-white">
        <div id="how-we-help" className="scroll-mt-28" />
        <SectionHeader title="How Qytrona" highlight="helps">
          Our services, shaped around {ind.name.toLowerCase()} — pick a service
          to see what we build.
        </SectionHeader>
        <HowWeHelp ind={ind} />
      </Section>

      {/* What we build */}
      <Section className="bg-white">
        <SectionHeader title="Solutions we" highlight="build">
          Proven products and features we design and develop for{" "}
          {ind.name.toLowerCase()} teams.
        </SectionHeader>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {ind.builds.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120} className="h-full">
              <FeatureCard f={f} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <SectionHeader title="How we" highlight="work">
          A simple, transparent approach — from understanding your business to
          measurable growth.
        </SectionHeader>
        <ProcessTimeline steps={process} />
      </Section>

      {/* Outcomes */}
      <Section className="bg-white">
        <SectionHeader title="What you" highlight="gain">
          The results our technology and marketing are built to deliver.
        </SectionHeader>
        <Outcomes ind={ind} />
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <SectionHeader title="Common" highlight="questions">
          What {ind.name.toLowerCase()} clients usually ask before we start.
        </SectionHeader>
        <div className="space-y-3">
          {ind.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 100}>
              <FaqItem
                item={f}
                index={i}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Other industries */}
      <Section className="bg-white">
        <SectionHeader title="Other industries we" highlight="serve">
          The same team and expertise, tailored to every sector.
        </SectionHeader>
        <OtherIndustries current={ind.slug} />
      </Section>

      <Reveal variant="scale">
        <CtaBanner
          title={`Let's transform your ${ind.name.toLowerCase()}`}
          highlight="business"
          text="Tell us about your goals and we'll suggest the right mix of website, app, software and marketing."
          label="Book a Free Call"
        />
      </Reveal>
    </>
  );
}
