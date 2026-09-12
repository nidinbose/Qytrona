"use client";

const services = [
  "Website Development",
  "Digital Marketing",
  "Mobile Application Development",
  "Custom Software Development",
];

export default function ServicesGrid() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0705] text-white px-6 sm:px-10 py-20">
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 34px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(232,102,31,0.15), transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-none mb-14 sm:mb-20">
          Creative
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-10 sm:gap-y-16 place-items-center">
          {services.map((service) => (
            <p
              key={service}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight hover:text-orange-500 transition-colors cursor-default"
            >
              {service}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
