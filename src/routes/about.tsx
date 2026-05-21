import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import hero from "@/assets/hero-streetwear.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Style Daddy" },
      { name: "description", content: "Style Daddy is a homegrown streetwear label from Nacharam, Hyderabad. Bold prints, oversized fits, and unbeatable prices." },
      { property: "og:title", content: "About Style Daddy" },
      { property: "og:description", content: "Hyderabad's loudest streetwear destination." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative bg-foreground text-background overflow-hidden">
        <img src={hero} alt="Style Daddy story" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <span className="text-xs font-display tracking-widest text-brand-yellow">OUR STORY</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2">STAY TRENDY.<br />STAY DADDY.</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 max-w-5xl">
        <div>
          <h2 className="font-display text-3xl">BORN IN NACHARAM.<br />MADE FOR THE STREETS.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Style Daddy started as a tiny corner store in Nacharam, Hyderabad, run by people who actually wear what they sell. We were tired of overpriced fast fashion that fell apart after two washes — so we built our own thing.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today we drop oversized tees, cargos, hoodies and statement pieces that hit different. Heavy fabrics, bold prints, fair prices. Same ethos.
          </p>
        </div>
        <div className="space-y-6">
          <div className="border-l-4 border-brand-red pl-4">
            <h3 className="font-display text-xl">240 GSM HEAVY</h3>
            <p className="text-sm text-muted-foreground mt-1">Every tee is built to outlast the trend cycle.</p>
          </div>
          <div className="border-l-4 border-brand-red pl-4">
            <h3 className="font-display text-xl">SMALL BATCHES</h3>
            <p className="text-sm text-muted-foreground mt-1">No mass production. When it's gone, it's gone.</p>
          </div>
          <div className="border-l-4 border-brand-red pl-4">
            <h3 className="font-display text-xl">REAL PRICES</h3>
            <p className="text-sm text-muted-foreground mt-1">No fake MRPs. No bogus discounts. Just real value.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
          <div className="flex gap-4 items-start">
            <MapPin className="h-6 w-6 text-brand-red shrink-0 mt-1" />
            <div>
              <h3 className="font-display">VISIT THE STORE</h3>
              <p className="text-sm text-muted-foreground mt-1">Shop No. 14, Main Road,<br />Nacharam, Hyderabad — 500076</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Instagram className="h-6 w-6 text-brand-red shrink-0 mt-1" />
            <div>
              <h3 className="font-display">FOLLOW THE DROPS</h3>
              <a href="https://instagram.com/_style_daddy_" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-brand-red">
                @_style_daddy_ on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}