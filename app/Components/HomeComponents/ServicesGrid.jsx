"use client";

import { useEffect, useRef } from "react";

function CodeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8 6L2 12l6 6M16 6l6 6-6 6M13 4l-2 16"
        stroke="currentColor"
        strokeWidth="2"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7a5 5 0 010 10M18 4a9 9 0 010 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11 18h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GearIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GalleryPreview() {
  return (
    <div className="grid h-full grid-cols-2 gap-2.5">
      <div className="rounded-xl bg-gradient-to-br from-[#FF5F2D]/70 to-[#7a2b12]" />
      <div className="rounded-xl bg-gradient-to-br from-white/20 to-white/5" />
      <div className="rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02]" />
      <div className="rounded-xl bg-gradient-to-br from-[#FF5F2D]/40 to-[#FF5F2D]/5" />
    </div>
  );
}

function ChartPreview() {
  return (
    <div className="relative flex h-full flex-col justify-end p-2">
      <div className="mb-3 flex h-24 items-end gap-2">
        {[35, 60, 45, 85, 55, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-[#FF5F2D]/70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="h-2 w-3/4 rounded-full bg-white/10" />
      <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
      <div className="absolute right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
        <span className="text-xs font-semibold text-[#FF5F2D]">+24%</span>
      </div>
    </div>
  );
}

function AppPreview() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-full w-2/3 max-w-[140px] flex-col gap-2 rounded-[1.5rem] border border-white/15 bg-white/5 p-3">
        <div className="mx-auto h-1 w-8 rounded-full bg-white/20" />
        <div className="mt-1 h-16 rounded-lg bg-gradient-to-br from-[#FF5F2D]/60 to-[#FF5F2D]/10" />
        <div className="h-2 w-3/4 rounded-full bg-white/15" />
        <div className="h-2 w-1/2 rounded-full bg-white/10" />
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          <div className="h-6 rounded-md bg-white/10" />
          <div className="h-6 rounded-md bg-[#FF5F2D]/40" />
          <div className="h-6 rounded-md bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function CodePreview() {
  const lines = [
    { w: "60%", c: "bg-[#FF5F2D]/60" },
    { w: "85%", c: "bg-white/15" },
    { w: "40%", c: "bg-white/15" },
    { w: "70%", c: "bg-white/10" },
    { w: "50%", c: "bg-[#FF5F2D]/40" },
    { w: "30%", c: "bg-white/10" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 rounded-xl border border-white/10 bg-black/40 p-4">
      {lines.map((line, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
          <span
            className={`h-2 rounded-full ${line.c}`}
            style={{ width: line.w }}
          />
        </div>
      ))}
    </div>
  );
}

const services = [
  {
    title: "Website Development",
    description:
      "We design and build fast, scalable websites that turn visitors into customers — from marketing sites to complex web platforms.",
    Icon: CodeIcon,
    Preview: GalleryPreview,
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, paid ads and social strategies engineered to grow your audience and turn clicks into revenue.",
    Icon: MegaphoneIcon,
    Preview: ChartPreview,
  },
  {
    title: "Mobile Application Development",
    description:
      "Native and cross-platform apps crafted for performance, built to scale with your business.",
    Icon: PhoneIcon,
    Preview: AppPreview,
  },
  {
    title: "Custom Software Development",
    description:
      "Bespoke software and internal tools tailored to your workflow, built to solve problems off-the-shelf products can't.",
    Icon: GearIcon,
    Preview: CodePreview,
  },
];

function ServiceCard({ service, index, wrapperRef, cardRef }) {
  const { title, description, Icon, Preview } = service;

  return (
    <div ref={wrapperRef} className="relative h-[220vh]" style={{ zIndex: index + 1 }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 sm:px-10 lg:px-14">
        <div
          ref={cardRef}
          className="w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[#0c0705] p-8 shadow-2xl shadow-black/60 will-change-transform sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold tracking-wider text-[#FF5F2D]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 max-w-16 bg-white/15" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5F2D]/10 text-[#FF5F2D]">
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h3>

              <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
                {description}
              </p>

              <button className="mt-8 flex items-center gap-3 rounded-full bg-[#FF5F2D] pl-6 pr-1.5 py-1.5 font-medium text-white transition-colors hover:bg-[#e6541f]">
                Explore Service
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#FF5F2D]">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </button>
            </div>

            <div className="h-56 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:h-64 lg:h-72">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const wrapperRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    let raf = null;

    function update() {
      const vh = window.innerHeight;

      for (let i = 0; i < services.length - 1; i++) {
        const nextWrapper = wrapperRefs.current[i + 1];
        const card = cardRefs.current[i];
        if (!nextWrapper || !card) continue;

        const nextTop = nextWrapper.getBoundingClientRect().top;
        const progress = Math.min(Math.max(1 - nextTop / vh, 0), 1);

        card.style.transform = `scale(${1 - progress * 0.06})`;
        card.style.opacity = `${1 - progress * 0.35}`;
      }

      raf = null;
    }

    function onScroll() {
      if (raf === null) raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative w-full bg-black text-white">
      <div className="relative z-10 px-6 pb-16 pt-20 text-center sm:px-10 sm:pt-24 lg:px-14">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5F2D]">
          Our Services
        </span>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          What We Do
        </h2>
      </div>

      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          service={service}
          index={index}
          wrapperRef={(el) => (wrapperRefs.current[index] = el)}
          cardRef={(el) => (cardRefs.current[index] = el)}
        />
      ))}
    </section>
  );
}
