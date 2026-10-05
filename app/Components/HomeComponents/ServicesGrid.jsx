"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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


function imageVisual({ src, alt, position = "object-center" }) {
  function ImageVisual() {
    return (
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          loading="eager"
          className={`object-cover ${position}`}
        />
      </div>
    );
  }
  return ImageVisual;
}

const WebsiteVisual = imageVisual({
  src: "/Images/WA1.jpg",
  alt: "Professional, fast and SEO-optimised business website",
  // crop mostly from the bottom so the headline stays visible
  position: "object-[center_20%]",
});

const MarketingVisual = imageVisual({
  src: "/Images/WA3.jpg",
  alt: "Responsive website shown on laptop, tablet and phone",
});

const SoftwareVisual = imageVisual({
  src: "/Images/WA4.jpg",
  alt: "Business web application dashboard on a laptop",
  position: "object-[center_70%]",
});

const SeoVisual = imageVisual({
  src: "/Images/WA5.jpg",
  alt: "SEO, AEO and GEO search optimisation strategies",
  position: "object-[center_60%]",
});

const AppVisual = imageVisual({ src: "/Images/WA2.jpg", alt: "Mobile app in use on a smartphone" });




const services = [
  {
    tabLabel: "Website Development",
    tabIcon: LayoutIcon,
    heading: "Website Development",
    Visual: WebsiteVisual,
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
    Visual: MarketingVisual,
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
    tabLabel: "SEO",
    tabIcon: SearchIcon,
    heading: "Search Engine Optimisation",
    Visual: SeoVisual,
    features: [
      {
        title: "Keyword Research",
        desc: "Find the searches your customers actually use and plan pages around them.",
      },
      {
        title: "On-Page & Technical SEO",
        desc: "Fast, crawlable pages with clean structure, titles and schema markup.",
      },
      {
        title: "Local SEO",
        desc: "Google Business Profile and location pages that win 'near me' searches.",
      },
      {
        title: "Rankings & Reporting",
        desc: "Monthly reports on rankings, traffic and enquiries from search.",
      },
    ],
    capabilities: [SearchIcon, LayoutIcon, RocketIcon, ShieldIcon, CloudIcon],
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
    Visual: SoftwareVisual,
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

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:grid-cols-2 xl:gap-16">
          {/* Visual panel */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-white md:aspect-[4/3] lg:sticky lg:top-24">
            {/* keyed so each new image re-mounts and slides up from the bottom over the white panel */}
            <div key={active} className="absolute inset-0 animate-slide-up-in">
              <Visual />
            </div>
            {/* preload the other tabs' images so they're ready before they slide in */}
            <div className="hidden" aria-hidden="true">
              {services.map((s, i) => i !== active && <s.Visual key={s.tabLabel} />)}
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0c0705] sm:text-4xl lg:text-[2.75rem] xl:text-6xl">
              {service.heading}
            </h2>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2 xl:mt-8 xl:gap-3">
              {services.map((s, i) => {
                const TabIcon = s.tabIcon;
                const isActive = i === active;
                return (
                  <button
                    key={s.tabLabel}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors xl:gap-2 xl:px-4 xl:py-2 xl:text-sm ${
                      isActive
                        ? "border-[#FF5F2D] bg-[#FF5F2D] text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-[#FF5F2D]/40 hover:text-[#0c0705]"
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                    {s.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Checklist card */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-1 xl:grid-cols-2">
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
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] lg:grid-cols-1 xl:grid-cols-[1fr_auto]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
