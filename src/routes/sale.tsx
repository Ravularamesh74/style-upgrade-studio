import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/sale")({
  head: () => ({
    meta: [
      { title: "Sale — Flat 40% Off | Style Daddy" },
      { name: "description", content: "Flat 40% off on all streetwear at Style Daddy. Limited drop." },
      { property: "og:title", content: "Style Daddy Sale" },
      { property: "og:description", content: "Flat 40% off sitewide." },
    ],
    links: [{ rel: "canonical", href: "/sale" }],
  }),
  component: Sale,
});

function Sale() {
  const list = [...products].sort((a, b) => (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp);
  return (
    <div>
      <section className="bg-brand-red text-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <span className="font-display tracking-widest text-sm">LIMITED DROP</span>
          <h1 className="font-display text-5xl md:text-8xl mt-3">FLAT 40% OFF</h1>
          <p className="mt-4 text-background/90">Everything must move. Pick your heat.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <p className="text-sm text-muted-foreground mb-6">{list.length} products on sale</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="text-center mt-10">
          <Link to="/" className="font-display text-sm hover:text-brand-red">← BACK TO HOME</Link>
        </div>
      </section>
    </div>
  );
}