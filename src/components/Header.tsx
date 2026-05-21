import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, X, Instagram, MapPin } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { label: "SHOP", to: "/men" },
  { label: "T-SHIRTS", to: "/men" },
  { label: "HOODIES", to: "/men" },
  { label: "SALE", to: "/sale" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="bg-foreground text-background text-xs">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">Nacharam, Hyderabad · Free shipping above ₹999</span>
          </div>
          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-brand-yellow shrink-0"
          >
            <Instagram className="h-3 w-3" /> @_style_daddy_
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-red text-background font-display text-xl px-3 py-1 leading-none shadow-pop">
            SD
          </div>
          <span className="font-display text-xl tracking-tight hidden sm:inline">
            STYLE DADDY
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-display text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-brand-red" }}
              className="hover:text-brand-red transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button className="p-2 hover:text-brand-red" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/cart" className="p-2 relative hover:text-brand-red" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-brand-red text-background text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-display text-xl">MENU</span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-5 font-display text-2xl">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="hover:text-brand-red">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}