"use client";

import {
  AnimatedHeading,
  CtaBanner,
  Icon,
  PageHero,
  PillButton,
  ProcessTimeline,
  Reveal,
  Section,
  SectionHeader,
  StatRow,
} from "./Shared";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "600+", label: "Projects Delivered" },
  { value: "567+", label: "Expert Solutions" },
  { value: "10+", label: "Industries Served" },
];

const pillars = [
  {
    icon: "target",
    title: "Our Mission",
    desc: "Give every business — from first-time founders to growing enterprises — the digital foundation it needs to compete and win online.",
  },
  {
    icon: "eye",
    title: "Our Vision",
    desc: "To be the partner companies trust for websites, apps, software and marketing, all designed, built and grown under one roof.",
  },
];

const values = [
  {
    icon: "spark",
    title: "Craft Over Templates",
    desc: "Every build is shaped around your brand and your customers, never a one-size-fits-all theme.",
  },
  {
    icon: "shield",
    title: "Honest Partnership",
    desc: "Clear scopes, transparent pricing and straight answers — no surprises after kickoff.",
  },
  {
    icon: "growth",
    title: "Results That Compound",
    desc: "We measure success by traffic, leads and revenue, not just launch day.",
  },
  {
    icon: "users",
    title: "One Team, End to End",
    desc: "Design, development and marketing work side by side, so nothing gets lost in hand-offs.",
  },
];

const highlights = [
  { icon: "users", title: "One team, end to end", desc: "Design, build & marketing together" },
  { icon: "shield", title: "Transparent pricing", desc: "Clear quotes, no surprises" },
  { icon: "chat", title: "Dedicated contact", desc: "One person who knows your project" },
  { icon: "heart", title: "Support after launch", desc: "Updates, fixes & growth" },
];

const process = [
  { step: "01", icon: "target", title: "Discover", desc: "We learn your goals, audience and competition." },
  { step: "02", icon: "layout", title: "Design", desc: "Wireframes and visuals shaped around real user flows." },
  { step: "03", icon: "code", title: "Develop", desc: "Fast, scalable builds with regular check-ins." },
  { step: "04", icon: "growth", title: "Grow", desc: "SEO, ads and ongoing support after launch." },
];


