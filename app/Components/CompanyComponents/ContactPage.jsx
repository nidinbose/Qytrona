"use client";

import { useState } from "react";
import Image from "next/image";
import { FaqItem, Icon, PageHero, Reveal, Section, SectionHeader } from "./Shared";

/* ---------------------------------- data ---------------------------------- */

const services = [
  "Website Development",
  "Digital Marketing",
  "Mobile Applications",
  "Custom Software",
  "Search Engine Optimization",
];

const budgets = ["< ₹50k", "₹50k – ₹2L", "₹2L – ₹5L", "₹5L+"];

const enquiryNumber = "918089913696";

const methods = [
  {
    icon: "chat",
    title: "WhatsApp Us",
    value: "+91 80899 13696",
    note: "Fastest reply",
    href: `https://wa.me/${enquiryNumber}`,
    external: true,
  },
  {
    icon: "phone",
    title: "Call Us",
    value: "+91 80899 13696",
    note: "Mon – Sat",
    href: "tel:+918089913696",
  },
  {
    icon: "clock",
    title: "Working Hours",
    value: "9:30 AM – 6:30 PM",
    note: "Monday to Saturday",
  },
  {
    icon: "pin",
    title: "Location",
    value: "Kerala, India",
    note: "Serving clients worldwide",
  },
];

const contacts = [
  {
    name: "Qytrona Technologies",
    label: "SEO & General Enquiry",
    image: "/Images/Logo.png",
    number: "918089913696",
  },
  {
    name: "Aseem",
    label: "Project Lead",
    image: "/Images/Aseem.jpeg",
    number: "918089913696",
  },
  {
    name: "Abijith",
    label: "Digital Marketing",
    image: "/Images/lg1.png",
    number: "918891883243",
  },
  {
    name: "Nidinbose",
    label: "Web App & Custom Software",
    image: "/Images/lg2.png",
    number: "917012543724",
  },
];

const nextSteps = [
  { title: "We reply within 24 hours", desc: "A real person reads every message." },
  { title: "Free discovery call", desc: "We learn your goals and timeline." },
  { title: "Clear proposal", desc: "Scope, timeline and a fixed quote." },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites launch in 3–6 weeks. Web apps, mobile apps and custom software usually take 2–4 months depending on scope — we'll give you a clear timeline in the proposal.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is quoted individually based on scope. After a short discovery call we send a fixed quote, so there are no surprises later.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work with clients worldwide and are comfortable collaborating across time zones over WhatsApp, email and video calls.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Absolutely. We offer ongoing maintenance, updates and marketing support so your site or app keeps performing long after launch.",
  },
];

/* --------------------------------- pieces --------------------------------- */

