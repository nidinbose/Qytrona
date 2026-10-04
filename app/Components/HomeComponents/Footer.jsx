"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------------------------------- icons ---------------------------------- */

function SocialIcon({ name, className = "w-4.5 h-4.5" }) {
  const paths = {
    facebook: (
      <path d="M14 8.5V6.8c0-.8.5-1.3 1.3-1.3H17V2.3h-2.6C11.7 2.3 10.5 4 10.5 6.4v2.1H8v3.2h2.5V22H14V11.7h2.7l.4-3.2H14Z" />
    ),
    instagram: (
      <path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.9-8.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 3.6c2.7 0 3 0 4.1.1 2.7.1 4 1.4 4.1 4.1.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.7-1.4 4-4.1 4.1-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-4-1.4-4.1-4.1-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-2.7 1.4-4 4.1-4.1 1.1-.1 1.4-.1 4.1-.1ZM12 2c-2.7 0-3.1 0-4.2.1C4.2 2.2 2.2 4.2 2.1 7.8 2 8.9 2 9.3 2 12s0 3.1.1 4.2c.1 3.6 2.1 5.6 5.7 5.7 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c3.6-.1 5.6-2.1 5.7-5.7.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-3.6-2.1-5.6-5.7-5.7C15.1 2 14.7 2 12 2Z" />
    ),
    linkedin: (
      <path d="M6.9 21H3.3V9h3.6v12ZM5.1 7.4A2.1 2.1 0 1 1 5.1 3.2a2.1 2.1 0 0 1 0 4.2ZM21 21h-3.6v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.6V9H13v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.4 2.4 4.4 5.5V21Z" />
    ),
    x: (
      <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {paths[name]}
    </svg>
  );
}

function LineIcon({ name, className = "w-4 h-4" }) {
  const paths = {
    chat: <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z" />,
    code: <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />,
    megaphone: (
      <>
        <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2Z" />
        <path d="M15 8a4 4 0 0 1 0 8" />
      </>
    ),
    behance: (
      <>
        <path d="M3 6h5a3 3 0 0 1 0 6H3V6Zm0 6h5.5a3 3 0 0 1 0 6H3v-6Z" />
        <path d="M14 7h5M13.5 14h7a3.5 3.5 0 1 0-1 2.5" />
      </>
    ),
    glassdoor: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M10 8h4" />
      </>
    ),
    clutch: <path d="M17 8.5a6 6 0 1 0 0 7" />,
    goodfirms: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M14 9h-4v6h4v-3h-2" />
      </>
    ),
  };
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
      {paths[name]}
    </svg>
  );
}

function IndiaFlag() {
  return (
    <svg viewBox="0 0 30 20" className="h-5 w-[30px] shrink-0 rounded-[2px]">
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="6.67" width="30" height="6.67" fill="#ffffff" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.2" fill="none" stroke="#000080" strokeWidth="0.6" />
    </svg>
  );
}

