"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  CountUp,
  CtaBanner,
  Icon,
  PageHero,
  PillButton,
  ProcessTimeline,
  Reveal,
  Section,
  SectionHeader,
} from "./Shared";

/* ---------------------------------- data ---------------------------------- */

const marqueeWords = [
  "Build",
  "Learn",
  "Ship",
  "Grow",
  "Design",
  "Collaborate",
  "Own it",
  "Create",
];

const perks = [
  {
    icon: "laptop",
    title: "Flexible Work",
    desc: "Hybrid schedules and the gear you need to do your best work.",
  },
  {
    icon: "cap",
    title: "Learn & Grow",
    desc: "Mentorship, courses and real ownership of client projects.",
  },
  {
    icon: "heart",
    title: "Supportive Culture",
    desc: "A small, friendly team where every voice is heard.",
  },
  {
    icon: "growth",
    title: "Career Growth",
    desc: "Clear paths to senior roles as you and the company grow.",
  },
];

const departments = ["All", "Development", "Design", "Marketing"];

const openings = [
  {
    title: "Frontend Developer (React / Next.js)",
    department: "Development",
    type: "Full-time",
    location: "Hybrid",
    experience: "2+ years",
    icon: "code",
    desc: "Build fast, responsive interfaces for client websites and web apps using React, Next.js and Tailwind CSS.",
    requirements: [
      "2+ years with React and modern JavaScript",
      "Strong eye for detail and responsive layouts",
      "Familiarity with Git and REST APIs",
    ],
  },
  {
    title: "Mobile App Developer",
    department: "Development",
    type: "Full-time",
    location: "Hybrid",
    experience: "2+ years",
    icon: "mobile",
    desc: "Ship native and cross-platform mobile apps from first build to App Store submission.",
    requirements: [
      "Experience with Flutter or React Native",
      "Published at least one app to the stores",
      "Comfortable integrating secure backend APIs",
    ],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Hybrid",
    experience: "1+ years",
    icon: "layout",
    desc: "Design clean, on-brand interfaces and user flows for websites, apps and dashboards.",
    requirements: [
      "Portfolio showing web and mobile work",
      "Fluent in Figma and design systems",
      "Can turn research into clear user flows",
    ],
  },
  {
    title: "SEO & Digital Marketing Executive",
    department: "Marketing",
    type: "Full-time",
    location: "On-site",
    experience: "1+ years",
    icon: "megaphone",
    desc: "Plan and run SEO, paid ads and social campaigns that grow traffic and leads for our clients.",
    requirements: [
      "Hands-on with Google Ads, Search Console & Analytics",
      "Keyword research and on-page SEO experience",
      "Clear monthly reporting skills",
    ],
  },
];

const hiringSteps = [
  { step: "01", icon: "mail", title: "Apply", desc: "Send your CV and portfolio for the role that fits you." },
  { step: "02", icon: "chat", title: "Intro Call", desc: "A short, friendly chat about you, your goals and the role." },
  { step: "03", icon: "code", title: "Skill Round", desc: "A practical task or portfolio walkthrough — no trick questions." },
  { step: "04", icon: "briefcase", title: "Offer", desc: "Meet the team, get your offer and start building with us." },
];

const applyNumber = "919074603243";

