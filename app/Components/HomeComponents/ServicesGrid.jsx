"use client";

import { useEffect, useState } from "react";

function LayoutIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18M9 9v11" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CodeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8 6L2 12l6 6M16 6l6 6-6 6M13 4l-2 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MegaphoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 11v2a2 2 0 002 2h1l3.5 5v-16L6 9H5a2 2 0 00-2 2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7a5 5 0 010 10M18 4a9 9 0 010 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloudIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 18a4.5 4.5 0 01-.5-8.98A5.5 5.5 0 0117 8.06 4 4 0 0116.5 16H7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RocketIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 15l-2 6 6-2M12 15a13 13 0 006-11 13 13 0 00-11 6l-3 3 5 5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ShieldIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l8 3v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DatabaseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PaletteIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3a9 9 0 000 18c1.1 0 2-.9 2-2 0-.53-.21-1-.55-1.36-.34-.36-.55-.85-.55-1.39 0-1.1.9-2 2-2h2.35A4.75 4.75 0 0021 9.75C21 5.9 16.97 3 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" />
      <circle cx="11" cy="7" r="1.1" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GalleryVisual() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 gap-3 p-3">
      <div className="rounded-2xl bg-gradient-to-br from-[#FF5F2D] to-[#c73f18]" />
      <div className="rounded-2xl bg-gradient-to-br from-[#0c0705] to-[#2a201c]" />
      <div className="rounded-2xl bg-gradient-to-br from-[#0c0705] to-[#2a201c]" />
      <div className="rounded-2xl bg-gradient-to-br from-[#FF5F2D]/70 to-[#FF5F2D]/20" />
    </div>
  );
}

