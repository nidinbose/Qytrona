"use client";

import { useEffect, useState } from "react";
import Globe from "./Globe";

const flipPhrases = [
  "Website Development",
  "Digital Marketing",
  "Mobile Application Development",
  "Custom Software Development",
];

function FlipWord({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <span
      className="relative inline-block align-top"
      style={{ perspective: "800px" }}
    >
      <span className="invisible block" aria-hidden="true">
        {longest}
      </span>
      {words.map((word, i) => {
        const active = i === index;
        return (
          <span
            key={word}
            className="absolute left-0 top-0 w-full bg-clip-text text-transparent transition-all duration-700"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #111827 0%, #111827 45%, rgba(17,24,39,0.15) 95%)",
              opacity: active ? 1 : 0,
              transform: active
                ? "translateY(0) rotateX(0deg)"
                : "translateY(-16px) rotateX(75deg)",
              transformOrigin: "top",
              transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              pointerEvents: active ? "auto" : "none",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

const avatarColors = [
  "from-orange-500 to-orange-700",
  "from-gray-400 to-gray-600",
  "from-orange-600 to-orange-800",
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
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

function GrowthIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17l6-6 4 4 8-8M21 7h-6M21 7v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
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

function SearchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaletteIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3a9 9 0 000 18c1.1 0 2-.9 2-2 0-.53-.21-1-.55-1.36-.34-.36-.55-.85-.55-1.39 0-1.1.9-2 2-2h2.35A4.75 4.75 0 0021 9.75C21 5.9 16.97 3 12 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="10.5" r="1.15" fill="currentColor" />
      <circle cx="11" cy="7" r="1.15" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1.15" fill="currentColor" />
    </svg>
  );
}

// Positioned by angle (degrees, 0 = right, counter-clockwise) and radius
// (% of the globe box) so every badge sits right on the dashed orbit ring
// at every breakpoint, since both scale together with the box itself.
const ORBIT_RADIUS = 58;

const floatingBadges = [
  { label: "Digital Marketing", icon: MegaphoneIcon, angle: 25, delay: "0s" },
  { label: "Web Development", icon: CodeIcon, angle: -25, delay: "0.6s" },
  { label: "SEO Optimization", icon: SearchIcon, angle: -68, delay: "1.2s" },
  { label: "UI/UX Design", icon: PaletteIcon, angle: 68, delay: "1.8s" },
];

function FloatingBadge({ label, icon: Icon, angle, delay = "0s" }) {
  const rad = (angle * Math.PI) / 180;
  const left = 50 + ORBIT_RADIUS * Math.cos(rad);
  const top = 50 - ORBIT_RADIUS * Math.sin(rad);

  return (
    <div
      className="absolute z-20 flex items-center gap-0 sm:gap-2 xl:gap-0 2xl:gap-2 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm p-1.5 sm:px-3.5 sm:py-2 xl:p-1.5 2xl:px-3.5 2xl:py-2 text-[11px] sm:text-xs font-medium text-gray-700 whitespace-nowrap animate-float"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        transform: "translate(-50%, -50%)",
        animationDelay: delay,
      }}
    >
      <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full bg-orange-50 text-[#FF5F2D] shrink-0">
        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-3 xl:h-3 2xl:w-3.5 2xl:h-3.5" />
      </span>
      <span className="hidden sm:inline xl:hidden 2xl:inline">{label}</span>
    </div>
  );
}

export default function LandingPage() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-600">
      <div className="relative grid grid-cols-1 w-full xl:flex xl:flex-row">
        {/* Content row */}
        <div className="relative z-10 xl:order-1 flex w-full flex-col justify-center px-6 pb-12 pt-24 sm:px-10 sm:pb-16 sm:pt-28 md:pt-32 lg:px-14 lg:pt-36 lg:pb-16 xl:h-full xl:pt-40">
          <div className="max-w-xl lg:max-w-6xl">
            <div className="relative">
              <span className="absolute -top-7 left-1 text-sm text-gray-500 italic hidden sm:block">
                We are
              </span>
              <span className="absolute -top-2.5 left-14 w-11 h-11 sm:left-16 sm:w-14 sm:h-14 rounded-full border border-dashed border-[#FF5F2D]/40 hidden sm:block" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.15] tracking-tight text-[#FF5F2D]">
                Company <FlipWord words={flipPhrases} />
              </h1>
            </div>

            <div className="mt-5 sm:mt-6 flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-10 xl:flex-col xl:items-start xl:justify-start xl:gap-8">
              <div className="md:max-w-lg">
                <p className="text-gray-600 text-base sm:text-lg max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-sm leading-snug">
                  Grow Your Online Presence With Expert Web Design &
                  SEO-Driven Digital Marketing
                </p>

                <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6 flex-wrap">
                  <button className="flex items-center gap-3 bg-orange-600 hover:bg-orange-500 transition-colors rounded-full pl-6 pr-1.5 py-1.5 font-medium text-white">
                    Read More
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-[#FF5F2D]">
                      <ArrowIcon className="w-4 h-4" />
                    </span>
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {avatarColors.map((grad, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${grad} border-2 border-white`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-tight">
                      500+ Happy Clients
                      <br />
                      Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom floating cards */}
              <div className="flex items-end gap-3 sm:gap-4 flex-wrap md:max-w-sm">
                <div className="w-24 h-28 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border border-gray-200 bg-black flex items-center justify-center p-4 sm:p-5 shrink-0">
                  <img
                    src="/Images/Logo.jpeg"
                    alt="Company logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 px-4 py-3.5 sm:px-5 sm:py-4 w-[calc(100%-6.5rem)] max-w-[210px] sm:w-56 sm:max-w-none md:w-72 xl:w-56 shadow-sm">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-orange-50 rounded-full px-2.5 py-1 text-[#FF5F2D]">
                    <GrowthIcon className="w-3.5 h-3.5" />
                    Business Growth
                  </span>
                  <p className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900">
                    567+
                  </p>
                  <p className="text-sm text-gray-500">Expert Solutions</p>
                  <button className="mt-3 flex items-center justify-center w-9 h-9 rounded-full bg-orange-600 text-white hover:bg-orange-500 transition-colors">
                    <ArrowIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Globe / visual row */}
        <div className="relative xl:order-2 flex w-full items-center justify-center px-8 pb-16 pt-2 sm:px-10 sm:pb-20 lg:px-14 lg:pb-24 xl:absolute xl:inset-y-0 xl:right-0 xl:mr-16 xl:h-full xl:w-[46%] xl:min-w-[300px] xl:px-8 xl:py-0 xl:pt-0 xl:pb-0 2xl:px-10 xl:[mask-image:linear-gradient(90deg,transparent_0%,black_18%)] xl:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_18%)]">
          <div className="relative w-full max-w-[230px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px] 2xl:max-w-[500px] aspect-square">
            <Globe className="w-full h-full" />

            {/* Dashed orbit accent */}
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]"
              style={{ width: "116%", height: "116%" }}
            />

            {/* Floating service badges orbiting the globe */}
            {floatingBadges.map((badge) => (
              <FloatingBadge key={badge.label} {...badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
