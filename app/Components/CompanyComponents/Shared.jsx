"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

/* -------------------------------- brand mark ------------------------------- */

// Ring with a rounded orange pointer; the mask cuts a gap in the ring around the pointer.
const LOGO_POINTER = "302,292 422,346 372,412";

export function LogoMark({ className = "h-9 w-9", ringClassName = "fill-[#0c0705]" }) {
  const maskId = `logo-gap-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg viewBox="40 35 430 430" className={className} aria-hidden="true">
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width="500" height="500" fill="white" />
          <polygon points={LOGO_POINTER} fill="black" stroke="black" strokeWidth="98" strokeLinejoin="round" />
        </mask>
      </defs>
      <path
        fillRule="evenodd"
        mask={`url(#${maskId})`}
        d="M434,240 A192,192 0 1,1 50,240 A192,192 0 1,1 434,240 Z M352,240 A110,110 0 1,1 132,240 A110,110 0 1,1 352,240 Z"
        className={ringClassName}
      />
      <polygon
        points={LOGO_POINTER}
        strokeWidth="72"
        strokeLinejoin="round"
        className="fill-[#FF6B00] stroke-[#FF6B00]"
      />
    </svg>
  );
}

/* ---------------------------------- icons ---------------------------------- */

const iconPaths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 13l4 4L19 7" />,
  growth: <path d="M3 17l6-6 4 4 8-8M21 7h-6M21 7v6" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.7-8 9-4.8-1.3-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.2.6 3.5 2.8 3.5 6" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-9.5-8.6C.7 8 2 4.5 5.4 3.8 7.7 3.3 9.8 4.6 12 7c2.2-2.4 4.3-3.7 6.6-3.2C22 4.5 23.3 8 21.5 11.4 19 15.6 12 20 12 20Z" />,
  medical: <path d="M9 3.5h6v5.5h5.5v6H15v5.5H9V15H3.5V9H9V3.5Z" />,
  laptop: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
    </>
  ),
  cap: (
    <>
      <path d="M2 9l10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10" />
      <path d="M8 8h.01M11 8h.01M8 12h.01M11 12h.01M8 16h.01M11 16h.01" />
      <path d="M2 21h20" />
    </>
  ),
  dollar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1-3 2.3c0 3 6 1.4 6 4.4 0 1.4-1.3 2.3-3 2.3s-3-1-3-2.3" />
    </>
  ),
  media: (
    <>
      <rect x="2.5" y="5" width="19" height="13" rx="1.5" />
      <path d="M9.5 9l5 3-5 3V9Z" />
    </>
  ),
  truck: (
    <>
      <rect x="1.5" y="7" width="13" height="9" rx="1" />
      <path d="M14.5 10h4l3.5 3.5V16h-7.5V10Z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  construction: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V9l6-5 6 5v12" />
      <path d="M10 21v-6h4v6" />
      <path d="M6 12h12" />
    </>
  ),
  debate: (
    <>
      <path d="M4 4h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
      <path d="M19 8h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1v3l-4-3h-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  cloud: <path d="M7 18a4.5 4.5 0 01-.5-8.98A5.5 5.5 0 0117 8.06 4 4 0 0116.5 16H7z" />,
  rocket: (
    <>
      <path d="M5 15l-2 6 6-2M12 15a13 13 0 006-11 13 13 0 00-11 6l-3 3 5 5z" />
      <circle cx="15" cy="9" r="1.6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 000 18c1.1 0 2-.9 2-2 0-.53-.21-1-.55-1.36-.34-.36-.55-.85-.55-1.39 0-1.1.9-2 2-2h2.35A4.75 4.75 0 0021 9.75C21 5.9 16.97 3 12 3z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="11" cy="7" r="1" />
      <circle cx="15.5" cy="8.5" r="1" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </>
  ),
  link: <path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" />,
  cart: (
    <>
      <path d="M3 4h2l2.4 11h10.2L20 8H6.2" />
      <circle cx="9" cy="19.5" r="1.3" />
      <circle cx="17" cy="19.5" r="1.3" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 018 0v3.5" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  mobile: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  chat: <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z" />,
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1.5v6H6a2 2 0 0 1-2-2v-2ZM20 14a2 2 0 0 0-2-2h-1.5v6H18a2 2 0 0 0 2-2v-2Z" />
      <path d="M18 18v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M2.5 13h19" />
    </>
  ),
  code: <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />,
  megaphone: (
    <>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2Z" />
      <path d="M15 8a4 4 0 0 1 0 8" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
};

export function Icon({ name, className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconPaths[name]}
    </svg>
  );
}

