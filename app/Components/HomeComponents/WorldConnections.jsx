"use client";

import WorldMapVisual from "./WorldMapVisual";

export default function WorldConnections() {
  return (
    <section className="relative w-full bg-white text-neutral-900 py-24 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <span className="inline-block text-xs font-semibold tracking-widest text-orange-600 uppercase mb-3">
          Global Reach
        </span>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Our Connections Around The World
        </h2>
        <p className="mt-4 text-neutral-500 text-lg">
          Proudly rooted in India, delivering digital solutions to clients
          across the globe.
        </p>
      </div>

      <WorldMapVisual
        className="max-w-5xl mx-auto w-full aspect-[2/1]"
        edgeMask
        dotColor="#d6d6d6"
        backgroundColor="white"
        lineColor="#f97316"
        hubColor="#ea580c"
        pointColor="#fb923c"
      />
    </section>
  );
}
