"use client";

import { Icon, useInView } from "../CompanyComponents/Shared";

// Animated hero illustrations for the solution pages. Each one draws itself
// in when it scrolls into view (`on`) and keeps a gentle idle motion.

function BrowserVisual({ on }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-black/5 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F2D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-black/5" />
      </div>
      <div className="flex-1 space-y-3 p-5">
        <div
          className={`h-24 rounded-xl bg-gradient-to-br from-[#FF5F2D] to-[#c73f18] transition-all duration-700 ${on ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ transitionDelay: on ? "200ms" : "0ms" }}
        />
        {["75%", "55%"].map((w, i) => (
          <div
            key={w}
            className="h-2.5 origin-left rounded-full bg-black/10 transition-transform duration-700"
            style={{ width: w, transform: on ? "scaleX(1)" : "scaleX(0)", transitionDelay: on ? `${400 + i * 120}ms` : "0ms" }}
          />
        ))}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-16 rounded-lg transition-all duration-700 ${i === 1 ? "bg-[#FF5F2D]/20" : "bg-black/5"} ${on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: on ? `${650 + i * 120}ms` : "0ms" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartVisual({ on }) {
  const bars = [30, 48, 38, 62, 52, 78, 68, 92];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Campaign performance</p>
          <p className="text-xl font-semibold text-[#0c0705]">Leads &amp; Traffic</p>
        </div>
        <span className="rounded-full bg-[#22c55e]/10 px-2.5 py-1 text-xs font-medium text-[#16a34a]">▲ Growing</span>
      </div>
      <div className="mt-6 flex flex-1 items-end gap-2.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 origin-bottom rounded-full bg-gradient-to-t from-[#FF5F2D] to-[#ff9a73] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ height: `${h}%`, transform: on ? "scaleY(1)" : "scaleY(0)", transitionDelay: on ? `${200 + i * 80}ms` : "0ms" }}
          />
        ))}
      </div>
    </div>
  );
}

function PhoneVisual({ on }) {
  return (
    <div className="flex h-full items-center justify-center gap-5">
      {[0, 1].map((p) => (
        <div
          key={p}
          className={`flex h-[92%] w-[42%] max-w-[190px] flex-col gap-2.5 rounded-[1.75rem] border border-black/10 bg-white p-3 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            on ? "opacity-100" : "opacity-0"
          } ${p === 0 ? (on ? "-rotate-6 translate-y-0" : "-rotate-12 translate-y-10") : on ? "rotate-6 translate-y-6" : "rotate-12 translate-y-16"}`}
          style={{ transitionDelay: on ? `${p * 200}ms` : "0ms" }}
        >
          <div className="mx-auto h-1.5 w-10 rounded-full bg-black/10" />
          <div className={`h-24 rounded-xl ${p === 0 ? "bg-gradient-to-br from-[#FF5F2D] to-[#c73f18]" : "bg-[#0c0705]"}`} />
          <div className="h-2 w-3/4 rounded-full bg-black/10" />
          <div className="h-2 w-1/2 rounded-full bg-black/10" />
          <div className="mt-auto grid grid-cols-3 gap-1.5">
            <div className="h-7 rounded-lg bg-black/5" />
            <div className="h-7 rounded-lg bg-[#FF5F2D]/25" />
            <div className="h-7 rounded-lg bg-black/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

function RankingVisual({ on }) {
  const rows = [
    { pos: 1, w: "80%", you: true },
    { pos: 2, w: "65%" },
    { pos: 3, w: "70%" },
    { pos: 4, w: "50%" },
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-xl">
      <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5">
        <Icon name="search" className="h-4 w-4 text-gray-400" />
        <span
          className="overflow-hidden whitespace-nowrap text-sm text-gray-600 transition-[max-width] duration-[1200ms] ease-linear"
          style={{ maxWidth: on ? "100%" : "0%" }}
        >
          best agency near me
        </span>
        <span className="h-4 w-px animate-pulse bg-[#FF5F2D]" />
      </div>
      <div className="mt-4 flex-1 space-y-2.5">
        {rows.map((r, i) => (
          <div
            key={r.pos}
            className={`flex items-center gap-3 rounded-xl p-3 transition-all duration-700 ${
              r.you ? "bg-[#FF5F2D]/10 ring-1 ring-[#FF5F2D]/40" : "bg-black/[0.03]"
            } ${on ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
            style={{ transitionDelay: on ? `${900 + i * 140}ms` : "0ms" }}
          >
            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${r.you ? "bg-[#FF5F2D] text-white" : "bg-white text-gray-500"}`}>
              {r.pos}
            </span>
            <div className="flex-1 space-y-1.5">
              <div className={`h-2 rounded-full ${r.you ? "bg-[#FF5F2D]/70" : "bg-black/15"}`} style={{ width: r.w }} />
              <div className="h-1.5 w-1/2 rounded-full bg-black/10" />
            </div>
            {r.you && <span className="text-[11px] font-semibold text-[#FF5F2D]">You</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeVisual({ on }) {
  const lines = [
    { w: "50%", c: "bg-[#FF5F2D]/80", indent: 0 },
    { w: "70%", c: "bg-white/25", indent: 1 },
    { w: "45%", c: "bg-white/15", indent: 2 },
    { w: "60%", c: "bg-[#FF5F2D]/45", indent: 2 },
    { w: "35%", c: "bg-white/15", indent: 1 },
    { w: "55%", c: "bg-white/25", indent: 1 },
    { w: "25%", c: "bg-[#FF5F2D]/70", indent: 0 },
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0c0705] p-6 shadow-xl">
      <div className="mb-5 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F2D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="space-y-3.5">
        {lines.map((l, i) => (
          <div key={i} className="flex items-center gap-3" style={{ paddingLeft: `${l.indent * 18}px` }}>
            <span className="w-4 shrink-0 text-right font-mono text-[10px] text-white/25">{i + 1}</span>
            <span
              className={`h-2.5 origin-left rounded-full ${l.c} transition-transform duration-500`}
              style={{ width: l.w, transform: on ? "scaleX(1)" : "scaleX(0)", transitionDelay: on ? `${200 + i * 110}ms` : "0ms" }}
            />
          </div>
        ))}
      </div>
      <div
        className={`mt-auto flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 font-mono text-[11px] text-white/60 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: on ? "1100ms" : "0ms" }}
      >
        <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
        Build passed · deployed
      </div>
    </div>
  );
}