// One laurel branch; mirrored for the right-hand side.
function Laurel({ flip }) {
  const leaves = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 40 100"
      className={`h-24 w-10 shrink-0 text-white ${flip ? "-scale-x-100" : ""}`}
      fill="currentColor"
    >
      <path
        d="M30 96C12 82 6 60 10 30 12 18 18 8 24 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {leaves.map((i) => {
        const y = 88 - i * 12;
        const x = 22 - Math.sin((i / 7) * Math.PI) * 10 - i * 0.6;
        return (
          <g key={i}>
            <ellipse cx={x - 6} cy={y} rx="7" ry="3" transform={`rotate(-35 ${x - 6} ${y})`} />
            <ellipse cx={x + 5} cy={y - 4} rx="6" ry="2.6" transform={`rotate(-70 ${x + 5} ${y - 4})`} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------------------------------- data ---------------------------------- */

const socials = [
  { name: "facebook", label: "Facebook", href: "#" },
  { name: "instagram", label: "Instagram", href: "#" },
  { name: "linkedin", label: "LinkedIn", href: "#" },
  { name: "x", label: "X", href: "#" },
];

const contactBlocks = [
  {
    title: "INDIA",
    flag: true,
    lines: ["Qytrona Technologies", "Kerala, India", "Serving clients worldwide"],
    phone: { display: "+91 80899 13696", href: "tel:+918089913696" },
  },
  {
    title: "GENERAL ENQUIRY",
    icon: "chat",
    lines: ["SEO, consultation &", "all other questions"],
    phone: { display: "+91 80899 13696", href: "https://wa.me/918089913696" },
  },
  {
    title: "WEB & SOFTWARE",
    icon: "code",
    lines: ["Websites, web apps &", "custom software · Nidinbose"],
    phone: { display: "+91 70125 43724", href: "https://wa.me/917012543724" },
  },
  {
    title: "DIGITAL MARKETING",
    icon: "megaphone",
    lines: ["SEO, ads & social media", "Abijith"],
    phone: { display: "+91 88918 83243", href: "https://wa.me/918891883243" },
  },
];

const portfolioLinks = [
  { label: "Behance", icon: "behance", href: "#" },
  { label: "Glassdoor", icon: "glassdoor", href: "#" },
  { label: "Clutch", icon: "clutch", href: "#" },
  { label: "Good Firms", icon: "goodfirms", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

/* --------------------------------- footer --------------------------------- */

function ContactBlock({ block }) {
  const external = block.phone.href.startsWith("http");
  return (
    <div>
      <div className="flex items-center gap-4">
        {block.flag ? (
          <IndiaFlag />
        ) : (
          <span className="flex h-5 w-[30px] shrink-0 items-center justify-center rounded-[3px] bg-[#FF5F2D] text-white">
            <LineIcon name={block.icon} className="h-3.5 w-3.5" />
          </span>
        )}
        <h4 className="text-lg font-medium tracking-wide text-white">{block.title}</h4>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-white/70">
        {block.lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </p>
      <a
        href={block.phone.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-3 inline-block text-sm text-white transition-colors hover:text-[#FF5F2D]"
      >
        {block.phone.display}
      </a>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#0c0705] text-white">
      {/* faint diagonal texture + orange glow, echoing the reference's patterned backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(135deg,#ffffff_0px,#ffffff_1px,transparent_1px,transparent_28px)]" />
      <span className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#FF5F2D]/10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#FF5F2D]/[0.07] blur-3xl" />

      <div className="relative w-full px-6 pb-10 pt-16 sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto_1.7fr_auto_1fr] lg:gap-10 xl:gap-14">
          {/* Tagline + socials */}
          <div>
            <h2 className="text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
              Helping
              <br />
              start-ups
              <br />
              scale &amp; <span className="text-[#FF5F2D]">grow.</span>
            </h2>

            <div className="mt-10 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF5F2D]"
                >
                  <SocialIcon name={s.name} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <span className="hidden w-px bg-white/10 lg:block" />

          {/* Contact blocks */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {contactBlocks.map((block) => (
              <ContactBlock key={block.title} block={block} />
            ))}
          </div>

          <span className="hidden w-px bg-white/10 lg:block" />

          {/* Business portfolio + badge */}
          <div>
            <h3 className="text-2xl font-medium tracking-tight">
              Business <span className="text-[#FF5F2D]">Portfolio</span>
            </h3>

            <div className="mt-6 grid max-w-xs grid-cols-2 gap-3">
              {portfolioLinks.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  className="flex items-center justify-center gap-2 rounded-md border border-white/30 px-3 py-2 text-sm text-white/80 transition-colors hover:border-[#FF5F2D] hover:bg-[#FF5F2D] hover:text-white"
                >
                  <LineIcon name={p.icon} className="h-4 w-4" />
                  {p.label}
                </a>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2">
              <Laurel />
              <div className="flex items-center gap-3">
                <Image
                  src="/Images/Logowhite.png"
                  alt="Qytrona Technologies logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-md object-contain"
                />
                <div className="leading-tight">
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Qytrona
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-wide">
                    Technologies
                  </p>
                  <p className="mt-1 text-xs italic text-white/60">
                    120+ clients · 60+ projects
                  </p>
                </div>
              </div>
              <Laurel flip />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center">
          <div className="flex items-center gap-8">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-white/80 transition-colors hover:text-[#FF5F2D]"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-white/60">
            Copyright © {year} Qytrona Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
