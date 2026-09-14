"use client";

const clientLogos = [
  { name: "Luna Grill", src: "/Images/clients/lunagrill.svg" },
  { name: "Mesa Biotech", src: "/Images/clients/mesabiotech.svg" },
  { name: "MindBody", src: "/Images/clients/mindbody.svg" },
  { name: "Modern Times", src: "/Images/clients/moderntimes.svg" },
  { name: "New Venture", src: "/Images/clients/newventure.svg" },
  { name: "ncsoft", src: "/Images/clients/ncsoft.svg" },
  { name: "PetDesk", src: "/Images/clients/petdesk.svg" },
  { name: "Perceptyx", src: "/Images/clients/perceptyx.svg" },
  { name: "French Bakery", src: "/Images/clients/frenchbakery.svg" },
  { name: "Silvergate", src: "/Images/clients/silvergate.svg" },
  { name: "tu simple", src: "/Images/clients/tusimple.svg" },
  { name: "Vigor Systems", src: "/Images/clients/vigorsystems.svg" },
];

const half = Math.ceil(clientLogos.length / 2);
const rowOne = clientLogos.slice(0, half);
const rowTwo = clientLogos.slice(half);

// Each row's logos are duplicated so its track can loop seamlessly at -50%.
const rowOneLoop = [...rowOne, ...rowOne];
const rowTwoLoop = [...rowTwo, ...rowTwo];

function MarqueeRow({ logos, reverse }) {
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div
        className={`flex w-max items-center hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {logos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex shrink-0 items-center justify-center px-8 sm:px-10 lg:px-12"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 w-auto shrink-0 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-12 lg:h-14"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section className="relative w-full bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0c0705] sm:text-4xl lg:text-5xl lg:col-span-2">
            Who we <span className="text-[#FF5F2D]">work with</span>
          </h2>

          <div className="lg:col-start-3 lg:w-full">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF5F2D]">
              Who We Serve
            </span>
            <div className="mt-3 max-w-md sm:max-w-lg">
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                From fast-growing businesses to early-stage start-ups, we are
                committed to building a community of trust. We partner with
                companies across every industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling logo carousel, rows scrolling in opposite directions */}
      <div className="mt-14 flex flex-col gap-6 sm:mt-16 sm:gap-8 lg:mt-20">
        <MarqueeRow logos={rowOneLoop} />
        <MarqueeRow logos={rowTwoLoop} reverse />
      </div>
    </section>
  );
}