const visuals = {
  browser: BrowserVisual,
  chart: ChartVisual,
  phone: PhoneVisual,
  ranking: RankingVisual,
  code: CodeVisual,
};

// Framed visual with an orbit ring and two floating badges.
export default function SolutionVisual({ type, badges = [] }) {
  const [ref, on] = useInView({ threshold: 0.25 });
  const Visual = visuals[type] || BrowserVisual;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-xl">
      <span className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[#FF5F2D]/10 blur-2xl" />
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FF5F2D]/25 animate-[spin_50s_linear_infinite]"
      />

      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/5 bg-[#fbe3d1] p-5 sm:p-7">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#FF5F2D_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,black,transparent)]" />
        <div className="relative h-full">
          <Visual on={on} />
        </div>
      </div>

      {badges[0] && (
        <div
          className={`absolute -top-6 left-4 transition-all duration-700 sm:left-8 ${on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          style={{ transitionDelay: on ? "700ms" : "0ms" }}
        >
          <div className="animate-float flex items-center gap-2 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5F2D] text-white">
              <Icon name="check" className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-[#0c0705]">{badges[0]}</span>
          </div>
        </div>
      )}
      {badges[1] && (
        <div
          className={`absolute -bottom-6 right-4 transition-all duration-700 sm:right-8 ${on ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
          style={{ transitionDelay: on ? "900ms" : "0ms" }}
        >
          <div className="animate-float flex items-center gap-2 rounded-2xl bg-[#0c0705] px-4 py-3 text-white shadow-xl [animation-delay:1.5s]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#FF5F2D]">
              <Icon name="spark" className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold">{badges[1]}</span>
          </div>
        </div>
      )}
    </div>
  );
}