function applyLink(role) {
  return `https://wa.me/${applyNumber}?text=${encodeURIComponent(
    `Hi, I'd like to apply for the ${role} role at Qytrona.`
  )}`;
}

/* --------------------------------- marquee -------------------------------- */

function CultureMarquee() {
  const loop = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative w-full overflow-hidden border-y border-gray-200 bg-white py-6 [mask-image:linear-gradient(90deg,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {loop.map((word, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span
              className={`px-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${
                i % 2 === 0
                  ? "text-[#0c0705]"
                  : "text-transparent [-webkit-text-stroke:1.5px_#FF5F2D]"
              }`}
            >
              {word}
            </span>
            <span className="h-3 w-3 shrink-0 rotate-45 rounded-[3px] bg-[#FF5F2D]" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------- perks --------------------------------- */

function PerkCard({ perk, index }) {
  return (
    <article className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#FF5F2D]/25">
      <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.15] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className="pointer-events-none absolute -bottom-4 right-4 text-[6rem] font-semibold leading-none text-[#0c0705]/[0.05] transition-colors duration-500 group-hover:text-white/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white group-hover:text-[#FF5F2D]">
        <Icon name={perk.icon} className="h-6 w-6" />
      </span>

      <div className="relative mt-auto pt-8">
        <h3 className="text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
          {perk.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/85">
          {perk.desc}
        </p>
      </div>
    </article>
  );
}

function LifeCard() {
  return (
    <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[2rem] bg-[#0c0705] p-8 text-white sm:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]" />
      <span className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#FF5F2D]/25 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-white">
        <Icon name="spark" className="h-3.5 w-3.5 text-[#FF5F2D]" />
        Life at Qytrona
      </span>

      <h3 className="relative mt-6 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        Do the best work of your career, with people who{" "}
        <span className="text-[#FF5F2D]">have your back.</span>
      </h3>

      <div className="relative mt-auto grid grid-cols-3 gap-4 pt-10">
        {[
          { value: "60+", label: "Projects shipped" },
          { value: "4", label: "Disciplines" },
          { value: "100%", label: "Real ownership" },
        ].map((s) => (
          <div key={s.label} className="border-l border-white/15 pl-4">
            <p className="text-2xl font-semibold sm:text-3xl">
              <CountUp value={s.value} />
            </p>
            <p className="mt-1 text-xs text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

/* -------------------------------- openings -------------------------------- */

// Pill tabs with an orange indicator that slides to the active tab.
function FilterTabs({ value, onChange, counts }) {
  const wrapRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const active = wrap?.querySelector(`[data-tab="${value}"]`);
    if (!active) return;
    const update = () =>
      setIndicator({ left: active.offsetLeft, width: active.offsetWidth });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [value]);

  return (
    <div className="max-w-full overflow-x-auto pb-1">
      <div
        ref={wrapRef}
        className="relative inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 p-1.5"
      >
        <span
          className="absolute top-1.5 bottom-1.5 rounded-full bg-[#0c0705] shadow-md transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ left: indicator.left, width: indicator.width }}
        />
        {departments.map((d) => {
          const active = value === d;
          return (
            <button
              key={d}
              data-tab={d}
              onClick={() => onChange(d)}
              className={`relative z-[1] flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active ? "text-white" : "text-gray-600 hover:text-[#0c0705]"
              }`}
            >
              {d}
              <span
                className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] transition-colors duration-300 ${
                  active ? "bg-[#FF5F2D] text-white" : "bg-white text-gray-500 border border-gray-200"
                }`}
              >
                {counts[d]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Square role card; clicking it opens the JobModal with full details.
function JobCard({ job, index, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group relative flex aspect-square w-full flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-6 text-left sm:p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#0c0705]/20"
    >
      {/* dark fill that rises on hover */}
      <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-[#0c0705] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-dashed border-[#FF5F2D]/25 animate-[spin_30s_linear_infinite] transition-colors duration-500 group-hover:border-[#FF5F2D]/50" />
      <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#FF5F2D]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#FF5F2D]/30" />
      <span className="pointer-events-none absolute -bottom-5 right-4 text-[7rem] font-semibold leading-none text-[#0c0705]/[0.05] transition-colors duration-500 group-hover:text-white/[0.06]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* top row */}
      <div className="relative flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
          <Icon name={job.icon} className="h-6 w-6" />
        </span>
        <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-500 group-hover:border-white/15 group-hover:bg-white/5 group-hover:text-white">
          {job.department}
        </span>
      </div>

      {/* bottom content */}
      <div className="relative mt-auto">
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white sm:text-2xl xl:text-[1.35rem]">
          {job.title}
        </h3>

        <p className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-gray-500 transition-colors duration-500 group-hover:text-white/70">
          {[job.type, job.location, job.experience].map((m, i) => (
            <span key={m} className="flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-[#FF5F2D]" />}
              {m}
            </span>
          ))}
        </p>

        <span className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 text-sm font-medium text-[#0c0705] transition-colors duration-500 group-hover:border-white/10 group-hover:text-white">
          View role
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-[#FF5F2D] group-hover:text-white">
            <Icon name="arrow" className="h-4 w-4" />
          </span>
        </span>
      </div>
    </button>
  );
}

function JobModal({ job, onClose }) {
  const open = Boolean(job);
  // keep the last job rendered while the close animation plays
  const [shown, setShown] = useState(job);
  useEffect(() => {
    if (job) setShown(job);
  }, [job]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!shown) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center p-0 transition-opacity duration-300 sm:items-center sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={shown.title}
    >
      <div className="absolute inset-0 bg-[#0c0705]/60 backdrop-blur-sm" onClick={onClose} />

      <div
        className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-[2rem] ${
          open ? "translate-y-0 scale-100" : "translate-y-10 scale-95"
        }`}
      >
        {/* header */}
        <div className="relative overflow-hidden bg-[#0c0705] p-7 text-white sm:p-9">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]" />
          <span className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full bg-[#FF5F2D]/25 blur-3xl" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#FF5F2D]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white">
            <Icon name={shown.icon} className="h-6 w-6" />
          </span>
          <h3 className="relative mt-5 pr-10 text-2xl font-semibold tracking-tight sm:text-3xl">
            {shown.title}
          </h3>
          <div className="relative mt-4 flex flex-wrap gap-2">
            {[
              { icon: "briefcase", label: shown.department },
              { icon: "clock", label: shown.type },
              { icon: "pin", label: shown.location },
              { icon: "growth", label: shown.experience },
            ].map((m) => (
              <span
                key={m.label}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                <Icon name={m.icon} className="h-3 w-3 text-[#FF5F2D]" />
                {m.label}
              </span>
            ))}
          </div>
        </div>

        {/* body */}
        <div className="grid gap-8 p-7 sm:p-9 md:grid-cols-[1.2fr_1fr] md:gap-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#FF5F2D]">
              About the role
            </p>
            <p className="mt-3 leading-relaxed text-gray-600">{shown.desc}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#FF5F2D]">
              What you&apos;ll need
            </p>
            <ul className="mt-3 space-y-3">
              {shown.requirements.map((req, i) => (
                <li
                  key={req}
                  className={`flex gap-3 text-sm text-gray-700 transition-all duration-500 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${200 + i * 90}ms` : "0ms" }}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF5F2D] text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-200 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <p className="text-sm text-gray-500">
            Applications go straight to our team on WhatsApp.
          </p>
          <a
            href={applyLink(shown.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/apply inline-flex items-center justify-center gap-3 rounded-full bg-[#FF5F2D] py-1.5 pl-6 pr-1.5 font-medium text-white transition-colors hover:bg-[#0c0705]"
          >
            Apply Now
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF5F2D] transition-transform duration-300 group-hover/apply:translate-x-0.5">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function CareersPage() {
  const [filter, setFilter] = useState("All");
  const [activeJob, setActiveJob] = useState(null);
  const closeJob = useCallback(() => setActiveJob(null), []);

  const visible =
    filter === "All" ? openings : openings.filter((j) => j.department === filter);

  const counts = Object.fromEntries(
    departments.map((d) => [
      d,
      d === "All" ? openings.length : openings.filter((j) => j.department === d).length,
    ])
  );

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career"
        highlight="with Qytrona"
        description="We're a growing team of developers, designers and marketers who love shipping great work. Come build products that real businesses depend on."
      >
        <PillButton href="#openings">View Open Roles</PillButton>
      </PageHero>

      <Reveal variant="fade" duration={1000}>
        <CultureMarquee />
      </Reveal>

      {/* Why join */}
      <Section className="bg-white">
        <SectionHeader title="Why join" highlight="Qytrona">
          Real projects, real ownership and a team that invests in your growth
          from day one.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Reveal variant="left" className="h-full md:col-span-2 xl:row-span-2">
            <LifeCard />
          </Reveal>
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={150 + i * 120} className="h-full">
              <PerkCard perk={p} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Openings */}
      <Section className="bg-white">
        <div id="openings" className="scroll-mt-28" />
        <SectionHeader title="Open" highlight="positions">
          Don&apos;t see a perfect fit? Send us your portfolio anyway — we&apos;re
          always happy to meet talented people.
        </SectionHeader>

        <Reveal className="mb-8">
          <FilterTabs
            value={filter}
            counts={counts}
            onChange={setFilter}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((job, i) => (
            <Reveal key={`${filter}-${job.title}`} delay={i * 100}>
              <JobCard job={job} index={i} onOpen={() => setActiveJob(job)} />
            </Reveal>
          ))}
        </div>

        <JobModal job={activeJob} onClose={closeJob} />
      </Section>

      {/* Hiring process */}
      <Section className="bg-white">
        <SectionHeader title="Our hiring" highlight="process">
          Simple, transparent and respectful of your time — most candidates hear
          back within a week.
        </SectionHeader>
        <ProcessTimeline steps={hiringSteps} />
      </Section>

      <Reveal variant="scale">
        <CtaBanner
          title="Don't see your"
          highlight="role?"
          text="Share your CV and portfolio with us and we'll reach out when a matching position opens."
          label="Get In Touch"
        />
      </Reveal>
    </>
  );
}