function ChartVisual() {
  return (
    <div className="relative flex h-full flex-col justify-end p-6">
      <div className="mb-4 flex h-32 items-end gap-3">
        {[35, 60, 45, 85, 55, 75, 40].map((h, i) => (
          <div key={i} className="flex-1 rounded-full bg-[#FF5F2D]/80" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="h-2.5 w-3/4 rounded-full bg-black/10" />
      <div className="mt-2 h-2.5 w-1/2 rounded-full bg-black/10" />
      <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
        <span className="text-sm font-semibold text-[#FF5F2D]">+24%</span>
      </div>
    </div>
  );
}

function AppVisual() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="flex h-full w-2/3 max-w-[180px] flex-col gap-3 rounded-[1.75rem] border border-black/10 bg-white p-4 shadow-lg">
        <div className="mx-auto h-1.5 w-10 rounded-full bg-black/10" />
        <div className="mt-1 h-24 rounded-xl bg-gradient-to-br from-[#FF5F2D] to-[#c73f18]" />
        <div className="h-2.5 w-3/4 rounded-full bg-black/10" />
        <div className="h-2.5 w-1/2 rounded-full bg-black/10" />
        <div className="mt-auto grid grid-cols-3 gap-2">
          <div className="h-8 rounded-lg bg-black/5" />
          <div className="h-8 rounded-lg bg-[#FF5F2D]/20" />
          <div className="h-8 rounded-lg bg-black/5" />
        </div>
      </div>
    </div>
  );
}

function CodeVisual() {
  const lines = [
    { w: "60%", c: "bg-[#FF5F2D]/70" },
    { w: "85%", c: "bg-[#0c0705]/15" },
    { w: "40%", c: "bg-[#0c0705]/15" },
    { w: "70%", c: "bg-[#0c0705]/10" },
    { w: "50%", c: "bg-[#FF5F2D]/40" },
    { w: "30%", c: "bg-[#0c0705]/10" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-8">
      {lines.map((line, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#0c0705]/20" />
          <span className={`h-2.5 rounded-full ${line.c}`} style={{ width: line.w }} />
        </div>
      ))}
    </div>
  );
}

const services = [
  {
    tabLabel: "Website Development",
    tabIcon: LayoutIcon,
    heading: "Website Development",
    Visual: GalleryVisual,
    features: [
      {
        title: "Modern UI Design",
        desc: "Clean, on-brand interfaces that reflect your identity and leave a lasting first impression.",
      },
      {
        title: "Mobile-First Layouts",
        desc: "Responsive builds that deliver a seamless experience across desktop, tablet, and mobile.",
      },
      {
        title: "SEO-Ready Structure",
        desc: "A technical foundation built to help you rank and get found by the right audience.",
      },
      {
        title: "Fast, Scalable Builds",
        desc: "Performance-focused development that stays quick today and ready to grow tomorrow.",
      },
    ],
    capabilities: [LayoutIcon, CodeIcon, PaletteIcon, CloudIcon, RocketIcon],
  },
  {
    tabLabel: "Digital Marketing",
    tabIcon: MegaphoneIcon,
    heading: "Digital Marketing",
    Visual: ChartVisual,
    features: [
      {
        title: "Data-Driven SEO",
        desc: "Keyword and technical strategies that grow your organic visibility month over month.",
      },
      {
        title: "Targeted Paid Ads",
        desc: "Search and social campaigns engineered to lower cost-per-lead and lift conversions.",
      },
      {
        title: "Social Media Growth",
        desc: "Consistent, on-brand content that builds an engaged audience across every platform.",
      },
      {
        title: "Performance Reporting",
        desc: "Clear dashboards and monthly insights so you always know what's working.",
      },
    ],
    capabilities: [SearchIcon, MegaphoneIcon, CloudIcon, ShieldIcon, RocketIcon],
  },
  {
    tabLabel: "Mobile Applications",
    tabIcon: PhoneIcon,
    heading: "Mobile Application Development",
    Visual: AppVisual,
    features: [
      {
        title: "Native & Cross-Platform",
        desc: "iOS, Android, or both — built with the right stack for your timeline and budget.",
      },
      {
        title: "Intuitive UX",
        desc: "Interfaces designed around real user flows, not just screens.",
      },
      {
        title: "Secure Backend Integration",
        desc: "APIs and data layers built to scale safely with your user base.",
      },
      {
        title: "App Store Ready",
        desc: "From build to submission, we handle the polish stores expect.",
      },
    ],
    capabilities: [PhoneIcon, CodeIcon, CloudIcon, ShieldIcon, RocketIcon],
  },
  {
    tabLabel: "Custom Software",
    tabIcon: GearIcon,
    heading: "Custom Software Development",
    Visual: CodeVisual,
    features: [
      {
        title: "Tailored Workflows",
        desc: "Software modeled around how your team actually works, not a generic template.",
      },
      {
        title: "Systems Integration",
        desc: "We connect your tools and data sources into one reliable workflow.",
      },
      {
        title: "Scalable Architecture",
        desc: "Built to handle growth without a rebuild down the line.",
      },
      {
        title: "Ongoing Support",
        desc: "Continuous updates and maintenance long after launch.",
      },
    ],
    capabilities: [GearIcon, DatabaseIcon, CloudIcon, ShieldIcon, CodeIcon],
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "600+", label: "Projects Delivered" },
];

export default function ServicesGrid() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const { Visual } = service;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % services.length);
    }, 5000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
      <div className="relative w-full">
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-16">
          <span className="text-3xl font-semibold tracking-wider text-[#0c0705] sm:text-4xl lg:text-5xl lg:col-span-2">
            Our <span className="text-[#FF5F2D]">Services</span>
          </span>

          <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:col-start-3">
            From websites to full-scale software, we build the digital
            foundation your business runs on — designed, developed, and
            marketed under one roof.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Visual panel */}
          <div className="aspect-square w-full overflow-hidden rounded-[2rem] border border-black/5 bg-gray-50 shadow-sm lg:aspect-auto lg:h-full lg:sticky lg:top-24">
            <Visual />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#0c0705] sm:text-5xl lg:text-6xl">
              {service.heading}
            </h2>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {services.map((s, i) => {
                const TabIcon = s.tabIcon;
                const isActive = i === active;
                return (
                  <button
                    key={s.tabLabel}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-[#FF5F2D] bg-[#FF5F2D] text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-[#FF5F2D]/40 hover:text-[#0c0705]"
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    {s.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Checklist card */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
                {service.features.map((feature) => (
                  <div key={feature.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF5F2D] text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="font-semibold text-[#0c0705]">{feature.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities + stats row */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto]">
              <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                {service.capabilities.map((CapIcon, i) => (
                  <span
                    key={i}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-400 shadow-sm transition-colors hover:text-[#FF5F2D]"
                  >
                    <CapIcon className="h-5 w-5" />
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={i > 0 ? "border-l border-gray-200 pl-6" : ""}
                  >
                    <p className="text-2xl font-semibold text-[#0c0705] sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="mt-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#0c0705]/15 text-center text-sm font-medium leading-tight text-[#0c0705] transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D]">
              Find Out
              <br />
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
