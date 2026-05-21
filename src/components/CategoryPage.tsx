import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  ArrowUpDown,
} from "lucide-react";

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
  const products = byCategory(category);

  const types = [
    "All",
    ...Array.from(new Set(products.map((p) => p.type))),
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"new" | "low" | "high">("new");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (filter !== "All") {
      list = list.filter((p) => p.type === filter);
    }

    if (search) {
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (sort) {
      case "low":
        list.sort((a, b) => a.price - b.price);
        break;

      case "high":
        list.sort((a, b) => b.price - a.price);
        break;
    }

    return list;
  }, [products, filter, search, sort]);

  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative h-[75vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={cover}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-yellow-400 tracking-[6px] uppercase text-sm"
            >
              <Sparkles size={14} />
              Luxury Collection
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white font-display text-6xl md:text-8xl mt-4"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 max-w-xl mt-6 text-lg"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-6"
            >
              <div>
                <h3 className="text-white text-3xl font-bold">
                  {products.length}
                </h3>
                <p className="text-white/60 text-sm">
                  Products
                </p>
              </div>

              <div className="h-10 w-px bg-white/20" />

              <div>
                <h3 className="text-white text-3xl font-bold">
                  2026
                </h3>
                <p className="text-white/60 text-sm">
                  Collection
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STICKY TOOLBAR */}

      <div className="sticky top-0 z-40 backdrop-blur-2xl bg-background/70 border-b border-border">
        <div className="container mx-auto px-4 py-4">

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">

            <div className="relative w-full lg:w-80">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />

              <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full
                pl-11
                pr-4
                py-3
                rounded-full
                bg-muted
                border
                border-border
                outline-none
                focus:ring-2
                focus:ring-primary
              "
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {types.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`
                    px-5 py-2 rounded-full
                    transition-all duration-300
                    ${
                      filter === item
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-accent"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">

              <SlidersHorizontal size={18} />

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value as typeof sort)
                }
                className="bg-transparent border px-4 py-2 rounded-xl"
              >
                <option value="new">
                  Newest
                </option>

                <option value="low">
                  Low to High
                </option>

                <option value="high">
                  High to Low
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}

      <section className="container mx-auto px-4 py-12">

        <div className="flex justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Discover Collection
          </h2>

          <span className="text-muted-foreground">
            {filteredProducts.length} Products
          </span>
        </div>

        <motion.div
          layout
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-8
          "
        >
          <AnimatePresence mode="popLayout">

            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  delay: index * 0.04,
                }}
              >
                <ProductCard p={product} />
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}