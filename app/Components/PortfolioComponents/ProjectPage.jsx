"use client";

import Link from "next/link";
import {
  AnimatedHeading,
  CtaBanner,
  Icon,
  PillButton,
  Reveal,
  Section,
  SectionHeader,
} from "../CompanyComponents/Shared";
import { FeatureCard, ToolsMarquee } from "../SolutionComponents/SolutionPage";
import { solutions } from "../SolutionComponents/solutionsData";
import { industries } from "../IndustryComponents/industriesData";
import { categories, projects } from "./portfolioData";
import ProjectCard, { SampleBadge } from "./ProjectCard";
import ProjectCover from "./ProjectCover";

const solutionBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s]));
const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

/* ---------------------------------- hero ---------------------------------- */

function ProjectHero({ p }) {
  const cat = categoryBySlug[p.category];
  const ind = industryBySlug[p.industry];

  const meta = [
    { label: "Industry", icon: ind?.icon, value: ind?.name, href: ind && `/industries/${ind.slug}` },
    { label: "Category", icon: cat?.icon, value: cat?.name, href: cat && `/portfolio/${cat.slug}` },
    { label: "Platform", icon: "mobile", value: p.platform },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-14 lg:pt-40">
      <span className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#FF5F2D]/[0.06] blur-3xl" />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-end lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal variant="fade" duration={600}>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-[#FF5F2D]">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/portfolio" className="transition-colors hover:text-[#FF5F2D]">Portfolio</Link>
              <span className="text-gray-300">/</span>
              <Link href={`/portfolio/${cat.slug}`} className="transition-colors hover:text-[#FF5F2D]">{cat.name}</Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#0c0705]">{p.name}</span>
            </nav>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F2D]/20 bg-[#FF5F2D]/10 px-3 py-1.5 text-xs font-medium text-[#FF5F2D]">
                <Icon name="briefcase" className="h-3.5 w-3.5" />
                Case Study
              </span>
              {p.sample && <SampleBadge />}
            </div>
          </Reveal>

          <AnimatedHeading
            as="h1"
            title={p.name}
            delay={150}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#0c0705] sm:text-5xl md:text-6xl"
          />
          <Reveal delay={400}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">{p.summary}</p>
          </Reveal>
        </div>

        <Reveal delay={500}>
          <dl className="divide-y divide-gray-200 rounded-[1.75rem] border border-gray-200 bg-gray-50">
            {meta.map((m) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#FF5F2D] shadow-sm">
                    <Icon name={m.icon} className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <dt className="text-xs text-gray-500">{m.label}</dt>
                    <dd className="font-semibold text-[#0c0705]">{m.value}</dd>
                  </span>
                  {m.href && (
                    <Icon name="arrow" className="h-4 w-4 -translate-x-1 text-[#FF5F2D] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  )}
                </>
              );
              return m.href ? (
                <Link key={m.label} href={m.href} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white">
                  {inner}
                </Link>
              ) : (
                <div key={m.label} className="flex items-center gap-4 px-5 py-4">{inner}</div>
              );
            })}
          </dl>
        </Reveal>
      </div>

      <Reveal variant="scale" delay={300} duration={1100} className="relative mt-12">
        <div className="group overflow-hidden rounded-[2rem] border border-black/5 shadow-2xl shadow-[#0c0705]/10">
          <ProjectCover cover={p.cover} className="aspect-[4/3] sm:aspect-[16/9]" />
        </div>
      </Reveal>
    </section>
  );
}

/* --------------------------- challenge / solution ------------------------- */

