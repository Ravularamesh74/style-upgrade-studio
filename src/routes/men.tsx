import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Filter } from "lucide-react";
import { useMemo, useState } from "react";

import cover from "@/assets/cat-men.jpg";
import { ProductCard } from "@/components/ProductCard";
import { byCategory, type Product } from "@/lib/products";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      {
        title:
          "Men's Streetwear | Style Daddy",
      },
      {
        name: "description",
        content:
          "Oversized tees, hoodies, cargos and premium streetwear from Style Daddy.",
      },
    ],
  }),

  component: MenPage,
});

function MenPage() {
  const products = byCategory("men");

  const categories = [
    "All",
    ...new Set(
      products.map((p) => p.type)
    ),
  ];

  const [active, setActive] =
    useState("All");

  const [sort, setSort] =
    useState("new");

  const filtered = useMemo(() => {
    let list =
      active === "All"
        ? products
        : products.filter(
            (p) => p.type === active
          );

    if (sort === "low") {
      list = [...list].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      list = [...list].sort(
        (a, b) => b.price - a.price
      );
    }

    return list;
  }, [products, active, sort]);

  return (
    <div>

      {/* HERO */}

      <section className="relative h-[75vh] overflow-hidden">

        <img
          src={cover}
          alt="Style Daddy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/70
          to-transparent
        " />

        <div className="
          relative
          container
          mx-auto
          px-6
          h-full
          flex
          items-center
        ">
          <div className="max-w-3xl text-white">

            <span className="
              tracking-[6px]
              text-red-500
              text-xs
            ">
              MEN'S COLLECTION
            </span>

            <h1 className="
              mt-4
              text-6xl
              md:text-8xl
              font-black
              leading-none
            ">
              STREETWEAR
              <br />
              ESSENTIALS
            </h1>

            <p className="
              mt-6
              text-white/70
              max-w-xl
            ">
              Oversized fits, premium fabrics,
              heavyweight cotton and bold
              designs built for the streets.
            </p>

          </div>
        </div>

      </section>

      {/* STATS */}

      <section className="
        border-b
        py-10
      ">
        <div className="
          container
          mx-auto
          px-6
          grid
          md:grid-cols-4
          gap-8
          text-center
        ">

          <div>
            <h3 className="text-4xl font-black">
              {products.length}
            </h3>
            <p className="text-muted-foreground">
              Products
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              240
            </h3>
            <p className="text-muted-foreground">
              GSM Cotton
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              5K+
            </h3>
            <p className="text-muted-foreground">
              Customers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              2026
            </h3>
            <p className="text-muted-foreground">
              Latest Drop
            </p>
          </div>

        </div>
      </section>

      {/* FILTERS */}

      <section className="
        container
        mx-auto
        px-6
        py-10
      ">

        <div className="
          flex
          flex-wrap
          gap-4
          justify-between
          items-center
          mb-8
        ">

          <div className="
            flex
            flex-wrap
            gap-2
          ">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActive(cat)
                }
                className={`
                  px-4 py-2 rounded-full
                  border transition
                  ${
                    active === cat
                      ? "bg-black text-white"
                      : ""
                  }
                `}
              >
                {cat}
              </button>
            ))}

          </div>

          <div className="
            flex
            items-center
            gap-3
          ">

            <Filter size={18} />

            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
              className="
                border
                rounded-xl
                px-4
                py-2
              "
            >
              <option value="new">
                Newest
              </option>

              <option value="low">
                Price Low → High
              </option>

              <option value="high">
                Price High → Low
              </option>
            </select>

          </div>

        </div>

        {/* PRODUCT COUNT */}

        <div className="
          flex
          justify-between
          items-center
          mb-8
        ">

          <span className="
            text-muted-foreground
          ">
            {filtered.length} products
          </span>

          <div className="
            flex
            items-center
            gap-2
            text-red-500
          ">
            <Flame size={16} />
            Trending Collection
          </div>

        </div>

        {/* PRODUCTS */}

        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {filtered.map(
            (product: Product) => (
              <ProductCard
                key={product.id}
                p={product}
              />
            )
          )}

        </div>

      </section>

      {/* COLLECTION BANNER */}

      <section className="
        container
        mx-auto
        px-6
        py-24
      ">

        <div className="
          rounded-[40px]
          overflow-hidden
          relative
          bg-black
          text-white
        ">

          <img
            src={cover}
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              opacity-30
            "
          />

          <div className="
            relative
            p-16
            text-center
          ">

            <span className="
              tracking-[5px]
              text-red-500
              text-xs
            ">
              LIMITED DROP
            </span>

            <h2 className="
              mt-6
              text-5xl
              md:text-7xl
              font-black
            ">
              BUILT FOR
              <br />
              THE STREETS
            </h2>

            <button className="
              mt-8
              bg-red-600
              px-8
              py-4
              rounded-xl
              inline-flex
              items-center
              gap-2
            ">
              Explore More
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}