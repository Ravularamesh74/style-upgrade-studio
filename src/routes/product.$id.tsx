import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Heart, Truck, ShieldCheck, RotateCcw, Instagram } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Style Daddy` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
          { property: "og:type", content: "product" },
        ]
      : [],
  }),
  errorComponent: () => <div className="container mx-auto px-4 py-20 text-center">Could not load product.</div>,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="font-display text-3xl">Product not found</h1>
      <Link to="/" className="text-brand-red mt-4 inline-block">Back home</Link>
    </div>
  ),
  component: ProductPage,
});

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    add(product.id, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
        <Link to={`/${product.category}` as "/men"} className="hover:text-foreground capitalize">{product.category}</Link> /{" "}
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 pb-16">
        <div className="bg-muted aspect-square overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <span className="text-xs font-display tracking-widest text-brand-red">STYLE DADDY · {product.type.toUpperCase()}</span>
          <h1 className="font-display text-3xl md:text-4xl mt-2 leading-tight">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-3xl">₹{product.price.toLocaleString()}</span>
            <span className="text-muted-foreground line-through">₹{product.mrp.toLocaleString()}</span>
            <span className="bg-brand-red text-background px-2 py-0.5 text-xs font-display">{off}% OFF</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Inclusive of all taxes</p>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-sm">SELECT SIZE</span>
              <a className="text-xs text-brand-red underline">Size guide</a>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 border font-display text-sm ${
                    size === s ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleAdd}
              className="flex-1 bg-foreground text-background font-display py-4 px-6 flex items-center justify-center gap-2 hover:bg-brand-red transition-colors"
            >
              <ShoppingBag className="h-5 w-5" /> {added ? "ADDED ✓" : "ADD TO BAG"}
            </button>
            <button className="border border-border p-4 hover:border-brand-red hover:text-brand-red" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full border border-foreground py-3 px-6 flex items-center justify-center gap-2 font-display text-sm hover:bg-foreground hover:text-background"
          >
            <Instagram className="h-4 w-4" /> DM TO ORDER ON INSTAGRAM
          </a>

          <div className="mt-8 border-t border-border pt-6">
            <h3 className="font-display mb-2">DESCRIPTION</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-muted-foreground">
            <div className="flex flex-col items-center text-center gap-1 p-3 border border-border">
              <Truck className="h-5 w-5 text-brand-red" /> Free shipping ₹999+
            </div>
            <div className="flex flex-col items-center text-center gap-1 p-3 border border-border">
              <RotateCcw className="h-5 w-5 text-brand-red" /> 7-day returns
            </div>
            <div className="flex flex-col items-center text-center gap-1 p-3 border border-border">
              <ShieldCheck className="h-5 w-5 text-brand-red" /> 100% original
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="font-display text-2xl md:text-3xl mb-6">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {related.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}