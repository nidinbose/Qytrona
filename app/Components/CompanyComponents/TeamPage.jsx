"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  CtaBanner,
  Icon,
  PageHero,
  PillButton,
  Section,
  SectionHeader,
  StatRow,
} from "./Shared";

const leadership = [
  {
    name: "Aseem",
    role: "Project Lead",
    bio: "Keeps every project on track, from first requirements to final delivery, working closely with clients and the team.",
    image: null,
    skills: ["Project Management", "Client Success", "Planning"],
  },
  {
    name: "Abhijith",
    role: "Digital Marketing Lead",
    bio: "Runs SEO, paid ads and social campaigns that turn traffic into qualified leads.",
    image: "/Images/lg1.png",
    number: "919074603243",
    skills: ["SEO", "Paid Ads", "Social Media"],
  },
  {
    name: "Nidinbose",
    role: "Web App & Custom Software Lead",
    bio: "Architects and builds websites, web platforms and custom software that scale with the business.",
    image: "/Images/lg2.png",
    number: "917012543724",
    skills: ["Next.js", "Web Apps", "Custom Software"],
  },
];

// Bento order: Development is the tall feature card, Marketing spans two columns.
const disciplines = [
  {
    icon: "code",
    title: "Development",
    desc: "Websites, web apps and custom software engineered to be fast, secure and ready to scale.",
    tags: ["Next.js", "Web Apps", "APIs", "Custom Software"],
    theme: "dark",
    layout: "md:col-span-2 xl:col-span-1 xl:row-span-2",
    Visual: CodeVisual,
  },
  {
    icon: "layout",
    title: "Design",
    desc: "UI/UX, branding and visual systems that make a lasting first impression.",
    tags: ["UI/UX", "Branding", "Figma"],
    theme: "peach",
    layout: "",
    Visual: PaletteVisual,
  },
  {
    icon: "mobile",
    title: "Mobile",
    desc: "Native and cross-platform apps, from first build to App Store launch.",
    tags: ["iOS", "Android", "Flutter"],
    theme: "light",
    layout: "",
    Visual: PhoneVisual,
  },
  {
    icon: "megaphone",
    title: "Marketing",
    desc: "SEO, paid ads and social campaigns that turn traffic into qualified leads — with clear monthly reporting.",
    tags: ["SEO", "Google Ads", "Social Media", "Analytics"],
    theme: "light",
    layout: "md:col-span-2",
    Visual: ChartVisual,
  },
];

/* --------------------------- discipline visuals --------------------------- */

