import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Style Daddy" },
      { name: "description", content: "Get in touch with Style Daddy. Visit our Nacharam store, DM us on Instagram, or send us a message." },
      { property: "og:title", content: "Contact Style Daddy" },
      { property: "og:description", content: "We're here for the drip." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <span className="text-xs font-display tracking-widest text-brand-red">GET IN TOUCH</span>
      <h1 className="font-display text-4xl md:text-6xl mt-2">SAY HELLO.</h1>
      <p className="text-muted-foreground mt-3 max-w-xl">Got a question, a custom request, or just want to say wassup? We're here for it.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex gap-4 items-start border border-border p-5">
            <MapPin className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display">STORE ADDRESS</h3>
              <p className="text-sm text-muted-foreground mt-1">Shop No. 14, Main Road,<br />Nacharam, Hyderabad — 500076<br />Telangana, India</p>
            </div>
          </div>
          <div className="flex gap-4 items-start border border-border p-5">
            <Phone className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display">PHONE</h3>
              <p className="text-sm text-muted-foreground mt-1">+91 90000 00000</p>
            </div>
          </div>
          <div className="flex gap-4 items-start border border-border p-5">
            <Mail className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display">EMAIL</h3>
              <p className="text-sm text-muted-foreground mt-1">hello@styledaddy.in</p>
            </div>
          </div>
          <div className="flex gap-4 items-start border border-border p-5">
            <Instagram className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display">INSTAGRAM</h3>
              <a href="https://instagram.com/_style_daddy_" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-brand-red">@_style_daddy_</a>
            </div>
          </div>
          <div className="flex gap-4 items-start border border-border p-5">
            <Clock className="h-6 w-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display">STORE HOURS</h3>
              <p className="text-sm text-muted-foreground mt-1">Mon – Sun · 11:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="bg-muted/40 p-6 space-y-4 h-fit"
        >
          <h2 className="font-display text-2xl">DROP A MESSAGE</h2>
          <input required type="text" placeholder="Your name" className="w-full bg-background border border-border px-4 py-3 text-sm" />
          <input required type="email" placeholder="Email" className="w-full bg-background border border-border px-4 py-3 text-sm" />
          <input type="tel" placeholder="Phone (optional)" className="w-full bg-background border border-border px-4 py-3 text-sm" />
          <textarea required rows={5} placeholder="What's up?" className="w-full bg-background border border-border px-4 py-3 text-sm" />
          <button type="submit" className="w-full bg-foreground text-background font-display py-4 hover:bg-brand-red transition-colors">
            {sent ? "SENT ✓ — WE'LL HIT YOU BACK" : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </div>
  );
}