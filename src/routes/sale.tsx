import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { ArrowRight, Flame, Zap } from "lucide-react";

export const Route = createFileRoute("/sale")({
  component: Sale,
});

function Sale() {
  const list = [...products].sort(
    (a, b) =>
      (b.mrp - b.price) / b.mrp -
      (a.mrp - a.price) / a.mrp
  );

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}

      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-yellow-500/20" />

        <div className="container mx-auto px-4 py-24 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
              <Flame size={16} />
              LIMITED DROP
            </span>

            <h1 className="mt-6 font-black text-6xl md:text-8xl leading-none">
              FLAT
              <span className="block text-red-500">
                40% OFF
              </span>
            </h1>

            <p className="mt-6 text-xl text-white/70 max-w-xl">
              Exclusive streetwear pieces at unbeatable prices.
              Once they're gone, they're gone.
            </p>

            <div className="flex gap-4 mt-10">

              <a
                href="#sale-products"
                className="bg-red-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                SHOP NOW
              </a>

              <Link
                to="/"
                className="border border-white/20 px-8 py-4 rounded-xl"
              >
                Explore Collection
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SALE STATS */}

      <section className="border-b border-border">

        <div className="container mx-auto px-4 py-8">

          <div className="grid grid-cols-3 text-center">

            <div>
              <div className="text-3xl font-bold text-red-500">
                {list.length}
              </div>
              <div className="text-muted-foreground">
                Products
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold">
                40%
              </div>
              <div className="text-muted-foreground">
                Max Discount
              </div>
            </div>

            <div>
              <div className="text-3xl font-bold text-green-500">
                FREE
              </div>
              <div className="text-muted-foreground">
                Shipping
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section
        id="sale-products"
        className="container mx-auto px-4 py-16"
      >

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Sale Collection
            </h2>

            <p className="text-muted-foreground mt-2">
              Grab your favorites before stock runs out.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-red-500 font-semibold">
            <Zap size={18} />
            Trending Now
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {list.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.05,
              }}
              viewport={{ once: true }}
            >
              <ProductCard p={p} />
            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-20">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-5xl font-black">
            LAST CHANCE.
          </h2>

          <p className="mt-4 text-white/70">
            These discounts won't stay forever.
          </p>

          <a
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-red-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
          >
            SHOP ALL
            <ArrowRight size={18} />
          </a>

        </div>

      </section>

    </div>
  );
}

export default Sale;