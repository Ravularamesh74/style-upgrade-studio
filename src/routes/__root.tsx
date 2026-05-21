import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  HeadContent,
  Scripts,
  useRouter,
  useRouterState,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/lib/cart";

function ScrollToTop() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-lg text-center">
        <span className="text-brand-red tracking-[6px] text-xs font-display">
          ERROR 404
        </span>

        <h1 className="mt-4 text-6xl md:text-8xl font-black">
          LOST IN THE
          <br />
          STREETS
        </h1>

        <p className="mt-6 text-muted-foreground">
          The page you're looking for has either moved,
          sold out, or never existed.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              rounded-xl
              bg-brand-red
              text-white
              px-6
              py-3
              font-semibold
              transition
              hover:opacity-90
            "
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-lg text-center">

        <span className="text-brand-red tracking-[6px] text-xs font-display">
          APPLICATION ERROR
        </span>

        <h1 className="mt-4 text-5xl md:text-6xl font-black">
          THIS PAGE
          <br />
          DIDN'T LOAD
        </h1>

        <p className="mt-6 text-muted-foreground">
          Something went wrong while loading this page.
          Please try again or return home.
        </p>

        <div className="mt-8 flex justify-center gap-3">

          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="
              rounded-xl
              bg-brand-red
              text-white
              px-6
              py-3
              font-semibold
            "
          >
            Try Again
          </button>

          <Link
            to="/"
            className="
              rounded-xl
              border
              border-border
              px-6
              py-3
              font-semibold
            "
          >
            Home
          </Link>

        </div>

      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },

        {
          title:
            "Style Daddy | Premium Streetwear Hyderabad",
        },

        {
          name: "description",
          content:
            "Premium oversized tees, cargos, hoodies and streetwear from Hyderabad. Stay Trendy. Stay Daddy.",
        },

        {
          name: "keywords",
          content:
            "streetwear, oversized t-shirts, hoodies, cargos, Hyderabad fashion, style daddy",
        },

        {
          name: "theme-color",
          content: "#000000",
        },

        {
          property: "og:title",
          content:
            "Style Daddy | Premium Streetwear",
        },

        {
          property: "og:description",
          content:
            "Hyderabad's loudest streetwear destination.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:image",
          content: "/og-image.jpg",
        },

        {
          property: "og:url",
          content:
            "https://styledaddy.in",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "icon",
          href: "/favicon.ico",
        },

        {
          rel: "preconnect",
          href:
            "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href:
            "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } =
    Route.useRouteContext();

  return (
    <QueryClientProvider
      client={queryClient}
    >
      <CartProvider>

        <ScrollToTop />

        <div className="min-h-screen flex flex-col">

          <Header />

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />

        </div>

      </CartProvider>
    </QueryClientProvider>
  );
}