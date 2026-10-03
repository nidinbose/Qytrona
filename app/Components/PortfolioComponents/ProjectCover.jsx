"use client";

import { useInView } from "../CompanyComponents/Shared";

// Animated mockup used as a project cover until real screenshots are added.
// Draws itself in when scrolled into view.

function Bar({ w, on, delay, className = "bg-black/10" }) {
  return (
    <div
      className={`h-2 origin-left rounded-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{ width: w, transform: on ? "scaleX(1)" : "scaleX(0)", transitionDelay: on ? `${delay}ms` : "0ms" }}
    />
  );
}

function Browser({ accent, on }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-t-xl border border-black/5 bg-white shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="h-2 w-2 rounded-full bg-black/10" />
        <span className="ml-2 h-4 flex-1 rounded-full bg-black/5" />
      </div>
      <div className="flex-1 space-y-2.5 p-4">
        <div className="flex items-center justify-between">
          <span className="h-2.5 w-14 rounded-full" style={{ background: accent }} />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-6 rounded-full bg-black/10" />)}
          </div>
        </div>
        <div
          className={`relative h-[38%] overflow-hidden rounded-lg transition-all duration-700 ${on ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}aa)`, transitionDelay: on ? "150ms" : "0ms" }}
        >
          <div className="absolute bottom-3 left-3 space-y-1.5">
            <div className="h-2 w-24 rounded-full bg-white/80" />
            <div className="h-1.5 w-16 rounded-full bg-white/50" />
          </div>
        </div>
        <Bar w="70%" on={on} delay={350} />
        <Bar w="50%" on={on} delay={450} />
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`aspect-[4/3] rounded-md transition-all duration-700 ${on ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              style={{ background: i === 1 ? `${accent}33` : "rgba(0,0,0,0.05)", transitionDelay: on ? `${550 + i * 100}ms` : "0ms" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Dashboard({ accent, on }) {
  const bars = [40, 65, 50, 80, 60, 90, 70];
  return (
    <div className="flex h-full overflow-hidden rounded-t-xl border border-black/5 bg-white shadow-2xl">
      <div className="hidden w-[22%] flex-col gap-2 p-3 sm:flex" style={{ background: accent }}>
        <span className="mb-2 h-2.5 w-3/4 rounded-full bg-white/80" />
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`h-1.5 rounded-full ${i === 1 ? "w-full bg-white/70" : "w-2/3 bg-white/30"}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-lg border border-black/5 p-2 transition-all duration-700 ${on ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              style={{ transitionDelay: on ? `${150 + i * 100}ms` : "0ms" }}
            >
              <div className="h-1.5 w-1/2 rounded-full bg-black/10" />
              <div className="mt-1.5 h-3 w-3/4 rounded-full" style={{ background: i === 0 ? accent : "rgba(0,0,0,0.15)" }} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-lg border border-black/5 p-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 origin-bottom rounded-t-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                height: `${h}%`,
                background: i === 5 ? accent : `${accent}55`,
                transform: on ? "scaleY(1)" : "scaleY(0)",
                transitionDelay: on ? `${400 + i * 70}ms` : "0ms",
              }}
            />
          ))}
        </div>
        <Bar w="60%" on={on} delay={900} />
      </div>
    </div>
  );
}

function Phones({ accent, on }) {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      {[0, 1].map((p) => (
        <div
          key={p}
          className={`flex h-[95%] w-[38%] max-w-[170px] flex-col gap-2 rounded-[1.4rem] border border-black/10 bg-white p-2.5 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            on ? "opacity-100" : "opacity-0"
          } ${p === 0 ? (on ? "-rotate-6 translate-y-0" : "-rotate-12 translate-y-8") : on ? "rotate-6 translate-y-5" : "rotate-12 translate-y-14"}`}
          style={{ transitionDelay: on ? `${p * 180}ms` : "0ms" }}
        >
          <div className="mx-auto h-1 w-8 rounded-full bg-black/10" />
          <div className="h-[38%] rounded-lg" style={{ background: p === 0 ? `linear-gradient(135deg, ${accent}, ${accent}aa)` : "#0c0705" }} />
          <div className="h-1.5 w-3/4 rounded-full bg-black/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-black/10" />
          <div className="mt-auto grid grid-cols-3 gap-1">
            <div className="h-5 rounded-md bg-black/5" />
            <div className="h-5 rounded-md" style={{ background: `${accent}40` }} />
            <div className="h-5 rounded-md bg-black/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

const covers = { browser: Browser, dashboard: Dashboard, phone: Phones };

export default function ProjectCover({ cover, className = "" }) {
  const [ref, on] = useInView({ threshold: 0.2 });
  const Mock = covers[cover.type] || Browser;
  const dark = cover.accent === "#0c0705";

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${dark ? "bg-[#f3f3f1]" : "bg-[#fbe3d1]"} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-size:22px_22px] [mask-image:linear-gradient(180deg,black,transparent)]"
        style={{ backgroundImage: `radial-gradient(${dark ? "#0c0705" : "#FF5F2D"} 1px, transparent 1px)` }}
      />
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
        style={{ background: `${cover.accent}30` }}
      />
      <div className="absolute inset-x-[8%] -bottom-[4%] top-[17%] origin-bottom transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
        <Mock accent={cover.accent} on={on} />
      </div>
    </div>
  );
}
