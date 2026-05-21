import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, ShoppingBag, Instagram } from "lucide-react";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — Style Daddy" },
      { name: "description", content: "Review the items in your Style Daddy bag." },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, remove, setQty, clear } = useCart();
  const rows = items
    .map((i) => ({ ...i, product: getProduct(i.id) }))
    .filter((r) => r.product);
  const subtotal = rows.reduce((a, r) => a + (r.product?.price ?? 0) * r.qty, 0);
  const mrp = rows.reduce((a, r) => a + (r.product?.mrp ?? 0) * r.qty, 0);
  const savings = mrp - subtotal;
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 79;

  if (rows.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-md">
        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground" />
        <h1 className="font-display text-3xl mt-4">YOUR BAG IS EMPTY</h1>
        <p className="text-muted-foreground mt-2">Time to fill it with some heat.</p>
        <Link to="/men" className="inline-block mt-6 bg-foreground text-background font-display px-6 py-3 hover:bg-brand-red">
          START SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-3xl md:text-4xl mb-6">YOUR BAG ({rows.length})</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {rows.map((r) => (
            <div key={`${r.id}-${r.size}`} className="flex gap-4 border border-border p-4">
              <img src={r.product!.image} alt={r.product!.name} className="w-24 h-32 object-cover bg-muted" />
              <div className="flex-1">
                <Link to="/product/$id" params={{ id: r.id }} className="font-medium hover:text-brand-red">
                  {r.product!.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">Size: {r.size}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display">₹{r.product!.price.toLocaleString()}</span>
                  <span className="text-xs text-muted-foreground line-through">₹{r.product!.mrp.toLocaleString()}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex border border-border">
                    <button onClick={() => setQty(r.id, r.size, r.qty - 1)} className="w-8 h-8 hover:bg-muted">−</button>
                    <span className="w-10 h-8 flex items-center justify-center text-sm">{r.qty}</span>
                    <button onClick={() => setQty(r.id, r.size, r.qty + 1)} className="w-8 h-8 hover:bg-muted">+</button>
                  </div>
                  <button onClick={() => remove(r.id, r.size)} className="text-xs text-muted-foreground hover:text-brand-red inline-flex items-center gap-1">
                    <Trash2 className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button onClick={clear} className="text-xs text-muted-foreground hover:text-brand-red">Clear bag</button>
        </div>

        <aside className="border border-border p-6 h-fit sticky top-24">
          <h2 className="font-display text-lg mb-4">ORDER SUMMARY</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>MRP</span><span>₹{mrp.toLocaleString()}</span></div>
            <div className="flex justify-between text-brand-red"><span>Savings</span><span>− ₹{savings.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span></div>
            <div className="border-t border-border pt-3 mt-3 flex justify-between font-display text-lg">
              <span>TOTAL</span><span>₹{(subtotal + shipping).toLocaleString()}</span>
            </div>
          </div>
          <a
            href="https://instagram.com/_style_daddy_"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-foreground text-background font-display py-4 mt-6 flex items-center justify-center gap-2 hover:bg-brand-red"
          >
            <Instagram className="h-4 w-4" /> CHECKOUT VIA DM
          </a>
          <p className="text-xs text-muted-foreground mt-3 text-center">We process all orders via Instagram DM for now.</p>
        </aside>
      </div>
    </div>
  );
}