import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-brand-red text-background font-display text-xl px-3 py-1 leading-none">SD</div>
            <span className="font-display text-xl">STYLE DADDY</span>
          </div>
          <p className="text-sm text-background/70 leading-relaxed">
            Stay Trendy. Stay Daddy. Hyderabad's loudest streetwear destination since 2024.
          </p>
          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm hover:text-brand-yellow"
          >
            <Instagram className="h-4 w-4" /> @_style_daddy_
          </a>
        </div>

        <div>
          <h4 className="font-display mb-4 text-sm">SHOP</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/men" className="hover:text-brand-yellow">Men</Link></li>
            <li><Link to="/women" className="hover:text-brand-yellow">Women</Link></li>
            <li><Link to="/kids" className="hover:text-brand-yellow">Kids</Link></li>
            <li><Link to="/sale" className="hover:text-brand-yellow">Sale</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-4 text-sm">HELP</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-brand-yellow">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-yellow">Contact</Link></li>
            <li><a className="hover:text-brand-yellow">Shipping</a></li>
            <li><a className="hover:text-brand-yellow">Returns</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display mb-4 text-sm">VISIT THE STORE</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> Shop No. 14, Main Road, Nacharam, Hyderabad — 500076</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> +91 90000 00000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" /> hello@styledaddy.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 text-xs text-background/50 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Style Daddy. All rights reserved.</span>
          <span>Made in Hyderabad with 🔥</span>
        </div>
      </div>
    </footer>
  );
}