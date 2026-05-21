import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { useCart } from "@/lib/cart";
import { getProduct, featured } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      {
        title: "Your Bag — Style Daddy",
      },
      {
        name: "description",
        content:
          "Review the items in your Style Daddy shopping bag.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, remove, setQty, clear } = useCart();

  const rows = items
    .map((item) => ({
      ...item,
      product: getProduct(item.id),
    }))
    .filter(
      (
        row
      ): row is typeof row & {
        product: NonNullable<typeof row.product>;
      } => Boolean(row.product)
    );

  const subtotal = rows.reduce(
    (sum, row) => sum + row.product.price * row.qty,
    0
  );

  const mrp = rows.reduce(
    (sum, row) => sum + row.product.mrp * row.qty,
    0
  );

  const savings = mrp - subtotal;

  const shipping =
    subtotal > 999 || subtotal === 0 ? 0 : 79;

  const total = subtotal + shipping;

  const freeShippingTarget = 999;

  const progress = Math.min(
    (subtotal / freeShippingTarget) * 100,
    100
  );

  const handleWhatsAppCheckout = () => {
    const whatsappNumber = "919640639926";

    const products = rows
      .map(
        (row, index) => `
${index + 1}. ${row.product.name}
Size: ${row.size}
Qty: ${row.qty}
Price: ₹${row.product.price}
`
      )
      .join("\n");

    const message = `
🔥 STYLE DADDY ORDER 🔥

Name:
Phone:
Address:

━━━━━━━━━━━━━━━

${products}

━━━━━━━━━━━━━━━

MRP: ₹${mrp.toLocaleString()}
Savings: ₹${savings.toLocaleString()}
Shipping: ${
      shipping === 0
        ? "FREE"
        : `₹${shipping.toLocaleString()}`
    }

TOTAL: ₹${total.toLocaleString()}

━━━━━━━━━━━━━━━

Please confirm my order.
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  if (!rows.length) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-red-500/10
            "
          >
            <ShoppingBag className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="mt-8 text-5xl font-black">
            YOUR BAG IS EMPTY
          </h1>

          <p className="mt-4 text-muted-foreground">
            Time to upgrade your fit.
            Explore our newest collection.
          </p>

          <Link
            to="/men"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              rounded-xl
              bg-red-600
              px-8
              py-4
              text-white
              font-semibold
              hover:bg-red-500
            "
          >
            Shop Collection
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-black">
          YOUR BAG ({rows.length})
        </h1>

        <button
          onClick={clear}
          className="
            text-sm
            text-muted-foreground
            hover:text-red-500
          "
        >
          Clear Bag
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          {rows.map((row) => (
            <div
              key={`${row.id}-${row.size}`}
              className="
                group
                flex
                gap-5
                rounded-3xl
                border
                p-5
                hover:shadow-xl
                transition-all
              "
            >
              <img
                src={row.product.image}
                alt={row.product.name}
                className="
                  h-36
                  w-28
                  rounded-xl
                  object-cover
                "
              />

              <div className="flex-1">
                <Link
                  to={`/product/${row.id}` as any}
                  className="
                    text-lg
                    font-semibold
                    hover:text-red-500
                  "
                >
                  {row.product.name}
                </Link>

                <p className="mt-2 text-sm text-muted-foreground">
                  Size: {row.size}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="font-bold">
                    ₹{row.product.price}
                  </span>

                  <span
                    className="
                      text-sm
                      text-muted-foreground
                      line-through
                    "
                  >
                    ₹{row.product.mrp}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div
                    className="
                      flex
                      overflow-hidden
                      rounded-lg
                      border
                    "
                  >
                    <button
                      onClick={() =>
                        setQty(
                          row.id,
                          row.size,
                          row.qty - 1
                        )
                      }
                      className="h-10 w-10"
                    >
                      −
                    </button>

                    <div
                      className="
                        flex
                        h-10
                        w-12
                        items-center
                        justify-center
                      "
                    >
                      {row.qty}
                    </div>

                    <button
                      onClick={() =>
                        setQty(
                          row.id,
                          row.size,
                          row.qty + 1
                        )
                      }
                      className="h-10 w-10"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      remove(row.id, row.size)
                    }
                    className="
                      flex
                      items-center
                      gap-1
                      text-sm
                      text-muted-foreground
                      hover:text-red-500
                    "
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside
          className="
            h-fit
            sticky
            top-24
            rounded-3xl
            border
            p-8
            shadow-lg
          "
        >
          {subtotal < freeShippingTarget && (
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>
                  ₹
                  {(
                    freeShippingTarget -
                    subtotal
                  ).toLocaleString()}{" "}
                  away from FREE shipping
                </span>

                <span>
                  {Math.round(progress)}%
                </span>
              </div>

              <div className="h-2 bg-muted rounded-full">
                <div
                  className="
                    h-full
                    bg-red-500
                    rounded-full
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          )}

          <h2 className="text-2xl font-black mb-6">
            ORDER SUMMARY
          </h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>MRP</span>
              <span>₹{mrp}</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Savings</span>
              <span>- ₹{savings}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>
                {shipping === 0
                  ? "FREE"
                  : `₹${shipping}`}
              </span>
            </div>

            <div
              className="
                border-t
                pt-4
                mt-4
                flex
                justify-between
                text-xl
                font-black
              "
            >
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button
            onClick={handleWhatsAppCheckout}
            className="
              mt-8
              w-full
              rounded-2xl
              bg-green-600
              py-4
              text-lg
              font-bold
              text-white
              flex
              items-center
              justify-center
              gap-3
              hover:bg-green-500
              transition-all
            "
          >
            <MessageCircle size={22} />
            ORDER VIA WHATSAPP
          </button>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Orders are processed instantly through WhatsApp.
          </p>
        </aside>
      </div>

      <section className="mt-24">
        <h2 className="mb-10 text-4xl font-black">
          COMPLETE THE FIT
        </h2>

        <div
          className="
            grid
            grid-cols-2
            gap-6
            lg:grid-cols-4
          "
        >
          {featured()
            .slice(0, 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                p={product}
              />
            ))}
        </div>
      </section>
    </div>
  );
}