"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon, Reveal, Section } from "../CompanyComponents/Shared";

const expert = {
  name: "Aseem",
  role: "Project Lead",
  image: "/Images/Aseem.jpeg",
  number: "918089913696",
};

// Office hours in IST: Monday–Saturday, 9:30 AM – 6:30 PM.
function getAvailability(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value])
  );
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);
  const open = parts.weekday !== "Sun" && minutes >= 9 * 60 + 30 && minutes < 18 * 60 + 30;
  return open ? { online: true, label: "Online now" } : { online: false, label: "Back at 9:30 AM IST" };
}

function useAvailability() {
  // Rendered as "office hours" on the server, then resolved to the visitor's live status.
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const tick = () => setStatus(getAvailability());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 60_000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);
  return status;
}

function TypingDots() {
  return (
    <span className="ml-3 inline-flex translate-y-[-0.15em] items-end gap-1.5 align-baseline" aria-hidden="true">
      {[0, 150, 300].map((d) => (
        <span
          key={d}
          className="h-2 w-2 animate-bounce rounded-full bg-[#FF5F2D] sm:h-2.5 sm:w-2.5"
          style={{ animationDelay: `${d}ms` }}
        />
      ))}
    </span>
  );
}

function ExpertCard() {
  return (
    <div className="group relative h-full min-h-[260px] overflow-hidden rounded-[1.75rem] bg-[#0c0705]">
      <Image
        src={expert.image}
        alt={expert.name}
        fill
        sizes="(min-width: 640px) 220px, 100vw"
        className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0705] via-[#0c0705]/20 to-transparent" />
      <div className="absolute inset-x-4 bottom-4">
        <span className="block h-[2px] w-8 bg-[#FF5F2D] transition-all duration-500 group-hover:w-14" />
        <p className="mt-2 text-lg font-semibold text-white">{expert.name}</p>
        <p className="text-xs text-white/70">{expert.role}</p>
      </div>
    </div>
  );
}

function QuickContactCard() {
  const status = useAvailability();
  const waText = encodeURIComponent("Hi Qytrona, I'd like to discuss a project.");

  return (
    <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-[#0c0705] p-7 text-white sm:p-9">
      {/* dotted texture + glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(90deg,black,transparent_70%)]" />
      <span className="pointer-events-none absolute -bottom-20 -right-10 h-60 w-60 rounded-full bg-[#FF5F2D]/25 blur-3xl" />
      {/* slowly rotating rings */}
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 animate-[spin_40s_linear_infinite]">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute inset-20 rounded-full border border-dashed border-[#FF5F2D]/30" />
      </div>

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
          <span className="relative flex h-2 w-2">
            {status?.online && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            )}
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                status ? (status.online ? "bg-emerald-400" : "bg-amber-400") : "bg-white/40"
              }`}
            />
          </span>
          {status ? status.label : "Mon – Sat, 9:30 AM – 6:30 PM"}
        </span>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s get your project <span className="text-[#FF5F2D]">started.</span>
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
          In a hurry? Give us a call or chat with us instantly on WhatsApp.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${expert.number}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF5F2D] py-1.5 pl-4 pr-1.5 text-sm font-medium text-white transition-colors hover:bg-[#e6481a]"
          >
            Chat Now
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#FF5F2D] transition-transform duration-300 group-hover:rotate-12">
              <Icon name="chat" className="h-3.5 w-3.5" />
            </span>
          </a>
          <a
            href={`tel:+${expert.number}`}
            className="group inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-sm font-medium text-[#0c0705] transition-colors hover:bg-white/85"
          >
            Call Now
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0c0705] text-white transition-transform duration-300 group-hover:-rotate-12">
              <Icon name="phone" className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, textarea, value, onChange }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="relative block">
      <Tag
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 2 : undefined}
        required={required}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer block w-full resize-none border-b border-white/15 bg-transparent pb-3 pt-6 text-[15px] text-white outline-none"
      />
      <span className="pointer-events-none absolute left-0 top-6 text-sm text-white/55 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#FF5F2D] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
        {label}
        {required && <span className="text-[#FF5F2D]"> *</span>}
      </span>
      {/* orange underline grows on focus */}
      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[#FF5F2D] transition-transform duration-500 peer-focus:scale-x-100" />
    </label>
  );
}

function ExpertForm() {
  const [form, setForm] = useState({ phone: "", name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Hi Qytrona, I'd like to speak with an expert.`,
      form.name && `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.message && `\nAbout the project:\n${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    // Open WhatsApp synchronously so popup blockers allow it.
    window.open(`https://wa.me/${expert.number}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] bg-[#0c0705] p-7 text-white sm:p-10">
      <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FF5F2D]/20 blur-3xl" />

      {sent ? (
        <div className="relative flex h-full flex-col items-start justify-center py-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white">
            <Icon name="check" className="h-7 w-7" />
          </span>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">Thanks — over to WhatsApp!</h3>
          <p className="mt-3 text-white/65">
            Send the pre-filled message in WhatsApp and our team will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setForm({ phone: "", name: "", email: "", message: "" });
            }}
            className="mt-6 text-sm font-medium text-[#FF5F2D] underline-offset-4 hover:underline"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Speak with our <span className="text-[#FF5F2D]">experts</span>
          </h3>
          <div className="mt-6 space-y-5">
            <Field label="Phone" name="phone" type="tel" required value={form.phone} onChange={update("phone")} />
            <Field label="Full Name" name="name" value={form.name} onChange={update("name")} />
            <Field label="Business Email" name="email" type="email" value={form.email} onChange={update("email")} />
            <Field label="About Project" name="message" textarea value={form.message} onChange={update("message")} />
          </div>

          {/* circle expands into a pill on hover */}
          <button type="submit" className="group relative mt-9 inline-flex h-12 items-center gap-2 pl-5 pr-6 text-sm font-medium text-white">
            <span className="absolute left-0 top-0 h-12 w-12 rounded-full border border-white/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full group-hover:border-[#FF5F2D] group-hover:bg-[#FF5F2D]" />
            <span className="relative">Submit Now</span>
            <Icon name="arrow" className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </form>
      )}
    </div>
  );
}

export default function SpeakToExperts() {
  return (
    <Section className="bg-[#faf7f5]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.75fr_1fr]">
        <div className="flex flex-col">
          <Reveal variant="left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5F2D]">Talk to us</span>
            <h2 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tight text-[#0c0705] sm:text-6xl lg:text-7xl">
              Speak to
              <br />
              <span className="text-[#FF5F2D]">Experts</span>
              <TypingDots />
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">Turning expertise into measurable business growth.</p>
          </Reveal>

          <div className="mt-10 grid flex-1 grid-cols-1 gap-6 sm:grid-cols-[220px_1fr]">
            <Reveal delay={120} className="h-full">
              <ExpertCard />
            </Reveal>
            <Reveal delay={240} className="h-full">
              <QuickContactCard />
            </Reveal>
          </div>
        </div>

        <Reveal variant="right" delay={200} className="h-full">
          <ExpertForm />
        </Reveal>
      </div>
    </Section>
  );
}
