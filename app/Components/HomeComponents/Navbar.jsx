"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ---------------------------------- icons ---------------------------------- */

const iconPaths = {
  chevron: <path d="M6 9l6 6 6-6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 10h4a1 1 0 0 1 1 1v10" />
      <path d="M8 8h.01M11 8h.01M8 12h.01M11 12h.01M8 16h.01M11 16h.01" />
      <path d="M2 21h20" />
    </>
  ),
  cap: (
    <>
      <path d="M2 9l10-5 10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-9.5-8.6C.7 8 2 4.5 5.4 3.8 7.7 3.3 9.8 4.6 12 7c2.2-2.4 4.3-3.7 6.6-3.2C22 4.5 23.3 8 21.5 11.4 19 15.6 12 20 12 20Z" />,
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
      <path d="M20 9h-1" />
    </>
  ),
  code: (
    <>
      <path d="M9 8l-4 4 4 4" />
      <path d="M15 8l4 4-4 4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M9 9v11" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17l6-6 4 4 8-8M21 7h-6M21 7v6" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2Z" />
      <path d="M15 8a4 4 0 0 1 0 8" />
      <path d="M18 5a8 8 0 0 1 0 14" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13.5v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6.5" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6.5" rx="1.5" />
      <path d="M19.5 19.5v.5a3 3 0 0 1-3 3h-2.2" />
    </>
  ),
};

