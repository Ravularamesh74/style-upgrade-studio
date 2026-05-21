import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Style Daddy | Premium Streetwear Hyderabad",
      },
      {
        name: "description",
        content:
          "Visit Style Daddy in Nacharam, Hyderabad or contact us via Instagram, WhatsApp, phone, or email.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-background">

      {/* HERO */}

      <section className="relative overflow-hidden border-b">

        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10" />

        <div className="container mx-auto px-6 py-24 relative">

          <span className="text-brand-red text-xs tracking-[6px] font-display">
            GET IN TOUCH
          </span>

          <h1 className="mt-4 text-6xl md:text-8xl font-black leading-none">
            LET'S TALK
            <br />
            STREETWEAR.
          </h1>

          <p className="mt-6 max-w-xl text-muted-foreground text-lg">
            Questions, collaborations, bulk orders, custom requests,
            or just want to say hello? We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* QUICK CONTACT */}

      <section className="container mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-3xl
              border
              p-8
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <Instagram className="h-8 w-8 text-brand-red" />

            <h3 className="mt-5 text-xl font-bold">
              Instagram DM
            </h3>

            <p className="mt-2 text-muted-foreground">
              Fastest way to place orders and ask questions.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-brand-red">
              Open Instagram
              <ArrowRight size={16} />
            </span>
          </a>

          <a
            href="tel:+919000000000"
            className="
              rounded-3xl
              border
              p-8
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <Phone className="h-8 w-8 text-brand-red" />

            <h3 className="mt-5 text-xl font-bold">
              Call Us
            </h3>

            <p className="mt-2 text-muted-foreground">
              Talk directly with our team.
            </p>

            <span className="mt-5 block text-brand-red">
              +91 90000 00000
            </span>
          </a>

          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-3xl
              border
              p-8
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <MessageCircle className="h-8 w-8 text-brand-red" />

            <h3 className="mt-5 text-xl font-bold">
              WhatsApp
            </h3>

            <p className="mt-2 text-muted-foreground">
              Instant support and order assistance.
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-brand-red">
              Start Chat
              <ArrowRight size={16} />
            </span>
          </a>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="container mx-auto px-6 py-12">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* CONTACT INFO */}

          <div className="space-y-5">

            <div className="rounded-3xl border p-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-brand-red shrink-0" />

                <div>
                  <h3 className="font-bold text-lg">
                    Visit Our Store
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Shop No. 14, Main Road
                    <br />
                    Nacharam, Hyderabad – 500076
                    <br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border p-6">
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-brand-red shrink-0" />

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    hello@styledaddy.in
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border p-6">
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-brand-red shrink-0" />

                <div>
                  <h3 className="font-bold text-lg">
                    Store Hours
                  </h3>

                  <p className="mt-2 text-muted-foreground">
                    Monday – Sunday
                    <br />
                    11:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}

            <div className="rounded-3xl overflow-hidden border h-[320px]">
              <iframe
                title="Style Daddy Location"
                src="https://maps.google.com/maps?q=Nacharam%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

          </div>

          {/* FORM */}

          <div className="rounded-3xl border p-8">

            <h2 className="text-3xl font-black">
              SEND A MESSAGE
            </h2>

            <p className="mt-2 text-muted-foreground">
              We'll get back to you within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-8 space-y-4"
            >

              <input
                required
                placeholder="Your Name"
                className="
                  w-full
                  rounded-xl
                  border
                  px-4
                  py-4
                  bg-background
                "
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  rounded-xl
                  border
                  px-4
                  py-4
                  bg-background
                "
              />

              <input
                placeholder="Phone Number"
                className="
                  w-full
                  rounded-xl
                  border
                  px-4
                  py-4
                  bg-background
                "
              />

              <textarea
                required
                rows={6}
                placeholder="Tell us what's on your mind..."
                className="
                  w-full
                  rounded-xl
                  border
                  px-4
                  py-4
                  bg-background
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-brand-red
                  text-white
                  py-4
                  font-bold
                  transition
                  hover:opacity-90
                "
              >
                {sent
                  ? "MESSAGE SENT ✓"
                  : "SEND MESSAGE"}
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 border-t">

        <div className="container mx-auto px-6 text-center">

          <h2 className="text-5xl font-black">
            STAY TRENDY.
            <br />
            STAY DADDY.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Follow us for new drops, exclusive launches,
            and streetwear inspiration.
          </p>

          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              rounded-xl
              bg-brand-red
              text-white
              px-8
              py-4
              font-semibold
            "
          >
            <Instagram size={18} />
            Follow @_style_daddy_
          </a>

        </div>

      </section>

    </div>
  );
}