function MethodCard({ method }) {
  const body = (
    <>
      <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[1.75rem] bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.15] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white group-hover:text-[#FF5F2D]">
          <Icon name={method.icon} className="h-5 w-5" />
        </span>
        {method.href && (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c0705] transition-all duration-500 group-hover:-rotate-45 group-hover:border-transparent group-hover:bg-[#0c0705] group-hover:text-white">
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        )}
      </div>

      <div className="relative mt-8">
        <p className="text-sm text-gray-500 transition-colors duration-500 group-hover:text-white/80">
          {method.title}
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white">
          {method.value}
        </p>
        <p className="mt-1 text-xs text-gray-400 transition-colors duration-500 group-hover:text-white/70">
          {method.note}
        </p>
      </div>
    </>
  );

  const cls =
    "group relative block h-full overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#FF5F2D]/25";

  return method.href ? (
    <a
      href={method.href}
      className={cls}
      {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

// Input with a label that floats up on focus / when filled.
function FloatingField({ label, as = "input", className = "", ...props }) {
  const Tag = as;
  return (
    <div className={`relative ${className}`}>
      <Tag
        {...props}
        placeholder=" "
        className={`peer w-full rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-6 text-[15px] text-[#0c0705] outline-none transition-all duration-300 hover:border-gray-300 focus:border-[#FF5F2D] focus:shadow-[0_0_0_4px_rgba(255,95,45,0.12)] ${
          as === "textarea" ? "min-h-[150px] resize-none" : ""
        }`}
      />
      <label
        className={`pointer-events-none absolute left-4 text-gray-400 transition-all duration-300 ease-out top-2 text-xs peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#FF5F2D] ${
          as === "textarea"
            ? "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px]"
            : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[15px] peer-focus:translate-y-0"
        }`}
      >
        {label}
      </label>
      {/* underline that grows on focus */}
      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#FF5F2D] transition-all duration-500 peer-focus:w-[calc(100%-2rem)]" />
    </div>
  );
}

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 active:scale-95 ${
        active
          ? "border-[#FF5F2D] bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/25"
          : "border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-[#FF5F2D]/40 hover:text-[#0c0705]"
      }`}
    >
      <span
        className={`flex items-center justify-center overflow-hidden transition-all duration-300 ${
          active ? "w-3.5 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <Icon name="check" className="h-3.5 w-3.5 shrink-0" />
      </span>
      {children}
    </button>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [selected, setSelected] = useState([]);
  const [budget, setBudget] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [openFaq, setOpenFaq] = useState(0);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleService = (s) =>
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = [
      `Hi Qytrona, I'm ${form.name}.`,
      form.company && `Company: ${form.company}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      selected.length > 0 && `Interested in: ${selected.join(", ")}`,
      budget && `Budget: ${budget}`,
    ].filter(Boolean);
    const text = `${details.join("\n")}\n\n${form.message}`;

    setStatus("sending");
    // Open WhatsApp synchronously so popup blockers allow it, then show success.
    window.open(
      `https://wa.me/${enquiryNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setTimeout(() => setStatus("sent"), 900);
  };

  const reset = () => {
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setSelected([]);
    setBudget(null);
    setStatus("idle");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's start your"
        highlight="next project"
        description="Tell us what you're building and we'll get back within one business day with ideas, timelines and a clear quote."
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          </span>
          We usually reply within 24 hours
        </span>
      </PageHero>

      {/* Contact methods */}
      <Section className="bg-white !pt-0">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {methods.map((m, i) => (
            <Reveal key={m.title} delay={i * 120} className="h-full">
              <MethodCard method={m} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + sidebar */}
      <Section className="bg-white !pt-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
          <Reveal variant="up" duration={900}>
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-6 sm:p-10">
              <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-dashed border-[#FF5F2D]/20 animate-[spin_40s_linear_infinite]" />

              {/* success state */}
              <div
                className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/95 p-8 text-center backdrop-blur transition-all duration-500 ${
                  status === "sent" ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <span
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-[#FF5F2D] text-white shadow-2xl shadow-[#FF5F2D]/40 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    status === "sent" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                  }`}
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#FF5F2D]/30" />
                  <Icon name="check" className="relative h-9 w-9" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#0c0705] sm:text-3xl">
                  Almost there!
                </h3>
                <p className="mt-2 max-w-sm text-gray-600">
                  We&apos;ve opened WhatsApp with your message ready — just hit
                  send and we&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[#0c0705] transition-colors hover:border-[#FF5F2D] hover:text-[#FF5F2D]"
                >
                  Send another message
                </button>
              </div>

              <form onSubmit={handleSubmit} className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5F2D]/10 px-3 py-1 text-xs font-medium text-[#FF5F2D]">
                  <Icon name="spark" className="h-3.5 w-3.5" />
                  Project enquiry
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl">
                  Tell us about your <span className="text-[#FF5F2D]">project</span>
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FloatingField label="Full Name *" required value={form.name} onChange={update("name")} />
                  <FloatingField label="Email Address *" type="email" required value={form.email} onChange={update("email")} />
                  <FloatingField label="Phone Number" type="tel" value={form.phone} onChange={update("phone")} />
                  <FloatingField label="Company (optional)" value={form.company} onChange={update("company")} />
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium text-[#0c0705]">
                    What can we help with?
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <Chip key={s} active={selected.includes(s)} onClick={() => toggleService(s)}>
                        {s}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-[#0c0705]">Estimated budget</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip key={b} active={budget === b} onClick={() => setBudget(budget === b ? null : b)}>
                        {b}
                      </Chip>
                    ))}
                  </div>
                </div>

                <FloatingField
                  as="textarea"
                  label="Project details *"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="mt-8"
                />

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <Icon name="shield" className="h-4 w-4 text-[#FF5F2D]" />
                    Your details are never shared.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group/send relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#FF5F2D] py-1.5 pl-6 pr-1.5 font-medium text-white shadow-lg shadow-[#FF5F2D]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5F2D]/40 disabled:opacity-80"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-[#0c0705] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/send:translate-x-0" />
                    <span className="relative">
                      {status === "sending" ? "Sending…" : "Send Message"}
                    </span>
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FF5F2D]">
                      {status === "sending" ? (
                        <Spinner />
                      ) : (
                        <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover/send:-rotate-45" />
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal variant="right" delay={150}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0c0705] p-6 text-white sm:p-8">
                <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
                <span className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]" />
                <span className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#FF5F2D]/25 blur-3xl" />

                <span className="relative inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]">
                  <Icon name="chat" className="h-3.5 w-3.5 text-[#FF5F2D]" />
                  Talk to a specialist
                </span>
                <p className="relative mt-4 text-2xl font-semibold tracking-tight">
                  Prefer to chat directly?
                </p>

                <div className="relative mt-5 space-y-2">
                  {contacts.map((c) => (
                    <a
                      key={c.label}
                      href={`https://wa.me/${c.number}?text=${encodeURIComponent(
                        `Hi, I'm interested in ${c.label} services.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/0 p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
                    >
                      <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FF5F2D]/40 transition-all duration-300 group-hover:ring-[#FF5F2D]">
                        <Image src={c.image} alt={c.name} fill sizes="48px" className="object-cover" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold">{c.name}</span>
                        <span className="block truncate text-xs text-white/50">{c.label}</span>
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:-rotate-45 group-hover:bg-[#FF5F2D]">
                        <Icon name="arrow" className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={300}>
              <div className="rounded-[2rem] border border-gray-200 bg-gray-50 p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#FF5F2D]">
                  What happens next
                </p>
                <ol className="relative mt-5 space-y-6">
                  <span className="absolute bottom-3 left-[15px] top-3 w-[2px] bg-gradient-to-b from-[#FF5F2D] to-[#FF5F2D]/10" />
                  {nextSteps.map((s, i) => (
                    <li key={s.title} className="group relative flex gap-4">
                      <span className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#FF5F2D] bg-white text-xs font-semibold text-[#FF5F2D] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FF5F2D] group-hover:text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-[#0c0705]">{s.title}</p>
                        <p className="mt-0.5 text-sm text-gray-500">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <SectionHeader title="Frequently asked" highlight="questions">
          Quick answers to what most clients ask before getting started.
        </SectionHeader>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 100}>
              <FaqItem
                item={f}
                index={i}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
