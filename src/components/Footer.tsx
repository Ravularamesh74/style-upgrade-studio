import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "New Arrivals", to: "/men" },
  { name: "Best Sellers", to: "/men" },
  { name: "Collections", to: "/men" },
  { name: "Sale", to: "/sale" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Grid */}

      <div className="absolute inset-0 opacity-20">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />
      </div>

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[180px]" />

      {/* Marquee */}

      <section className="relative border-y border-white/10 overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="
            flex
            whitespace-nowrap
            gap-20
            py-5
            text-2xl
            md:text-3xl
            font-black
            uppercase
          "
        >
          <span>STYLE DADDY</span>
          <span>PREMIUM STREETWEAR</span>
          <span>NEW DROP</span>
          <span>LIMITED EDITION</span>
          <span>HYDERABAD STREET CULTURE</span>
          <span>STYLE DADDY</span>
          <span>PREMIUM STREETWEAR</span>
          <span>NEW DROP</span>
        </motion.div>
      </section>

      {/* Main */}

      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left */}

          <div>
            <span className="uppercase tracking-[6px] text-red-500 text-xs">
              Street Luxury
            </span>

            <h2
              className="
                mt-6
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-black
                uppercase
                leading-[0.9]
              "
            >
              STYLE
              <br />
              DADDY
            </h2>

            <p className="mt-8 max-w-xl text-lg text-white/60 leading-relaxed">
              Crafted for creators, trendsetters and dreamers.
              Every piece is designed to elevate confidence and
              redefine modern streetwear culture.
            </p>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-black">100+</div>
                <div className="text-white/50 text-sm uppercase">
                  Designs
                </div>
              </div>

              <div>
                <div className="text-4xl font-black">24/7</div>
                <div className="text-white/50 text-sm uppercase">
                  Support
                </div>
              </div>

              <div>
                <div className="text-4xl font-black">2026</div>
                <div className="text-white/50 text-sm uppercase">
                  Collection
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-6">
            {/* WhatsApp Card */}

            <a
              href="https://wa.me/919640639926"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                block
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                transition-all
                hover:border-green-500/50
                hover:bg-green-500/10
              "
            >
              <MessageCircle
                size={48}
                className="text-green-500"
              />

              <p className="mt-4 text-white/50 uppercase tracking-[4px] text-xs">
                Order Directly
              </p>

              <h3 className="mt-2 text-3xl font-black">
                WhatsApp
              </h3>

              <p className="mt-3 text-white/70">
                +91 96406 39926
              </p>

              <ArrowRight
                className="
                  absolute
                  right-8
                  top-8
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                "
              />
            </a>

            {/* Contact */}

            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <h4 className="font-black text-xl uppercase">
                Contact
              </h4>

              <div className="mt-6 space-y-5 text-white/70">
                <div className="flex gap-3 items-center">
                  <MapPin
                    size={18}
                    className="text-red-500"
                  />
                  Hyderabad, Telangana
                </div>

                <div className="flex gap-3 items-center">
                  <Phone
                    size={18}
                    className="text-red-500"
                  />
                  +91 96406 39926
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}

        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="
                relative
                text-white/60
                uppercase
                tracking-wider
                transition-all
                hover:text-white
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-px
                after:w-0
                after:bg-red-500
                after:transition-all
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Huge Watermark */}

      <div
        className="
          absolute
          bottom-0
          left-0
          pointer-events-none
          select-none
          leading-none
          font-black
          uppercase
          text-[120px]
          md:text-[220px]
          lg:text-[320px]
          text-white/[0.03]
        "
      >
        STYLE
      </div>

      {/* Bottom */}

      <section className="relative border-t border-white/10">
        <div
          className="
            container
            mx-auto
            px-6
            py-8
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <p className="text-white/40 uppercase tracking-[3px] text-xs">
            © {new Date().getFullYear()} STYLE DADDY
          </p>

          <p className="text-white/40 uppercase tracking-[3px] text-xs">
            DESIGNED IN HYDERABAD
          </p>

          <a
            href="https://wa.me/919640639926"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-red-500
              font-bold
              uppercase
              tracking-wider
              hover:text-red-400
            "
          >
            WhatsApp Orders →
          </a>
        </div>
      </section>
    </footer>
  );
}