/* --------------------------------- buttons --------------------------------- */

export function PillButton({ href, children, type, className = "" }) {
  const classes = `inline-flex items-center gap-3 rounded-full bg-orange-600 hover:bg-orange-500 transition-colors pl-6 pr-1.5 py-1.5 font-medium text-white ${className}`;
  const inner = (
    <>
      {children}
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-[#FF5F2D]">
        <Icon name="arrow" className="w-4 h-4" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type || "button"} className={classes}>
      {inner}
    </button>
  );
}

/* ---------------------------------- layout --------------------------------- */

export function Section({ children, className = "" }) {
  return (
    <section
      className={`relative w-full overflow-x-clip px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

/* -------------------------------- animations ------------------------------- */

// Tracks whether an element is on screen. Toggles both ways so animations
// replay every time the element scrolls back into view.
export function useInView({ threshold = 0.2, rootMargin = "0px 0px -8% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

const revealFrom = {
  up: "translate-y-12",
  down: "-translate-y-12",
  left: "-translate-x-12",
  right: "translate-x-12",
  scale: "scale-90",
  fade: "",
};

// Fades + slides its children in when scrolled into view.
export function Reveal({ children, variant = "up", delay = 0, duration = 800, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-none" : `opacity-0 blur-[2px] ${revealFrom[variant]}`
      } ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

// Splits text into words that rise up out of a mask one after another.
export function SplitText({ text, className = "", delay = 0, stagger = 70, inView }) {
  const words = String(text).split(" ");
  return words.map((word, i) => (
    <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
      <span
        className={`inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          inView ? "translate-y-0 rotate-0 opacity-100" : "translate-y-full rotate-6 opacity-0"
        } ${className}`}
        style={{ transitionDelay: inView ? `${delay + i * stagger}ms` : "0ms" }}
      >
        {word}
      </span>
      {i < words.length - 1 && " "}
    </span>
  ));
}

// Heading whose title + orange highlight animate in word by word.
export function AnimatedHeading({ as: Tag = "h2", title, highlight, className = "", delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const titleWords = String(title).split(" ").length;
  return (
    <Tag ref={ref} className={className}>
      <SplitText text={title} inView={inView} delay={delay} />{" "}
      {highlight && (
        <SplitText
          text={highlight}
          inView={inView}
          delay={delay + titleWords * 70}
          className="text-[#FF5F2D]"
        />
      )}
    </Tag>
  );
}

// Two-thirds title + one-third intro, matching the home page section headers.
export function SectionHeader({ title, highlight, children }) {
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-16">
      <AnimatedHeading
        title={title}
        highlight={highlight}
        className="text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl lg:text-5xl lg:col-span-2"
      />
      {children && (
        <Reveal delay={250} className="lg:col-start-3">
          <p className="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {children}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, highlight, description, children }) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-32 lg:px-14 lg:pt-40">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16 lg:items-end">
        <div className="lg:col-span-2">
          <Reveal variant="fade" duration={600}>
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-[#FF5F2D] transition-colors">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#0c0705]">{eyebrow}</span>
            </nav>
          </Reveal>

          <div className="relative">
            <span className="absolute -top-2.5 -left-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#FF5F2D]/40 hidden sm:block animate-[spin_30s_linear_infinite]" />
            <AnimatedHeading
              as="h1"
              title={title}
              highlight={highlight}
              delay={150}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-[#0c0705]"
            />
          </div>
        </div>

        <div className="lg:col-start-3">
          <Reveal delay={500}>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              {description}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={700} className="mt-6">
              {children}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

// Counts from 0 up to the numeric part of `value` ("120+" -> 120) whenever it scrolls into view.
export function CountUp({ value }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;
    let frame;
    // Re-run every time the stat scrolls back into view; reset when it leaves.
    const obs = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        if (!entry.isIntersecting) {
          setN(0);
          return;
        }
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {match ? n : value}
      {match && <span className="text-[#FF5F2D]">{suffix}</span>}
    </span>
  );
}

export function StatRow({ stats }) {
  return (
    <div className="mx-auto w-full max-w-[1600px] rounded-[2rem] border border-gray-200 bg-gray-50 p-2 shadow-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group relative flex flex-col items-center rounded-[1.5rem] px-4 py-7 text-center transition-all duration-300 hover:bg-white hover:shadow-md"
          >
            {/* dividers between cells (hidden behind hovered cell) */}
            {i > 0 && (
              <span
                className={`pointer-events-none absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 bg-gray-200 ${
                  i === 2 ? "hidden lg:block" : ""
                }`}
              />
            )}

            <p className="text-4xl font-semibold tracking-tight text-[#0c0705] sm:text-5xl">
              <CountUp value={stat.value} />
            </p>
            <span className="mt-3 block h-[2px] w-6 rounded-full bg-[#FF5F2D] transition-all duration-300 group-hover:w-12" />
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const ctaChips = [
  { icon: "layout", pos: "left-[8%] top-[22%]", delay: "0s" },
  { icon: "code", pos: "left-[14%] bottom-[18%]", delay: "1.2s" },
  { icon: "megaphone", pos: "right-[9%] top-[26%]", delay: "0.6s" },
  { icon: "growth", pos: "right-[14%] bottom-[16%]", delay: "1.8s" },
];

const ctaStats = [
  { value: "120+", label: "Clients" },
  { value: "60+", label: "Projects" },
  { value: "24h", label: "Reply time" },
];

export function CtaBanner({
  eyebrow = "Business Growth",
  title = "Ready to build something",
  highlight = "great?",
  text = "Tell us about your project and we'll get back within one business day.",
  href = "/contact",
  label = "Let's Talk",
}) {
  return (
    <Section className="bg-white">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0c0705] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        {/* grid texture fading out from the top-left, plus warm glows */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <span className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FF5F2D]/30 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-[#FF5F2D]/15 blur-3xl" />
        <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-dashed border-white/15 animate-[spin_40s_linear_infinite]" />

        {/* floating service chips (desktop) */}
        {ctaChips.map((c) => (
          <span
            key={c.icon}
            className={`pointer-events-none absolute hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#FF5F2D] shadow-xl shadow-black/30 backdrop-blur animate-float xl:flex ${c.pos}`}
            style={{ animationDelay: c.delay }}
          >
            <Icon name={c.icon} className="h-6 w-6" />
          </span>
        ))}

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF5F2D] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5F2D]" />
            </span>
            {eyebrow}
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}{" "}
            <span className="relative inline-block text-[#FF5F2D]">
              {highlight}
              {/* hand-drawn underline */}
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full" aria-hidden="true">
                <path d="M2 9 C 50 2, 150 2, 198 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={href}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF5F2D] py-1.5 pl-6 pr-1.5 font-medium text-white shadow-lg shadow-[#FF5F2D]/25 transition-colors hover:bg-white hover:text-[#0c0705]"
            >
              {label}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF5F2D] transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-[#FF5F2D] group-hover:text-white">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="https://wa.me/918089913696"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
            >
              <Icon name="chat" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* stats in a glass bar */}
          <dl className="mt-12 grid w-full max-w-xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] py-5 backdrop-blur">
            {ctaStats.map((s) => (
              <div key={s.label} className="px-2">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

// Four steps joined by a line that draws itself across when scrolled into view
// (horizontal on desktop, vertical on mobile).
export function ProcessTimeline({ steps }) {
  const [ref, inView] = useInView({ threshold: 0.25 });

  return (
    <div ref={ref} className="relative">
      {/* connector: horizontal (lg) */}
      <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-[2px] bg-gray-200 lg:block">
        <span
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF5F2D] to-[#ff8a5c] transition-[width] duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ width: inView ? "100%" : "0%" }}
        />
      </span>
      {/* connector: vertical (mobile/tablet) */}
      <span className="pointer-events-none absolute bottom-8 left-8 top-8 w-[2px] bg-gray-200 lg:hidden">
        <span
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#FF5F2D] to-[#ff8a5c] transition-[height] duration-[1600ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ height: inView ? "100%" : "0%" }}
        />
      </span>

      <ol className="relative grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-5">
        {steps.map((s, i) => (
          <li key={s.step} className="group flex gap-5 lg:flex-col lg:items-center lg:gap-0">
            {/* node */}
            <span className="relative z-[1] flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-lg font-semibold text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5F2D]">
              {/* entrance: orange ring + number light up as the line reaches this step */}
              <span
                className={`absolute -inset-[2px] rounded-full border-2 border-[#FF5F2D] transition-opacity duration-500 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: inView ? `${300 + i * 350}ms` : "0ms" }}
              />
              <span className="absolute inset-0 rounded-full bg-[#FF5F2D]/20 opacity-0 group-hover:animate-ping group-hover:opacity-100" />
              <span
                className={`relative transition-colors duration-500 group-hover:!text-white group-hover:!delay-0 ${
                  inView ? "text-[#FF5F2D]" : "text-gray-400"
                }`}
                style={{ transitionDelay: inView ? `${300 + i * 350}ms` : "0ms" }}
              >
                {s.step}
              </span>
            </span>

            {/* card: outer div handles the entrance, inner div the hover */}
            <div
              className={`flex-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:mt-6 lg:w-full ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${400 + i * 350}ms` : "0ms" }}
            >
            <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-[#FF5F2D]/40 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-[#FF5F2D]/10">
              <span className="pointer-events-none absolute -bottom-6 -right-2 text-8xl font-semibold leading-none text-[#0c0705]/[0.04] transition-colors duration-500 group-hover:text-[#FF5F2D]/10">
                {s.step}
              </span>

              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbe3d1] text-[#FF5F2D] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-[#FF5F2D] group-hover:text-white">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 text-xl font-semibold tracking-tight text-[#0c0705] sm:text-2xl">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-gray-600">
                {s.desc}
              </p>
              <span className="relative mt-5 block h-[2px] w-8 rounded-full bg-[#FF5F2D] transition-all duration-500 group-hover:w-16" />
            </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Numbered FAQ accordion row with a plus that morphs into a minus.
export function FaqItem({ item, open, onToggle, index }) {
  return (
    <div
      className={`group rounded-[1.5rem] border transition-all duration-500 ${
        open
          ? "border-[#FF5F2D]/40 bg-white shadow-xl shadow-[#FF5F2D]/10"
          : "border-gray-200 bg-gray-50 hover:border-[#FF5F2D]/30 hover:bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <span
          className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl text-sm font-bold tabular-nums transition-all duration-500 ${
            open
              ? "-rotate-6 bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] text-white shadow-lg shadow-[#FF5F2D]/40"
              : "border border-gray-200 bg-white text-[#0c0705]/40 group-hover:border-[#FF5F2D]/40 group-hover:text-[#FF5F2D]"
          }`}
        >
          {/* corner notch accent */}
          <span
            className={`absolute -right-2 -top-2 h-4 w-4 rotate-45 transition-colors duration-500 ${
              open ? "bg-white/25" : "bg-[#FF5F2D]/15"
            }`}
          />
          <span className="relative">{String(index + 1).padStart(2, "0")}</span>
        </span>
        <span className="flex-1 text-base font-semibold text-[#0c0705] sm:text-lg">
          {item.q}
        </span>
        <span
          className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
            open ? "rotate-180 bg-[#FF5F2D] text-white" : "border border-gray-200 bg-white text-[#0c0705]"
          }`}
        >
          <span className="absolute h-[2px] w-3.5 rounded-full bg-current" />
          <span
            className={`absolute h-3.5 w-[2px] rounded-full bg-current transition-transform duration-500 ${
              open ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 pl-[4.75rem] leading-relaxed text-gray-600 sm:px-6 sm:pl-[5rem]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}
