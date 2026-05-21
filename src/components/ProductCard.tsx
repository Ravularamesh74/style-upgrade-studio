import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  const discount = Math.round(
    ((p.mrp - p.price) / p.mrp) * 100
  );

  return (
    <Link
      to={`/product/${p.id}` as any}
      className="group block"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-zinc-100
          aspect-[3/4]
          shadow-sm
          transition-all
          duration-500
          hover:shadow-2xl
          hover:-translate-y-2
        "
      >
        {/* Main Image */}

        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/50
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition
          "
        />

        {/* Badge */}

        {p.badge && (
          <span
            className="
              absolute
              top-4
              left-4
              backdrop-blur-xl
              bg-red-600
              text-white
              text-[11px]
              font-bold
              px-3
              py-1.5
              rounded-full
              z-20
            "
          >
            {p.badge}
          </span>
        )}

        {/* Discount */}

        <span
          className="
            absolute
            top-4
            right-4
            bg-white/90
            backdrop-blur-xl
            text-black
            text-[11px]
            font-bold
            px-3
            py-1.5
            rounded-full
            z-20
          "
        >
          {discount}% OFF
        </span>

        {/* Actions */}

        <div
          className="
            absolute
            right-4
            top-16
            flex
            flex-col
            gap-2
            opacity-0
            translate-x-4
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
          "
        >
          <button
            className="
              h-10
              w-10
              rounded-full
              bg-white
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <Heart size={18} />
          </button>

          <button
            className="
              h-10
              w-10
              rounded-full
              bg-white
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <Eye size={18} />
          </button>
        </div>

        {/* Bottom CTA */}

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4
            translate-y-10
            opacity-0
            group-hover:translate-y-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <button
            className="
              w-full
              bg-white
              text-black
              py-3
              rounded-2xl
              font-semibold
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <ShoppingBag size={18} />
            Add To Cart
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="pt-5">
        <div className="flex items-center justify-between">
          <span
            className="
              text-[11px]
              uppercase
              tracking-[2px]
              text-zinc-500
            "
          >
            {p.type}
          </span>

          <span
            className="
              text-xs
              text-green-600
              font-medium
            "
          >
            In Stock
          </span>
        </div>

        <h3
          className="
            mt-2
            text-base
            font-semibold
            line-clamp-1
            transition-colors
            group-hover:text-red-600
          "
        >
          {p.name}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold">
            ₹{p.price.toLocaleString()}
          </span>

          <span
            className="
              text-sm
              text-zinc-400
              line-through
            "
          >
            ₹{p.mrp.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}