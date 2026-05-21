import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { byCategory, type Product } from "@/lib/products";

export function CategoryPage({
  title,
  subtitle,
  category,
  cover,
}: {
  title: string;
  subtitle: string;
  category: Product["category"];
  cover: string;
}) {
  const all = byCategory(category);
  const types = ["All", ...Array.from(new Set(all.map((p) => p.type)))];
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<"new" | "low" | "high">("new");

  const list = useMemo(() => {
    let l = filter === "All" ? all : all.filter((p) => p.type === filter);
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [all, filter, sort]);

  return (
    <div>
      <section className="relative bg-foreground text-background overflow-hidden">
        <img src={cover} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <span className="text-xs font-display tracking-widest text-brand-yellow">DEPARTMENT</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2">{title}</h1>
          <p className="mt-3 max-w-lg text-background/80">{subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-4 border-b border-border">
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 text-xs font-display border transition-colors ${
                filter === t
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-foreground"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="border border-border bg-background px-3 py-2 text-sm"
        >
          <option value="new">Newest</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      <section className="container mx-auto px-4 py-10">
        <p className="text-sm text-muted-foreground mb-6">{list.length} products</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  );
}