function CodeVisual() {
  const lines = [
    { w: "55%", c: "bg-[#FF5F2D]/80", indent: 0 },
    { w: "75%", c: "bg-white/20", indent: 1 },
    { w: "45%", c: "bg-white/15", indent: 2 },
    { w: "65%", c: "bg-[#FF5F2D]/40", indent: 2 },
    { w: "35%", c: "bg-white/15", indent: 1 },
    { w: "50%", c: "bg-white/20", indent: 1 },
    { w: "25%", c: "bg-[#FF5F2D]/60", indent: 0 },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F2D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="space-y-3">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center gap-3" style={{ paddingLeft: `${l.indent * 16}px` }}>
            <span className="w-4 shrink-0 text-right font-mono text-[10px] text-white/25">{i + 1}</span>
            <span
              className={`h-2 rounded-full ${l.c} origin-left transition-transform duration-700 group-hover:scale-x-110`}
              style={{ width: l.w }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PaletteVisual() {
  return (
    <div className="flex items-center">
      {["bg-[#0c0705]", "bg-[#FF5F2D]", "bg-white", "bg-[#c73f18]"].map((c, i) => (
        <span
          key={c}
          className={`h-12 w-12 rounded-full border-4 border-[#fbe3d1] ${c} transition-transform duration-500 group-hover:translate-x-[var(--shift)]`}
          style={{ marginLeft: i ? "-12px" : 0, "--shift": `${i * 8}px` }}
        />
      ))}
    </div>
  );
}

function PhoneVisual() {
  return (
    <div className="flex h-24 w-14 flex-col gap-1.5 rounded-xl border border-black/10 bg-white p-1.5 shadow-md transition-transform duration-500 group-hover:-rotate-6">
      <div className="h-8 rounded-md bg-gradient-to-br from-[#FF5F2D] to-[#c73f18]" />
      <div className="h-1 w-3/4 rounded-full bg-black/10" />
      <div className="h-1 w-1/2 rounded-full bg-black/10" />
      <div className="mt-auto grid grid-cols-3 gap-1">
        <div className="h-2.5 rounded bg-black/5" />
        <div className="h-2.5 rounded bg-[#FF5F2D]/30" />
        <div className="h-2.5 rounded bg-black/5" />
      </div>
    </div>
  );
}

function ChartVisual() {
  return (
    <div className="flex h-24 items-end gap-2">
      {[35, 55, 40, 70, 50, 85, 65, 95].map((h, i) => (
        <div
          key={i}
          className="w-4 origin-bottom rounded-full bg-[#FF5F2D]/80 transition-transform duration-500 group-hover:scale-y-110 sm:w-5"
          style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
        />
      ))}
    </div>
  );
}

const disciplineThemes = {
  dark: {
    card: "bg-[#0c0705] text-white",
    desc: "text-white/60",
    tag: "border-white/15 bg-white/5 text-white/80",
    icon: "bg-[#FF5F2D] text-white",
    index: "text-white/10",
  },
  peach: {
    card: "bg-[#fbe3d1] text-[#0c0705]",
    desc: "text-[#0c0705]/70",
    tag: "border-[#0c0705]/10 bg-white/60 text-[#0c0705]/80",
    icon: "bg-[#0c0705] text-[#FF5F2D]",
    index: "text-[#FF5F2D]/20",
  },
  light: {
    card: "bg-gray-50 text-[#0c0705] border border-gray-200",
    desc: "text-gray-600",
    tag: "border-gray-200 bg-white text-gray-600",
    icon: "bg-[#FF5F2D] text-white",
    index: "text-[#0c0705]/[0.06]",
  },
};

function DisciplineCard({ discipline, index }) {
  const { icon, title, desc, tags, theme, layout, Visual } = discipline;
  const t = disciplineThemes[theme];
  const feature = theme === "dark";
  const wide = !feature && layout.includes("col-span-2");

  // Feature card: side-by-side while it spans the full row (md–lg), stacked
  // with the code window on top once it becomes the tall bento column (xl).
  const bodyClass = feature
    ? "flex-col gap-10 md:flex-row md:items-center md:justify-between xl:flex-col-reverse xl:items-stretch xl:justify-between"
    : wide
      ? "flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
      : "flex-col";
  const textClass = feature
    ? "min-w-0 md:max-w-sm xl:max-w-none"
    : wide
      ? "min-w-0 sm:max-w-md"
      : "min-w-0";
  const visualClass = feature
    ? "w-full md:max-w-sm xl:max-w-none"
    : wide
      ? "shrink-0"
      : "mt-auto pt-8";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] p-7 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl sm:p-8 ${t.card} ${layout}`}
    >
      {feature && (
        <>
          <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]" />
          <span className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#FF5F2D]/20 blur-3xl" />
        </>
      )}

      <span
        className={`pointer-events-none absolute right-6 top-4 text-6xl font-semibold leading-none sm:text-7xl 2xl:text-8xl ${t.index}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className={`relative flex flex-1 ${bodyClass}`}>
        <div className={textClass}>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${t.icon}`}
          >
            <Icon name={icon} className="h-5 w-5" />
          </span>

          <h3
            className={`mt-6 font-semibold tracking-tight break-words ${
              feature ? "text-3xl sm:text-4xl 2xl:text-5xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {title}
          </h3>
          <p className={`mt-3 text-sm leading-relaxed sm:text-base ${t.desc}`}>{desc}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className={`rounded-full border px-3 py-1 text-xs ${t.tag}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={visualClass}>
          <Visual />
        </div>
      </div>
    </article>
  );
}

const stats = [
  { value: "4", label: "Core Disciplines" },
  { value: "60+", label: "Projects Shipped" },
  { value: "120+", label: "Clients Served" },
  { value: "1", label: "Team, End to End" },
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberPortrait({ member }) {
  if (member.image) {
    return (
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-[center_20%] saturate-[0.85] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:saturate-100"
      />
    );
  }

  // No photo yet: branded monogram on a dark, dotted backdrop.
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0c0705] transition-transform duration-700 ease-out group-hover:scale-[1.06]">
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="absolute left-1/2 top-[38%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF5F2D]/30 blur-3xl" />
      <span className="absolute left-1/2 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF5F2D]/40 animate-[spin_40s_linear_infinite]" />
      <span className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-white/40 bg-clip-text text-8xl font-semibold tracking-tight text-transparent">
        {initials(member.name)}
      </span>
    </div>
  );
}

function MemberCard({ member, index }) {
  const cardRef = useRef(null);

  // Track the cursor so the orange spotlight follows it across the card.
  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      className="group relative aspect-[5/6] overflow-hidden rounded-[2rem] bg-[#0c0705] shadow-sm ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF5F2D]/20"
    >
      <MemberPortrait member={member} />

      {/* legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0705] via-[#0c0705]/55 to-transparent transition-opacity duration-500 lg:via-[#0c0705]/10 lg:group-hover:via-[#0c0705]/60" />

      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(255,95,45,0.22), transparent 60%)",
        }}
      />

      {/* glowing border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#FF5F2D]/50" />

      {/* top row */}
      <div className="absolute inset-x-5 top-5 flex items-start justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-white/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {member.role}
        </span>
      </div>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <span className="block h-[2px] w-10 bg-[#FF5F2D] transition-all duration-500 group-hover:w-20" />
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {member.name}
        </h3>

        {/* revealed on hover for desktop, always visible on touch */}
        <div className="grid grid-rows-[1fr] transition-all duration-500 ease-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {member.bio}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {member.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80 backdrop-blur"
                >
                  {s}
                </span>
              ))}
            </div>

            {member.number && (
              <a
                href={`https://wa.me/${member.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#FF5F2D] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white transition-colors hover:bg-[#e6541f]"
              >
                Chat with {member.name}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#FF5F2D]">
                  <Icon name="chat" className="h-3.5 w-3.5" />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind"
        highlight="Qytrona"
        description="Designers, developers and marketers working as one team — so your brand, product and growth are handled under one roof."
      >
        <PillButton href="/careers">Join The Team</PillButton>
      </PageHero>

      <Section className="bg-white !pt-0">
        <StatRow stats={stats} />
      </Section>

      <Section className="bg-white">
        <SectionHeader title="Meet our" highlight="leadership">
          The leads who&apos;ll guide your project from the first call to launch
          and beyond.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader title="What our team" highlight="does">
          Every project gets specialists from each discipline working side by
          side.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {disciplines.map((d, i) => (
            <DisciplineCard key={d.title} discipline={d} index={i} />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Want to work"
        highlight="with us?"
        text="Whether you're a client or a future teammate, we'd love to hear from you."
      />
    </>
  );
}