// Mission (dark) and Vision (orange) statement cards.
function PillarCard({ pillar, dark }) {
  const t = dark
    ? {
        card: "bg-[#0c0705] text-white shadow-[#0c0705]/30",
        chip: "border-white/15 bg-white/5 text-white",
        icon: "bg-[#FF5F2D] text-white",
        text: "text-white/90",
        watermark: "text-white/[0.04]",
        ring: "border-[#FF5F2D]/30",
        glow: "bg-[#FF5F2D]/25",
        bar: "bg-[#FF5F2D]",
      }
    : {
        card: "bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] text-white shadow-[#FF5F2D]/30",
        chip: "border-white/25 bg-white/15 text-white",
        icon: "bg-white text-[#FF5F2D]",
        text: "text-white",
        watermark: "text-white/10",
        ring: "border-white/40",
        glow: "bg-white/25",
        bar: "bg-white",
      };

  return (
    <article
      className={`group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2rem] p-7 shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl sm:p-9 ${t.card}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-dashed animate-[spin_40s_linear_infinite] ${t.ring}`} />
      <span className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150 ${t.glow}`} />

      {/* oversized icon watermark */}
      <span className={`pointer-events-none absolute -bottom-10 -right-10 transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110 ${t.watermark}`}>
        <Icon name={pillar.icon} className="h-48 w-48" />
      </span>

      <div className="relative flex items-center gap-3">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg shadow-black/10 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 ${t.icon}`}>
          <Icon name={pillar.icon} className="h-5 w-5" />
        </span>
        <span className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] backdrop-blur ${t.chip}`}>
          {pillar.title}
        </span>
      </div>

      <div className="relative mt-auto pt-10">
        <span className="block font-serif text-6xl leading-[0.5] text-white/30">&ldquo;</span>
        <p className={`mt-2 max-w-xl text-lg font-medium leading-snug tracking-tight sm:text-xl lg:text-2xl ${t.text}`}>
          {pillar.desc}
        </p>
        <span className={`mt-5 block h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-16 ${t.bar}`} />
      </div>
    </article>
  );
}

function ValueCard({ value, index }) {
  return (
    <article className="group relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-50 p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-[#FF5F2D]/25">
      {/* orange fill that rises on hover */}
      <span className="pointer-events-none absolute inset-0 translate-y-full rounded-[2rem] bg-gradient-to-br from-[#FF5F2D] to-[#e6481a] transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />
      {/* dot texture + glow, visible once filled */}
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.15] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-dashed border-[#FF5F2D]/25 transition-colors duration-500 group-hover:border-white/40 animate-[spin_30s_linear_infinite]" />

      {/* big index number */}
      <span className="pointer-events-none absolute -bottom-4 right-4 text-[7rem] font-semibold leading-none text-[#0c0705]/[0.05] transition-colors duration-500 group-hover:text-white/15">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5F2D] text-white shadow-lg shadow-[#FF5F2D]/30 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-white group-hover:text-[#FF5F2D] group-hover:shadow-black/10">
          <Icon name={value.icon} className="h-6 w-6" />
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c0705] transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/30 group-hover:bg-[#0c0705] group-hover:text-white">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>

      <div className="relative mt-auto pt-10">
        <span className="block h-[2px] w-8 rounded-full bg-[#FF5F2D] transition-all duration-500 group-hover:w-14 group-hover:bg-white" />
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0c0705] transition-colors duration-500 group-hover:text-white sm:text-2xl">
          {value.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/85">
          {value.desc}
        </p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We build the digital"
        highlight="foundation you grow on"
        description="Qytrona Technologies is a full-service digital studio delivering websites, mobile apps, custom software and SEO-driven marketing for businesses around the world."
      >
        <PillButton href="/contact">Work With Us</PillButton>
      </PageHero>

      <Section className="bg-white !pt-0">
        <Reveal variant="scale" delay={200}>
          <StatRow stats={stats} />
        </Reveal>
      </Section>

      {/* Story */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" duration={1000} className="h-full">
            <div className="story-media relative w-full overflow-hidden rounded-[2rem] border border-black/5 bg-black">
              <img
                src="/Images/Logo.jpeg"
                alt="Qytrona Technologies"
                className="absolute inset-0 h-full w-full object-contain p-10"
              />
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF5F2D]/30 animate-[spin_40s_linear_infinite]"
                style={{ width: "85%", height: "85%" }}
              />
            </div>
          </Reveal>

          <div>
            <AnimatedHeading
              title="Our"
              highlight="Story"
              className="text-4xl font-semibold tracking-tight text-[#0c0705] sm:text-5xl"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              <Reveal delay={150}>
                <p>
                  Qytrona started with a simple idea: businesses shouldn&apos;t
                  need five different agencies to get online and grow. One team
                  should be able to design the brand, build the product and bring
                  in the customers.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  Today we partner with clients across real estate, healthcare,
                  fintech, education, logistics and more — shipping everything
                  from marketing sites to full-scale web platforms and mobile
                  apps.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={350 + i * 100}>
                  <div className="group relative pt-5">
                    {/* hairline that fills orange on hover */}
                    <span className="absolute inset-x-0 top-0 h-px bg-gray-200" />
                    <span className="absolute left-0 top-0 h-px w-0 bg-[#FF5F2D] transition-all duration-500 ease-out group-hover:w-full" />

                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#FF5F2D]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold text-[#0c0705]">{h.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">{h.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={800} className="mt-8">
              <PillButton href="/our-team">Meet Our Team</PillButton>
            </Reveal>
          </div>
        </div>

        {/* Mission + Vision: full-width row so the statements have room */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16">
          {pillars.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 150} className="h-full">
              <PillarCard pillar={p} dark={i === 0} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <SectionHeader title="What we" highlight="stand for">
          The principles that guide every project, conversation and line of
          code we ship.
        </SectionHeader>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120} className="h-full">
              <ValueCard value={v} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-white">
        <SectionHeader title="How we" highlight="work">
          A simple, proven process that keeps projects on time and on budget.
        </SectionHeader>

        <ProcessTimeline steps={process} />
      </Section>

      <Reveal variant="scale">
        <CtaBanner />
      </Reveal>
    </>
  );
}