function Icon({ name, className = "w-4 h-4" }) {
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

function MenuToggle({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={open}
      className="lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 shadow-md shadow-black/10 transition-transform duration-300 active:scale-90"
    >
      <span className="relative block w-4.5 h-3.5">
        <span
          className={`absolute left-0 h-[2px] w-4.5 rounded-full bg-[#0c0705] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 rotate-0"
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-[#0c0705] transition-all duration-200 ${
            open ? "w-0 opacity-0" : "w-4.5 opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 h-[2px] w-4.5 rounded-full bg-[#0c0705] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full rotate-0"
          }`}
        />
      </span>
    </button>
  );
}

/* ---------------------------------- data ---------------------------------- */

const solutionCards = [
  {
    title: "Website Development",
    desc: "Modern, high-converting websites built for growth.",
    icon: "layout",
    theme: "dark",
    preview: "gallery",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads & social media that drive real growth.",
    icon: "megaphone",
    theme: "peach",
    preview: "chart",
  },
  {
    title: "Mobile Application Development",
    desc: "Native & cross-platform apps built for scale.",
    icon: "phone",
    theme: "white",
    image: "/Images/MD1.png",
  },
  {
    title: "Search Engine Optimization",
    desc: "Data-driven SEO that grows your organic traffic.",
    icon: "search",
    theme: "peach",
    preview: "chart",
  },
];

const websiteIndustries = [
  { label: "Real Estate", icon: "building" },
  { label: "Education", icon: "cap" },
  { label: "Healthcare", icon: "heart" },
  { label: "Fintech", icon: "dollar" },
  { label: "Media & Entertainment", icon: "media" },
  { label: "Logistics", icon: "truck" },
  { label: "Construction", icon: "construction" },
];

const webAppIndustries = [
  { label: "Logistics", icon: "truck" },
  { label: "Media & Entertainment", icon: "media" },
  { label: "Real Estate", icon: "building" },
  { label: "Construction", icon: "construction" },
  { label: "Debate Academy", icon: "debate" },
  { label: "Fintech", icon: "dollar" },
  { label: "Healthcare", icon: "heart" },
];

const scheduleDays = [
  { day: "Sat", date: "12" },
  { day: "Sun", date: "13" },
  { day: "Mon", date: "14" },
  { day: "Tue", date: "15" },
  { day: "Wed", date: "16" },
];

const portfolioLinks = [
  "Website Design",
  "Web Applications",
  "Mobile Applications",
  "Case Studies",
  "View All Work",
];

const companyLinks = ["About Us", "Careers", "Our Team", "Contact Us"];

const generalEnquiryContacts = [
  {
    name: "Qytrona Technologies",
    label: "SEO & General Enquiry",
    desc: "Consultation & other questions",
    image: "/Images/Logo.jpeg",
    number: "919074603243",
    display: "+91 90746 03243",
  },
];

const consultationContacts = [
  {
    name: "Abhijith",
    label: "Digital Marketing",
    desc: "SEO, ads & social media",
    image: "/Images/lg1.png",
    number: "919074603243",
    display: "+91 90746 03243",
  },
  {
    name: "Nidinbose",
    label: "Web App & Custom Software",
    desc: "Websites, apps & platforms",
    image: "/Images/lg2.png",
    number: "917012543724",
    display: "+91 70125 43724",
  },
];

const navItems = [
  { key: "solutions", label: "Solutions", type: "solutions" },
  {
    key: "portfolio",
    label: "Portfolio",
    type: "simple",
    items: portfolioLinks,
    blurb: "A look at the products, platforms and brands we've shipped.",
  },
  { key: "industries", label: "Industries", type: "industries" },
  { key: "blogs", label: "Blogs", type: "link" },
  { key: "testimonials", label: "Testimonials", type: "link" },
  {
    key: "company",
    label: "Company",
    type: "simple",
    items: companyLinks,
    blurb: "Get to know the team building Qytrona and the story behind it.",
  },
];

/* ------------------------------- sub components ------------------------------ */

function Logo({ solid }) {
  return (
    <Link href="/" className="flex items-center gap-0.5 shrink-0">
      <svg viewBox="0 0 100 100" className="w-14 h-14" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75,47 A26,26 0 1,1 23,47 A26,26 0 1,1 75,47 Z M66,47 A17,17 0 1,1 32,47 A17,17 0 1,1 66,47 Z"
          className={`transition-colors duration-300 ${
            solid ? "fill-[#0c0705]" : "fill-white"
          }`}
        />
        <polygon points="41,46 56,46 78,74 63,74" className="fill-orange-500" />
      </svg>
      <span
        className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
          solid ? "text-[#0c0705]" : "text-white"
        }`}
      >
        Qytrona
      </span>
    </Link>
  );
}

function IndustryColumn({ title, items, onNavigate }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-[#0c0705] mb-4">{title}</h4>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              onClick={onNavigate}
              className="flex items-center gap-3 text-[15px] text-neutral-600 hover:text-orange-500 transition-colors"
            >
              <Icon name={item.icon} className="w-4.5 h-4.5 text-orange-500 shrink-0" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustriesMenu({ onNavigate }) {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <IndustryColumn title="Websites" items={websiteIndustries} onNavigate={onNavigate} />
      <IndustryColumn title="Web Application" items={webAppIndustries} onNavigate={onNavigate} />

      <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 flex flex-col shadow-sm">
        <h4 className="text-lg font-semibold text-[#0c0705]">Start your project</h4>
        <p className="text-lg font-semibold italic text-orange-500 -mt-1 mb-3">
          Now
        </p>
        <p className="text-sm text-neutral-600 leading-snug mb-5">
          Book a call with our CEO Anand to kick off your project planning.
        </p>

        <div className="flex items-center gap-2 mb-6">
          {scheduleDays.map((d, i) => (
            <button
              key={d.date}
              onClick={() => setSelectedDay(i)}
              className={`flex-1 flex flex-col items-center justify-center rounded-lg border py-2 text-xs transition-colors ${
                selectedDay === i
                  ? "border-orange-500 text-orange-500"
                  : "border-black/10 text-neutral-600 hover:border-black/25"
              }`}
            >
              <span>{d.day}</span>
              <span className="font-semibold text-sm">{d.date}</span>
            </button>
          ))}
        </div>

        <a
          href="#contact"
          onClick={onNavigate}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Schedule A Call
          <Icon name="arrow" className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

const solutionCardThemes = {
  dark: { wrap: "bg-[#0c0705] text-white" },
  peach: { wrap: "bg-[#fbe3d1] text-[#0c0705]" },
  white: { wrap: "bg-white text-[#0c0705] border border-black/10 shadow-sm" },
};

function SolutionPreview({ variant }) {
  if (variant === "gallery") {
    return (
      <div className="grid grid-cols-2 gap-1.5 h-full">
        <div className="rounded-lg bg-gradient-to-br from-indigo-500/80 to-violet-800" />
        <div className="rounded-lg bg-gradient-to-br from-fuchsia-500/70 to-purple-900" />
        <div className="rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900" />
        <div className="rounded-lg bg-gradient-to-br from-violet-400/70 to-indigo-900" />
      </div>
    );
  }

  if (variant === "chart") {
    return (
      <div className="relative h-full p-3">
        <div className="absolute inset-3 rounded-xl bg-white shadow-md border border-black/5 p-3 flex flex-col">
          <div className="flex items-end gap-1.5 h-10 mb-2">
            {[35, 60, 45, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-full bg-orange-500/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="h-1.5 w-3/4 bg-neutral-200 rounded-full mb-1.5" />
          <div className="h-1.5 w-1/2 bg-neutral-200 rounded-full" />
        </div>
        <div className="absolute right-4 bottom-4 w-14 h-14 rounded-full bg-white shadow-lg border border-black/5 flex items-center justify-center">
          <span className="text-[11px] font-semibold text-orange-500">+24%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full p-3">
      <div className="absolute inset-3 rounded-xl bg-white shadow-md border border-black/5 p-3 flex flex-col gap-1.5">
        <div className="h-1.5 w-2/3 bg-neutral-200 rounded-full" />
        <div className="h-1.5 w-1/2 bg-neutral-200 rounded-full" />
        <div className="mt-auto flex items-center gap-2">
          <svg viewBox="0 0 36 36" className="w-9 h-9 -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#f3f4f6" strokeWidth="4" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#f97316"
              strokeWidth="4"
              strokeDasharray="70 100"
              strokeLinecap="round"
            />
          </svg>
          <div className="h-1.5 w-10 bg-neutral-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function SolutionsMenu({ onNavigate }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {solutionCards.map((card) => (
        <a
          key={card.title}
          href="#"
          onClick={onNavigate}
          className={`group overflow-hidden flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1.5 ${
            solutionCardThemes[card.theme].wrap
          }`}
        >
          <h4 className="p-6 pb-3 min-h-[4.25rem] flex items-start text-lg font-semibold leading-snug tracking-tight">
            {card.title}
          </h4>

          <div className="relative aspect-[3/2] overflow-hidden">
            {card.image ? (
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
            ) : (
              <div className="h-full transition-transform duration-500 ease-out group-hover:scale-[1.06]">
                <SolutionPreview variant={card.preview} />
              </div>
            )}
          </div>
        </a>
      ))}
    </div>
  );
}

function SimpleMenu({ item, onNavigate }) {
  return (
    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
      <ul>
        {item.items.map((link) => (
          <li key={link} className="border-b border-black/10">
            <a
              href="#"
              onClick={onNavigate}
              className="group flex items-center justify-between py-4 text-lg sm:text-xl lg:text-2xl font-semibold text-[#0c0705]/80 hover:text-[#FF5F2D] transition-colors"
            >
              <span className="transition-colors">{link}</span>
              <Icon
                name="arrow"
                className="w-6 h-6 text-[#FF5F2D] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-black/10 bg-neutral-50 p-8 shadow-sm">
        <span className="inline-flex items-center gap-1.5 text-xs bg-orange-100 rounded-full px-2.5 py-1 text-orange-500">
          <Icon name="growth" className="w-3.5 h-3.5" />
          Business Growth
        </span>
        <p className="mt-4 text-2xl font-semibold text-[#0c0705] leading-snug">
          {item.blurb}
        </p>
        <a
          href="#contact"
          onClick={onNavigate}
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors pl-5 pr-1.5 py-1.5 text-sm font-medium text-white"
        >
          Request a Quote
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-black">
            <Icon name="arrow" className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </div>
  );
}

function WhatsAppContactRow({ contact, onNavigate }) {
  return (
    <a
      href={`https://wa.me/${contact.number}?text=${encodeURIComponent(
        `Hi, I'm interested in ${contact.label} services.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-neutral-50 transition-colors"
    >
      <span className="relative block w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#25D366]/20 shrink-0">
        <Image
          src={contact.image}
          alt={contact.name}
          fill
          sizes="40px"
          className="object-cover"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-[#0c0705]">
          {contact.name}
        </span>
        <span className="block text-xs text-neutral-500 truncate">
          {contact.label}
        </span>
      </span>
    </a>
  );
}

function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      ref={ref}
      className="block relative"
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => {
          cancelClose();
          setOpen(true);
        }}
        aria-label="Make a free consultation on WhatsApp"
        aria-expanded={open}
        className="flex items-center justify-center gap-2 rounded-full bg-[#FF5F2D] hover:bg-[#e6541f] w-11 h-11 xl:w-auto xl:h-auto xl:pl-4 xl:pr-5 xl:py-2.5 text-sm font-medium text-white transition-all duration-300 active:scale-95"
      >
        <Icon name="headset" className="w-5 h-5" />
        <span className="hidden xl:inline">Free Consultation</span>
      </button>

      <div
        className={`absolute right-0 top-full mt-3 w-72 z-[999] origin-top-right rounded-2xl bg-white border border-black/10 shadow-2xl shadow-black/15 p-2 transition-all duration-200 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <p className="px-3 pt-2 pb-1 text-xs font-medium text-neutral-400 uppercase tracking-wide">
          General Enquiry
        </p>
        {generalEnquiryContacts.map((contact) => (
          <WhatsAppContactRow
            key={contact.label}
            contact={contact}
            onNavigate={() => setOpen(false)}
          />
        ))}

        <p className="px-3 pt-3 pb-1 text-xs font-medium text-neutral-400 uppercase tracking-wide">
          Consultation
        </p>
        {consultationContacts.map((contact) => (
          <WhatsAppContactRow
            key={contact.label}
            contact={contact}
            onNavigate={() => setOpen(false)}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- main navbar -------------------------------- */

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 200);
  };

  const openMenuNow = (key) => {
    cancelClose();
    setOpenMenu(key);
  };

  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      cancelClose();
      setOpenMenu(null);
      setMobileOpen(false);
      setMobileExpanded(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMenu || mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      const t = setTimeout(() => setMobileExpanded(null), 400);
      return () => clearTimeout(t);
    }
  }, [mobileOpen]);

  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (!openMenu && !mobileOpen) {
          if (currentY < 80) {
            setHideNav(false);
          } else if (delta > 4) {
            setHideNav(true);
          } else if (delta < -4) {
            setHideNav(false);
          }
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openMenu, mobileOpen]);

  const activeItem = navItems.find((i) => i.key === openMenu);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div
        className={`relative transition-[background-color,transform] duration-300 ease-out bg-white ${
          hideNav && !openMenu && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="relative z-10 w-full pl-2 pr-6 sm:px-10 lg:px-14 h-20 md:h-24 flex items-center justify-between">
          <Logo solid />

          <div className="hidden lg:flex items-center">
            <ul
              className="flex items-center gap-8"
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              {navItems.map((item) => {
                const isOpen = openMenu === item.key;
                const hasDropdown = item.type !== "link";

                return (
                  <li
                    key={item.key}
                    onMouseEnter={() =>
                      openMenuNow(hasDropdown ? item.key : null)
                    }
                  >
                    <a
                      href={hasDropdown ? undefined : "#"}
                      className={`flex items-center gap-1.5 py-2 text-[15px] font-medium border-b-2 transition-colors cursor-pointer ${
                        isOpen
                          ? "text-[#FF5F2D] border-[#FF5F2D]"
                          : "text-black border-transparent hover:text-[#FF5F2D]"
                      }`}
                      aria-expanded={hasDropdown ? isOpen : undefined}
                    >
                      {item.label}
                      {hasDropdown && (
                        <Icon
                          name="chevron"
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <WhatsAppButton />
            <MenuToggle open={mobileOpen} onClick={() => setMobileOpen((v) => !v)} />
          </div>
        </nav>
      </div>

      {/* backdrop: closes the dropdown when interacting below it */}
      <div
        onClick={() => setOpenMenu(null)}
        className={`hidden lg:block fixed inset-x-0 top-20 md:top-24 bottom-0 z-30 bg-black/50 transition-opacity duration-300 ${
          activeItem
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* half-screen dropdown panel */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={`hidden lg:block fixed inset-x-0 top-20 md:top-24 z-40 h-[50vh] rounded-b-3xl overflow-y-auto bg-white transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          activeItem
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          clipPath: activeItem
            ? "inset(0 0 0% 0)"
            : "inset(0 0 100% 0)",
        }}
      >
        {activeItem && (
          <div
            key={activeItem.key}
            className="relative z-[1] w-full px-6 sm:px-10 lg:px-14 py-12 md:py-16 max-w-[1800px] mx-auto animate-[dropdown-content-in_0.35s_ease-out]"
          >
            {activeItem.type === "solutions" && (
              <SolutionsMenu onNavigate={() => setOpenMenu(null)} />
            )}
            {activeItem.type === "industries" && (
              <IndustriesMenu onNavigate={() => setOpenMenu(null)} />
            )}
            {activeItem.type === "simple" && (
              <SimpleMenu
                item={activeItem}
                onNavigate={() => setOpenMenu(null)}
              />
            )}
          </div>
        )}
      </div>

      {/* mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 z-50 w-full bg-black/30 backdrop-blur-2xl border-t border-white/10 overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
          mobileOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="px-4 py-3">
          {navItems.map((item, index) => {
            const expanded = mobileExpanded === item.key;
            const hasDropdown = item.type !== "link";

            return (
              <li
                key={item.key}
                className={`border-b border-white/10 last:border-none transition-all duration-400 ease-out ${
                  mobileOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${90 + index * 50}ms` : "0ms",
                }}
              >
                <button
                  className="w-full flex items-center justify-between py-3.5 text-xl font-medium text-white/90"
                  onClick={() =>
                    hasDropdown
                      ? setMobileExpanded(expanded ? null : item.key)
                      : setMobileOpen(false)
                  }
                >
                  {item.label}
                  {hasDropdown && (
                    <Icon
                      name="chevron"
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expanded ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  )}
                </button>

                {hasDropdown && (
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4">
                        {item.type === "simple" && (
                          <ul className="space-y-1">
                            {item.items.map((link) => (
                              <li key={link}>
                                <a
                                  href="#"
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-3 py-2.5 text-lg text-white/60 hover:text-orange-500"
                                >
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.type === "industries" && (
                          <ul className="space-y-1">
                            {[...websiteIndustries, ...webAppIndustries]
                              .filter(
                                (v, i, arr) =>
                                  arr.findIndex((x) => x.label === v.label) === i
                              )
                              .map((ind) => (
                                <li key={ind.label}>
                                  <a
                                    href="#"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 text-lg text-white/60 hover:text-orange-500"
                                  >
                                    <Icon name={ind.icon} className="w-6 h-6 text-orange-500" />
                                    {ind.label}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        )}
                        {item.type === "solutions" && (
                          <ul className="space-y-1">
                            {solutionCards.map((c) => (
                              <li key={c.title}>
                                <a
                                  href="#"
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 text-lg text-white/60 hover:text-orange-500"
                                >
                                  <Icon name={c.icon} className="w-6 h-6 text-orange-500" />
                                  {c.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
