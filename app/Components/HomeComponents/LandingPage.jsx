"use client";

import { useEffect, useState } from "react";
import WorldMapVisual from "./WorldMapVisual";

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
                "linear-gradient(90deg, #ffffff 0%, #ffffff 45%, rgba(255,255,255,0.2) 95%)",
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

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-gray-300">
      {/* Vertical stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 34px)",
        }}
      />

      {/* Hero world map panel */}
      <div
        className="absolute right-0 top-0 h-full w-[62%] sm:w-[46%] sm:min-w-[280px] flex items-center justify-center p-3 sm:p-6 lg:p-8 xl:p-10"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 18%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 18%)",
        }}
      >
        <WorldMapVisual
          className="relative w-full max-w-[220px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[2/1]"
          dotColor="rgba(156,163,175,0.55)"
          backgroundColor="transparent"
          lineColor="#ea580c"
          hubColor="#ea580c"
          pointColor="#fb923c"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col px-6 sm:px-10 lg:px-14 py-6">
        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center max-w-6xl mt-24 md:mt-30">
          <div className="relative">
            <span className="absolute -top-8 left-1 text-sm text-white italic hidden sm:block">
              We are
            </span>
            <span className="absolute -top-3 left-16 w-14 h-14 rounded-full border border-dashed border-orange-600/40 hidden sm:block" />
            <h1 className="text-4xl sm:text-4xl lg:text-8xl font-semibold leading-[1.15] tracking-tight text-orange-600">
              Company <FlipWord words={flipPhrases} />
            </h1>
          </div>

          <p className="mt-6 text-gray-400 text-lg max-w-sm leading-snug">
            Grow Your Online Presence With Expert Web Design & SEO-Driven Digital Marketing
          </p>

          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <button className="flex items-center gap-3 bg-orange-600 hover:bg-orange-500 transition-colors rounded-full pl-6 pr-1.5 py-1.5 font-medium text-white">
              Read More
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-orange-600">
                <ArrowIcon className="w-4 h-4" />
              </span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarColors.map((grad, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${grad} border-2 border-black`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-tight">
                500+ Happy Clients
                <br />
                Worldwide
              </p>
            </div>
          </div>

          {/* Bottom floating cards */}
          <div className="mt-10 flex items-end gap-4">
            <div className="w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border border-gray-800 bg-black flex items-center justify-center p-5">
              <img
                src="/Images/Logo.jpeg"
                alt="Company logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-800 px-5 py-4 w-56">
              <span className="inline-flex items-center gap-1.5 text-xs bg-gray-800 rounded-full px-2.5 py-1 text-orange-500">
                <GrowthIcon className="w-3.5 h-3.5" />
                Business Growth
              </span>
              <p className="mt-3 text-3xl font-semibold text-gray-100">567+</p>
              <p className="text-sm text-gray-400">Expert Solutions</p>
              <button className="mt-3 flex items-center justify-center w-9 h-9 rounded-full bg-orange-600 text-white hover:bg-orange-500 transition-colors">
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
