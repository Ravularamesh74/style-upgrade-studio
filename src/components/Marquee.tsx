const items = [
  "🔥 STAY TRENDY · STAY DADDY",
  "💥 FLAT 40% OFF SITEWIDE",
  "📍 NACHARAM · HYDERABAD",
  "💬 DM @_style_daddy_ TO ORDER",
  "🚚 FREE SHIPPING ABOVE ₹999",
];

export function Marquee() {
  const row = [...items, ...items, ...items];
  return (
    <div className="bg-brand-red text-background overflow-hidden border-y border-foreground/10">
      <div className="flex whitespace-nowrap animate-marquee py-2 font-display text-sm">
        {row.map((t, i) => (
          <span key={i} className="px-6">{t}</span>
        ))}
      </div>
    </div>
  );
}