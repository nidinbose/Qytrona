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
} from "../CompanyComponents/Shared";
import SolutionVisual from "./SolutionVisuals";
import { solutions } from "./solutionsData";

const stats = [
  { value: "60+", label: "Projects Shipped" },
  { value: "120+", label: "Clients Served" },
  { value: "4", label: "Core Disciplines" },
  { value: "1", label: "Team, End to End" },
];

/* ---------------------------------- hero ---------------------------------- */

function SolutionHero({ s }) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-14 lg:pb-24 lg:pt-40">
      <span className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#FF5F2D]/[0.06] blur-3xl" />

      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="fade" duration={600}>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-[#FF5F2D]">Home</Link>
              <span className="text-gray-300">/</span>
              <span>Solutions</span>
              <span className="text-gray-300">/</span>
              <span className="text-[#0c0705]">{s.name}</span>
            </nav>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F2D]/20 bg-[#FF5F2D]/10 px-3 py-1.5 text-xs font-medium text-[#FF5F2D]">
              <Icon name={s.icon} className="h-3.5 w-3.5" />
              {s.name}
            </span>
          </Reveal>

          <AnimatedHeading
            as="h1"
            title={s.title}
            highlight={s.highlight}
            delay={150}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#0c0705] sm:text-5xl md:text-6xl xl:text-7xl"
          />

          <Reveal delay={450}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {s.intro}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.badges.map((b) => (
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
              <PillButton href="/contact">Get a Free Quote</PillButton>
              <a
                href="#process"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#0c0705] transition-colors hover:text-[#FF5F2D]"
              >
                See how we work
                <Icon name="arrow" className="h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" duration={1000} delay={200}>
          <SolutionVisual type={s.visual} badges={s.badges} />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- features -------------------------------- */

export function FeatureCard({ f, index }) {
  return (
    <article className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#FF5F2D]/25">
      <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.15] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-dashed border-[#FF5F2D]/25 animate-[spin_30s_linear_infinite] transition-colors duration-500 group-hover:border-white/40" />
      <span className="pointer-events-none absolute -bottom-4 right-4 text-[6rem] font-semibold leading-none text-[#0c0705]/[0.05] transition-colors duration-500 group-hover:text-white/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white group-hover:text-[#FF5F2D]">
          <Icon name={f.icon} className="h-6 w-6" />
        </span>
      </div>

      <div className="relative mt-10">
        <span className="block h-[2px] w-8 rounded-full bg-[#FF5F2D] transition-all duration-500 group-hover:w-14 group-hover:bg-white" />
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
          {f.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/85">
          {f.desc}
        </p>
      </div>
    </article>
  );
}

/* ---------------------------------- tools --------------------------------- */

export function ToolsMarquee({ tools }) {
  const loop = [...tools, ...tools, ...tools];
  return (
    <div className="relative w-full overflow-hidden bg-[#0c0705] py-8">
      <div className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:border-[#FF5F2D] hover:bg-[#FF5F2D]"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF5F2D]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- benefits -------------------------------- */

function Benefits({ s }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <Reveal variant="left" className="h-full">
        <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[2rem] bg-[#0c0705] p-8 text-white sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]" />
          <span className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#FF5F2D]/25 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-12 -right-12 text-white/[0.04]">
            <Icon name={s.icon} className="h-64 w-64" />
          </span>

          <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]">
            <Icon name="spark" className="h-3.5 w-3.5 text-[#FF5F2D]" />
            Why Qytrona
          </span>
          <h3 className="relative mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            One partner for your entire{" "}
            <span className="text-[#FF5F2D]">{s.short.toLowerCase()}</span> journey.
          </h3>
          <p className="relative mt-4 max-w-md text-white/60">{s.tagline}</p>
          <div className="relative mt-auto pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 font-medium text-[#0c0705] transition-colors hover:bg-[#FF5F2D] hover:text-white"
            >
              Start your project
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-[#0c0705]">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 content-center gap-x-10 gap-y-2 sm:grid-cols-2">
        {s.benefits.map((b, i) => (
          <Reveal key={b} delay={i * 90}>
            <div className="group relative flex items-start gap-4 py-5">
              <span className="absolute inset-x-0 top-0 h-px bg-gray-200" />
              <span className="absolute left-0 top-0 h-px w-0 bg-[#FF5F2D] transition-all duration-500 group-hover:w-full" />
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fbe3d1] text-[#FF5F2D] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5F2D] group-hover:text-white">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <p className="pt-1.5 font-medium text-[#0c0705]">{b}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- other solutions ---------------------------- */

function OtherSolutions({ current }) {
  const others = solutions.filter((x) => x.slug !== current);
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {others.map((o, i) => (
        <Reveal key={o.slug} delay={i * 100} className="h-full">
          <Link
            href={`/solutions/${o.slug}`}
            className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#0c0705]/20"
          >
            <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-[#0c0705] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
            <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF5F2D]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#FF5F2D]/30" />

            <div className="relative flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                <Icon name={o.icon} className="h-5 w-5" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c0705] transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-[#FF5F2D] group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
            <div className="relative mt-auto pt-8">
              <h3 className="text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
                {o.name}
              </h3>
              <p className="mt-1.5 text-sm text-gray-600 transition-colors duration-500 group-hover:text-white/70">
                {o.tagline}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function SolutionPage({ slug }) {
  const s = solutions.find((x) => x.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);
  if (!s) return null;

  return (
    <>
      <SolutionHero s={s} />

      <Section className="bg-white !pt-0">
        <Reveal variant="scale" delay={150}>
          <StatRow stats={stats} />
        </Reveal>
      </Section>

      {/* Features */}
      <Section className="bg-white">
        <SectionHeader title="What we" highlight="deliver">
          Everything you need from {s.name.toLowerCase()} — planned, built and
          supported by one team.
        </SectionHeader>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {s.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 120} className="h-full">
              <FeatureCard f={f} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Reveal variant="fade" duration={1000}>
        <div className="px-6 sm:px-10 lg:px-14">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Tools &amp; technologies we use
          </p>
          <div className="overflow-hidden rounded-[2rem]">
            <ToolsMarquee tools={s.tools} />
          </div>
        </div>
      </Reveal>

      {/* Process */}
      <Section className="bg-white">
        <div id="process" className="scroll-mt-28" />
        <SectionHeader title="Our" highlight="process">
          A clear, proven path from first conversation to results — with you in
          the loop at every step.
        </SectionHeader>
        <ProcessTimeline steps={s.process} />
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <SectionHeader title="Why choose" highlight="us">
          What you get when you work with Qytrona on {s.name.toLowerCase()}.
        </SectionHeader>
        <Benefits s={s} />
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <SectionHeader title="Common" highlight="questions">
          Straight answers to what clients ask us most about{" "}
          {s.name.toLowerCase()}.
        </SectionHeader>
        <div className="space-y-3">
          {s.faqs.map((f, i) => (
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

      {/* Other solutions */}
      <Section className="bg-white">
        <SectionHeader title="Explore other" highlight="solutions">
          Everything your business needs to grow online, under one roof.
        </SectionHeader>
        <OtherSolutions current={s.slug} />
      </Section>

      <Reveal variant="scale">
        <CtaBanner
          eyebrow={s.short}
          title="Ready to start your"
          highlight="project?"
          text="Tell us about your goals and we'll get back within one business day with ideas and a clear quote."
          label="Get a Free Quote"
        />
      </Reveal>
    </>
  );
}
