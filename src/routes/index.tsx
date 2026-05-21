import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Instagram } from "lucide-react";
import hero from "@/assets/hero-streetwear.jpg";
import catMen from "@/assets/cat-men.jpg";
import { Marquee } from "@/components/Marquee";
import { ProductCard } from "@/components/ProductCard";
import { products, featured, byType } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const trending = featured();
  const newArrivals = products.slice(0, 8);
  return (
    <div>
      <Marquee />

      {/* HERO */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <img
          src={hero}
          alt="Style Daddy streetwear hero"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/50 to-transparent" />
        <div className="container relative mx-auto px-4 py-24 md:py-36 max-w-2xl">
          <span className="inline-block bg-brand-red px-3 py-1 text-xs font-display tracking-widest">
            NEW DROP · 2026
          </span>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[0.95]">
            STAY TRENDY.<br />STAY DADDY.
          </h1>
          <p className="mt-5 text-background/80 max-w-md">
            Hyderabad's loudest streetwear destination. Bold prints, oversized fits, and prices that hit harder than a bassline.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/men" className="inline-flex items-center gap-2 bg-brand-red px-6 py-3 font-display text-sm hover:opacity-90 shadow-pop">
              SHOP NOW <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://instagram.com/_style_daddy_" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-background/40 px-6 py-3 font-display text-sm hover:bg-background hover:text-foreground">
              <Instagram className="h-4 w-4" /> FOLLOW
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY RAIL */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl">SHOP BY CATEGORY</h2>
          <span className="text-sm text-muted-foreground hidden sm:inline">Built for the modern man.</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["T-Shirts", "Hoodies", "Bottoms", "Jackets"].map((label) => (
            <Link key={label} to="/men" className="group relative block overflow-hidden aspect-[3/4]">
              <img src={byType(label)[0]?.image ?? catMen} alt={label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-background">
                <h3 className="font-display text-xl md:text-2xl uppercase">{label}</h3>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-xs font-display text-brand-red tracking-widest">🔥 HOTLIST</span>
            <h2 className="font-display text-3xl md:text-4xl mt-1">TRENDING NOW</h2>
          </div>
          <Link to="/men" className="text-sm font-display hover:text-brand-red">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {trending.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-foreground text-background grid md:grid-cols-2 overflow-hidden">
          <div className="p-10 md:p-16">
            <span className="text-brand-yellow font-display text-sm tracking-widest">MEGA SALE</span>
            <h2 className="font-display text-4xl md:text-6xl mt-3 leading-none">FLAT 40%<br />OFF EVERYTHING</h2>
            <p className="mt-4 text-background/70 max-w-md">No codes. No catches. Just pure heat across the whole catalog. Hurry — drop is limited.</p>
            <Link to="/sale" className="inline-flex mt-6 items-center gap-2 bg-brand-red px-6 py-3 font-display text-sm">
              SHOP THE SALE <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-72">
            <img src={catMen} alt="Sale" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl">NEW ARRIVALS</h2>
          <Link to="/men" className="text-sm font-display hover:text-brand-red">VIEW ALL →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {newArrivals.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* USP */}
      <section className="border-y border-border bg-muted/40 mt-10">
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Truck, t: "FREE SHIPPING", d: "On all orders above ₹999, pan India." },
            { icon: ShieldCheck, t: "AUTHENTIC ONLY", d: "100% original, sourced & handpicked." },
            { icon: RotateCcw, t: "EASY 7-DAY RETURNS", d: "Don't vibe with it? Send it back." },
          ].map((u) => (
            <div key={u.t} className="flex gap-4 items-start">
              <u.icon className="h-8 w-8 text-brand-red shrink-0" />
              <div>
                <h4 className="font-display">{u.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{u.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
