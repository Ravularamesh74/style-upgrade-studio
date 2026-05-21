import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Heart,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count } = useCart();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}

      <div className="bg-black text-white overflow-hidden h-10 flex items-center">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap text-xs tracking-[4px]"
        >
          FREE SHIPPING ABOVE ₹999 • NEW DROP EVERY FRIDAY •
          PREMIUM STREETWEAR • STYLE DADDY EXCLUSIVE •
          FREE SHIPPING ABOVE ₹999 •
        </motion.div>
      </div>

      {/* Header */}

      <header
        className={`
          fixed
          top-10
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-background/80 backdrop-blur-3xl border-b border-border shadow-xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="container mx-auto px-6">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}

            <Link to="/">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                className="flex items-center gap-3"
              >
                <div className="
                  h-12
                  w-12
                  rounded-xl
                  bg-red-600
                  flex
                  items-center
                  justify-center
                  font-black
                  text-white
                ">
                  SD
                </div>

                <div>
                  <h2 className="font-black text-lg">
                    STYLE DADDY
                  </h2>

                  <p className="text-xs opacity-60">
                    Premium Streetwear
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}

            <nav className="hidden lg:flex items-center gap-8">

              <div
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button className="flex items-center gap-1">
                  SHOP
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>

                  {shopOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 20,
                      }}
                      className="
                        absolute
                        top-full
                        left-0
                        mt-4
                        w-[700px]
                        bg-background
                        border
                        rounded-3xl
                        shadow-2xl
                        p-8
                      "
                    >
                      <div className="grid grid-cols-3 gap-8">

                        <div>
                          <h4 className="font-bold mb-4">
                            Clothing
                          </h4>

                          <ul className="space-y-3">
                            <li>T-Shirts</li>
                            <li>Oversized</li>
                            <li>Hoodies</li>
                            <li>Joggers</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold mb-4">
                            Collections
                          </h4>

                          <ul className="space-y-3">
                            <li>Summer Drop</li>
                            <li>Street Core</li>
                            <li>New Arrival</li>
                          </ul>
                        </div>

                        <div>
                          <img
                            src="/collection.jpg"
                            className="
                              h-56
                              w-full
                              object-cover
                              rounded-2xl
                            "
                          />
                        </div>

                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              <Link to="/sale">SALE</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>

            {/* Actions */}

            <div className="flex items-center gap-3">

              <button
                onClick={() => setSearchOpen(true)}
                className="p-2"
              >
                <Search />
              </button>

              <button className="p-2">
                <Heart />
              </button>

              <Link
                to="/cart"
                className="relative p-2"
              >
                <ShoppingBag />

                {count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="
                      absolute
                      -top-1
                      -right-1
                      bg-red-600
                      text-white
                      w-5
                      h-5
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-xs
                    "
                  >
                    {count}
                  </motion.span>
                )}
              </Link>

              <a
                href="https://instagram.com/_style_daddy_"
                target="_blank"
              >
                <Instagram />
              </a>

              <button
                className="lg:hidden"
                onClick={() =>
                  setMobileOpen(true)
                }
              >
                <Menu />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Search Modal */}

      <AnimatePresence>

        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/90
              backdrop-blur-3xl
              z-[999]
              flex
              items-center
              justify-center
              p-6
            "
          >
            <button
              className="absolute top-8 right-8"
              onClick={() =>
                setSearchOpen(false)
              }
            >
              <X />
            </button>

            <input
              placeholder="Search Collection..."
              className="
                w-full
                max-w-4xl
                bg-transparent
                border-b
                border-white/20
                text-white
                text-5xl
                outline-none
                pb-6
              "
            />
          </motion.div>
        )}

      </AnimatePresence>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath:
                "circle(0% at 100% 0%)",
            }}
            animate={{
              opacity: 1,
              clipPath:
                "circle(150% at 100% 0%)",
            }}
            exit={{
              opacity: 0,
              clipPath:
                "circle(0% at 100% 0%)",
            }}
            className="
              fixed
              inset-0
              bg-black
              text-white
              z-[999]
            "
          >
            <div className="p-6">

              <button
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                <X size={32} />
              </button>

              <div className="mt-20 flex flex-col gap-8 text-4xl font-black">

                <Link to="/men">SHOP</Link>
                <Link to="/sale">SALE</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>

              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}