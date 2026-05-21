import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import hero from "@/assets/hero-streetwear.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="bg-background">

      {/* HERO */}

      <section className="relative min-h-[90vh] overflow-hidden">

        <img
          src={hero}
          alt="Style Daddy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-black/20
          to-black
        " />

        <div className="
          relative
          container
          mx-auto
          px-6
          min-h-[90vh]
          flex
          items-center
        ">
          <div className="max-w-4xl text-white">

            <div className="
              inline-flex
              items-center
              gap-2
              text-yellow-400
              tracking-[5px]
              uppercase
              text-xs
            ">
              <Sparkles size={14} />
              Since 2024
            </div>

            <h1 className="
              mt-6
              text-6xl
              md:text-8xl
              lg:text-9xl
              font-black
              leading-none
            ">
              STAY
              <br />
              TRENDY.
              <br />
              STAY
              <span className="text-red-500">
                {" "}
                DADDY.
              </span>
            </h1>

            <p className="
              mt-8
              max-w-xl
              text-lg
              text-white/70
            ">
              Hyderabad's next generation streetwear label.
              Designed for people who don't follow trends —
              they create them.
            </p>

          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-24 border-b">
        <div className="
          container
          mx-auto
          px-6
          grid
          md:grid-cols-4
          gap-10
          text-center
        ">

          <div>
            <h2 className="text-5xl font-black">
              5K+
            </h2>
            <p className="text-muted-foreground mt-2">
              Customers
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black">
              150+
            </h2>
            <p className="text-muted-foreground mt-2">
              Products
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black">
              240
            </h2>
            <p className="text-muted-foreground mt-2">
              GSM Heavy Cotton
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black">
              2024
            </h2>
            <p className="text-muted-foreground mt-2">
              Founded
            </p>
          </div>

        </div>
      </section>

      {/* STORY */}

      <section className="py-28">
        <div className="
          container
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-20
          items-center
        ">

          <div>
            <span className="
              text-red-500
              uppercase
              tracking-[4px]
              text-xs
            ">
              Our Story
            </span>

            <h2 className="
              mt-4
              text-5xl
              font-black
              leading-tight
            ">
              Born In Nacharam.
              <br />
              Built For The Streets.
            </h2>

            <p className="
              mt-8
              text-muted-foreground
              leading-8
            ">
              Style Daddy started as a small idea in
              Hyderabad. We wanted oversized tees,
              heavyweight fabrics and statement pieces
              without luxury-brand prices.
            </p>

            <p className="
              mt-6
              text-muted-foreground
              leading-8
            ">
              Every collection is designed around
              confidence, individuality and street
              culture.
            </p>

          </div>

          <div className="
            rounded-3xl
            overflow-hidden
            aspect-square
          ">
            <img
              src={hero}
              alt=""
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

        </div>
      </section>

      {/* VALUES */}

      <section className="bg-black text-white py-28">

        <div className="
          container
          mx-auto
          px-6
        ">

          <h2 className="
            text-center
            text-5xl
            font-black
          ">
            WHAT WE STAND FOR
          </h2>

          <div className="
            mt-20
            grid
            md:grid-cols-3
            gap-10
          ">

            <div>
              <h3 className="
                text-2xl
                font-bold
              ">
                Premium Fabric
              </h3>

              <p className="
                mt-4
                text-white/60
              ">
                Heavyweight materials built to outlast
                trends.
              </p>
            </div>

            <div>
              <h3 className="
                text-2xl
                font-bold
              ">
                Small Batch Drops
              </h3>

              <p className="
                mt-4
                text-white/60
              ">
                Limited releases. Once sold out,
                they rarely return.
              </p>
            </div>

            <div>
              <h3 className="
                text-2xl
                font-bold
              ">
                Real Prices
              </h3>

              <p className="
                mt-4
                text-white/60
              ">
                No fake luxury markups.
                Premium quality at honest pricing.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="py-24">

        <div className="
          container
          mx-auto
          px-6
          max-w-4xl
        ">

          <div className="
            rounded-3xl
            border
            p-10
            md:p-14
          ">

            <h2 className="
              text-4xl
              font-black
            ">
              VISIT STYLE DADDY
            </h2>

            <div className="
              mt-10
              grid
              md:grid-cols-2
              gap-8
            ">

              <div className="
                flex
                gap-4
              ">
                <MapPin
                  className="
                    text-red-500
                    shrink-0
                  "
                />

                <div>
                  <h3 className="font-bold">
                    Store Location
                  </h3>

                  <p className="
                    mt-2
                    text-muted-foreground
                  ">
                    Shop No. 14, Main Road,
                    Nacharam, Hyderabad
                  </p>
                </div>
              </div>

              <div className="
                flex
                gap-4
              ">
                <Instagram
                  className="
                    text-red-500
                    shrink-0
                  "
                />

                <div>
                  <h3 className="font-bold">
                    Follow The Drops
                  </h3>

                  <a
                    href="https://instagram.com/_style_daddy_"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-2
                      inline-flex
                      items-center
                      gap-2
                      text-muted-foreground
                      hover:text-red-500
                    "
                  >
                    @_style_daddy_
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
}