function ChallengeSolution({ p }) {
  const cards = [
    { label: "The challenge", icon: "target", text: p.challenge, dark: true },
    { label: "Our solution", icon: "spark", text: p.solution, dark: false },
  ];
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {cards.map((c, i) => (
        <Reveal key={c.label} variant={i === 0 ? "left" : "right"} delay={i * 150} className="h-full">
          <article
            className={`group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] p-8 text-white transition-transform duration-500 hover:-translate-y-2 sm:p-10 ${
              c.dark ? "bg-[#0c0705]" : "bg-gradient-to-br from-[#FF5F2D] to-[#e6481a]"
            }`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
            <span className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-dashed animate-[spin_40s_linear_infinite] ${c.dark ? "border-[#FF5F2D]/30" : "border-white/40"}`} />
            <span className="pointer-events-none absolute -bottom-10 -right-10 text-white/[0.07] transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110">
              <Icon name={c.icon} className="h-52 w-52" />
            </span>

            <div className="relative flex items-center gap-3">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.dark ? "bg-[#FF5F2D] text-white" : "bg-white text-[#FF5F2D]"}`}>
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] backdrop-blur">
                {c.label}
              </span>
            </div>
            <p className="relative mt-auto pt-10 text-xl font-medium leading-snug tracking-tight sm:text-2xl">
              {c.text}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* --------------------------------- outcome -------------------------------- */

function Outcome({ p }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <Reveal variant="left" className="h-full">
        <div className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] bg-[#fbe3d1] p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#FF5F2D_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,black,transparent)]" />
          <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-[#FF5F2D]">
            <Icon name="growth" className="h-3.5 w-3.5" />
            The outcome
          </span>
          <h3 className="relative mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#0c0705] sm:text-4xl">
            Built with{" "}
            {p.services.map((s, i) => (
              <span key={s}>
                <Link href={`/solutions/${s}`} className="text-[#FF5F2D] underline decoration-[#FF5F2D]/30 underline-offset-4 transition-colors hover:decoration-[#FF5F2D]">
                  {solutionBySlug[s]?.short}
                </Link>
                {i < p.services.length - 2 ? ", " : i === p.services.length - 2 ? " & " : ""}
              </span>
            ))}
            .
          </h3>
          <div className="relative mt-auto pt-8">
            <PillButton href="/contact">Get similar results</PillButton>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 content-center gap-x-10 gap-y-2 sm:grid-cols-2">
        {p.outcomes.map((o, i) => (
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

/* ---------------------------------- page ---------------------------------- */

export default function ProjectPage({ slug }) {
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx < 0) return null;
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const related = projects
    .filter((x) => x.slug !== p.slug && x.slug !== next.slug)
    .sort((a, b) => (b.category === p.category) - (a.category === p.category))
    .slice(0, 3);

  return (
    <>
      <ProjectHero p={p} />

      <Section className="bg-white">
        <SectionHeader title="Challenge &" highlight="solution">
          What the client needed — and how we solved it.
        </SectionHeader>
        <ChallengeSolution p={p} />
      </Section>

      <Section className="bg-white">
        <SectionHeader title="Key" highlight="features">
          The capabilities that made the difference.
        </SectionHeader>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {p.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 110} className="h-full">
              <FeatureCard f={f} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Reveal variant="fade" duration={1000}>
        <div className="px-6 sm:px-10 lg:px-14">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Tech stack
          </p>
          <div className="overflow-hidden rounded-[2rem]">
            <ToolsMarquee tools={p.tech} />
          </div>
        </div>
      </Reveal>

      <Section className="bg-white">
        <SectionHeader title="The" highlight="outcome">
          What the finished product delivers.
        </SectionHeader>
        <Outcome p={p} />
      </Section>

      {/* Next project */}
      <Section className="bg-white">
        <Reveal variant="scale">
          <Link
            href={`/portfolio/work/${next.slug}`}
            className="group relative grid grid-cols-1 overflow-hidden rounded-[2rem] bg-[#0c0705] text-white transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#FF5F2D]/20 md:grid-cols-2"
          >
            <div className="relative flex flex-col justify-center p-8 sm:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
              <span className="relative text-xs font-medium uppercase tracking-[0.2em] text-[#FF5F2D]">Next project</span>
              <h3 className="relative mt-4 text-3xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                {next.name}
              </h3>
              <p className="relative mt-3 max-w-md text-white/60">{next.summary}</p>
              <span className="relative mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5F2D] transition-transform duration-500 group-hover:-rotate-45 group-hover:scale-110">
                <Icon name="arrow" className="h-5 w-5" />
              </span>
            </div>
            <ProjectCover cover={next.cover} className="aspect-[4/3] md:aspect-auto md:min-h-[360px]" />
          </Link>
        </Reveal>
      </Section>

      {related.length > 0 && (
        <Section className="bg-white">
          <SectionHeader title="More" highlight="work">
            Other projects you might like.
          </SectionHeader>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 120} className="h-full">
                <ProjectCard project={r} index={i} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Reveal variant="scale">
        <CtaBanner
          title="Have a similar"
          highlight="project?"
          text="Tell us what you're building and we'll get back within one business day with ideas and a clear quote."
          label="Start Your Project"
        />
      </Reveal>
    </>
  );
}
