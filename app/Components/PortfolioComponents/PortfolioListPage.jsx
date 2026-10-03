"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatedHeading,
  CtaBanner,
  Icon,
  PillButton,
  Reveal,
  Section,
  SectionHeader,
  StatRow,
} from "../CompanyComponents/Shared";
import { industries } from "../IndustryComponents/industriesData";
import { categories, getCategory, projects, projectsInCategory } from "./portfolioData";
import ProjectCard from "./ProjectCard";

const stats = [
  { value: "60+", label: "Projects Shipped" },
  { value: "120+", label: "Clients Served" },
  { value: "8", label: "Industries" },
  { value: "5", label: "Core Services" },
];

const filterCats = categories.filter((c) => c.slug !== "case-studies");

/* ---------------------------------- hero ---------------------------------- */

function PortfolioHero({ category }) {
  const title = category ? category.title : "Work that";
  const highlight = category ? category.highlight : "speaks for itself";
  const intro = category
    ? category.intro
    : "Websites, web apps and mobile apps we've designed and built — and the results they create for businesses across industries.";

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-14 lg:pt-40">
      <span className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#FF5F2D]/[0.06] blur-3xl" />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-end lg:gap-16">
        <div className="lg:col-span-2">
          <Reveal variant="fade" duration={600}>
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="transition-colors hover:text-[#FF5F2D]">Home</Link>
              <span className="text-gray-300">/</span>
              {category ? (
                <>
                  <Link href="/portfolio" className="transition-colors hover:text-[#FF5F2D]">Portfolio</Link>
                  <span className="text-gray-300">/</span>
                  <span className="text-[#0c0705]">{category.name}</span>
                </>
              ) : (
                <span className="text-[#0c0705]">Portfolio</span>
              )}
            </nav>
          </Reveal>

          <Reveal variant="fade" delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5F2D]/20 bg-[#FF5F2D]/10 px-3 py-1.5 text-xs font-medium text-[#FF5F2D]">
              <Icon name={category ? category.icon : "briefcase"} className="h-3.5 w-3.5" />
              {category ? category.name : "Our Portfolio"}
            </span>
          </Reveal>

          <div className="relative mt-5">
            <span className="absolute -left-3 -top-2.5 hidden h-12 w-12 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-[#FF5F2D]/40 sm:block sm:h-16 sm:w-16" />
            <AnimatedHeading
              as="h1"
              title={title}
              highlight={highlight}
              delay={150}
              className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#0c0705] sm:text-5xl md:text-6xl lg:text-7xl"
            />
          </div>
        </div>

        <div>
          <Reveal delay={450}>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">{intro}</p>
          </Reveal>
          <Reveal delay={600} className="mt-6">
            <PillButton href="/contact">Start Your Project</PillButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- filters -------------------------------- */

function FilterTabs({ value, onChange }) {
  const wrapRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabs = [{ slug: "all", name: "All Work" }, ...filterCats];

  useLayoutEffect(() => {
    const active = wrapRef.current?.querySelector(`[data-tab="${value}"]`);
    if (!active) return;
    const update = () => setIndicator({ left: active.offsetLeft, width: active.offsetWidth });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [value]);

  const count = (slug) => (slug === "all" ? projects.length : projectsInCategory(slug).length);

  return (
    <div className="max-w-full overflow-x-auto pb-1">
      <div ref={wrapRef} className="relative inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1.5">
        <span
          className="absolute bottom-1.5 top-1.5 rounded-full bg-[#0c0705] shadow-md transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ left: indicator.left, width: indicator.width }}
        />
        {tabs.map((t) => {
          const on = value === t.slug;
          return (
            <button
              key={t.slug}
              data-tab={t.slug}
              onClick={() => onChange(t.slug)}
              className={`relative z-[1] flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                on ? "text-white" : "text-gray-600 hover:text-[#0c0705]"
              }`}
            >
              {t.name}
              <span
                className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] transition-colors duration-300 ${
                  on ? "bg-[#FF5F2D] text-white" : "border border-gray-200 bg-white text-gray-500"
                }`}
              >
                {count(t.slug)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------- browse by category --------------------------- */

function CategoryLinks({ current }) {
  const others = categories.filter((c) => c.slug !== current);
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {others.map((c, i) => (
        <Reveal key={c.slug} delay={i * 100} className="h-full">
          <Link
            href={`/portfolio/${c.slug}`}
            className="group relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#FF5F2D]/25"
          >
            <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
            <div className="relative flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-white group-hover:text-[#FF5F2D]">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c0705] transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-[#0c0705] group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
            <div className="relative mt-auto pt-8">
              <h3 className="text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
                {c.name}
              </h3>
              <p className="mt-1.5 text-sm text-gray-600 transition-colors duration-500 group-hover:text-white/85">
                {c.intro}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function PortfolioListPage({ categorySlug = null }) {
  const category = categorySlug ? getCategory(categorySlug) : null;
  const [filter, setFilter] = useState("all");

  const list = category
    ? projectsInCategory(category.slug)
    : filter === "all"
      ? projects
      : projectsInCategory(filter);

  // industries that appear in the projects shown on this page
  const usedIndustries = industries.filter((ind) => list.some((p) => p.industry === ind.slug));

  return (
    <>
      <PortfolioHero category={category} />

      <Section className="bg-white !pt-0">
        <Reveal variant="scale" delay={150}>
          <StatRow stats={stats} />
        </Reveal>
      </Section>

      {/* Projects */}
      <Section className="bg-white">
        <SectionHeader
          title={category ? "Featured" : "Selected"}
          highlight={category?.slug === "case-studies" ? "case studies" : "projects"}
        >
          Click any project to see the challenge, our solution and the outcome.
        </SectionHeader>

        {!category && (
          <Reveal className="mb-8">
            <FilterTabs value={filter} onChange={setFilter} />
          </Reveal>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={`${filter}-${p.slug}`} delay={(i % 3) * 120} className="h-full">
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Industries */}
      {usedIndustries.length > 0 && (
        <Section className="bg-white">
          <SectionHeader title="Industries in" highlight="this work">
            See how we help each of these industries with technology and marketing.
          </SectionHeader>
          <div className="flex flex-wrap gap-3">
            {usedIndustries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 70} variant="scale">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 py-2 pl-2 pr-5 text-sm font-medium text-[#0c0705] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[#0c0705] hover:text-white hover:shadow-lg"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF5F2D] text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
                    <Icon name={ind.icon} className="h-4 w-4" />
                  </span>
                  {ind.name}
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Browse categories */}
      <Section className="bg-white">
        <SectionHeader title="Browse by" highlight="category">
          Explore our work by the type of product we build.
        </SectionHeader>
        <CategoryLinks current={category?.slug} />
      </Section>

      <Reveal variant="scale">
        <CtaBanner
          title="Want results like"
          highlight="these?"
          text="Tell us about your project and we'll show you how we'd approach it — with a clear plan and quote."
          label="Start Your Project"
        />
      </Reveal>
    </>
  );
}
