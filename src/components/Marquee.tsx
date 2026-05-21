const items = [
  "🔥 STAY TRENDY • STAY DADDY",
  "💥 FLAT 40% OFF SITEWIDE",
  "🚚 FREE SHIPPING ABOVE ₹999",
  "⚡ NEW DROPS EVERY FRIDAY",
  "📍 NACHARAM • HYDERABAD",
  "💬 DM @_style_daddy_ TO ORDER",
];

export function Marquee() {
  const content = [...items, ...items, ...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black text-white">

      {/* Edge fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-red-500/5 blur-3xl" />

      <div className="group relative flex overflow-hidden">

        <div
          className="
            flex
            min-w-full
            shrink-0
            animate-[marquee_25s_linear_infinite]
            group-hover:[animation-play-state:paused]
          "
        >
          {content.map((item, i) => (
            <div
              key={`first-${i}`}
              className="
                flex
                items-center
                gap-6
                px-8
                py-3
                whitespace-nowrap
                text-sm
                md:text-base
                font-black
                uppercase
                tracking-[3px]
                transition-all
                duration-300
                hover:text-red-500
              "
            >
              {item}
            </div>
          ))}
        </div>

        <div
          className="
            flex
            min-w-full
            shrink-0
            animate-[marquee_25s_linear_infinite]
            group-hover:[animation-play-state:paused]
          "
        >
          {content.map((item, i) => (
            <div
              key={`second-${i}`}
              className="
                flex
                items-center
                gap-6
                px-8
                py-3
                whitespace-nowrap
                text-sm
                md:text-base
                font-black
                uppercase
                tracking-[3px]
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}