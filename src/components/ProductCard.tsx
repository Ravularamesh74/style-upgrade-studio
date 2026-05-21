import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  return (
    <Link
      to="/product/$id"
      params={{ id: p.id }}
      className="group block"
    >
      <div className="relative overflow-hidden bg-muted aspect-[3/4]">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {p.badge && (
          <span className="absolute top-3 left-3 bg-brand-red text-background text-[10px] font-display tracking-wider px-2 py-1">
            {p.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-background text-foreground text-[10px] font-display px-2 py-1">
          {off}% OFF
        </span>
      </div>
      <div className="pt-3">
        <h3 className="text-sm font-medium line-clamp-1 group-hover:text-brand-red transition-colors">
          {p.name}
        </h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display">₹{p.price.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground line-through">₹{p.mrp.toLocaleString()}</span>
          <span className="text-xs text-brand-red font-display">{off}% OFF</span>
        </div>
      </div>
    </Link>
  );
}