import React from "react";
import { useRouter, Link, useLoaderData } from "@tanstack/react-router";
import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Product } from '../lib/products';

function ProductPage () {
  const route = useRouter();
  const { product, products } = useLoaderData({ from: (route.latestLocation.pathname as any) }) as any || { product: null, products: [] };
  const { add } = useCart();

  const [size, setSize] = useState("M");
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [added, setAdded] = useState(false);
  const [pincode, setPincode] = useState("");

  const off = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  const related = products
    .filter(
      (p: { id: string; category: string }) =>
        p.category === product.category &&
        p.id !== product.id
    )
    .slice(0, 4);

  const handleAdd = () => {
    add(product.id, size);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div>

      {/* BREADCRUMB */}

      <div className="container mx-auto px-4 py-4 text-xs text-muted-foreground">
        <Link to="/">Home</Link> /
        <Link
          to={`/${product.category}` as "/men"}
          className="ml-1 capitalize"
        >
          {product.category}
        </Link>
        / {product.name}
      </div>

      {/* PRODUCT */}

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 pb-20">

        {/* IMAGE */}

        <div className="overflow-hidden rounded-2xl bg-muted group">

          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

        </div>

        {/* PRODUCT INFO */}

        <div className="sticky top-24 self-start">

          <span className="text-xs tracking-widest text-brand-red">
            STYLE DADDY • {product.type.toUpperCase()}
          </span>

          <h1 className="font-display text-4xl mt-3">
            {product.name}
          </h1>

          {/* RATING */}

          <div className="flex items-center gap-2 mt-4">

            <span className="text-yellow-500">
              ★★★★★
            </span>

            <span className="text-sm">
              4.9 (284 Reviews)
            </span>

          </div>

          {/* PRICE */}

          <div className="mt-5 flex items-center gap-3">

            <span className="text-4xl font-bold">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="line-through text-muted-foreground">
              ₹{product.mrp.toLocaleString()}
            </span>

            <span className="bg-brand-red text-white px-2 py-1 rounded text-xs">
              {off}% OFF
            </span>

          </div>

          {/* URGENCY */}

          <div className="mt-4 flex flex-wrap gap-2">

            <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-semibold">
              🔥 Only 7 Left
            </span>

            <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs">
              143 people viewed today
            </span>

          </div>

          {/* DESCRIPTION */}

          <p className="mt-6 text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* PRODUCT HIGHLIGHTS */}

          <div className="grid grid-cols-2 gap-3 mt-8">

            <div className="border rounded-xl p-4 text-sm">
              Premium Cotton
            </div>

            <div className="border rounded-xl p-4 text-sm">
              Oversized Fit
            </div>

            <div className="border rounded-xl p-4 text-sm">
              240 GSM Fabric
            </div>

            <div className="border rounded-xl p-4 text-sm">
              Limited Drop
            </div>

          </div>

          {/* SIZE */}

          <div className="mt-8">

            <div className="mb-3 font-semibold">
              Select Size
            </div>

            <div className="flex flex-wrap gap-2">

              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`
                    w-12 h-12 border rounded-lg
                    ${
                      size === s
                        ? "bg-black text-white border-black"
                        : ""
                    }
                  `}
                >
                  {s}
                </button>
              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="flex gap-3 mt-8">

            <button
              onClick={handleAdd}
              className="
                flex-1
                bg-black
                text-white
                py-4
                rounded-xl
                font-semibold
                hover:bg-brand-red
                transition
              "
            >
              {added
                ? "✓ Added To Bag"
                : "Add To Bag"}
            </button>

            <button className="border p-4 rounded-xl">
              <Heart />
            </button>

          </div>

          {/* WHATSAPP */}

          <a
            href={`https://wa.me/919640639926?text=Hi, I want to order ${product.name} Size ${size}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              w-full
              bg-[#25D366]
              text-white
              py-4
              rounded-xl
              flex
              justify-center
              items-center
              font-bold
              hover:scale-[1.02]
              transition
            "
          >
            ORDER ON WHATSAPP
          </a>

          {/* DELIVERY */}

          <div className="border rounded-xl p-4 mt-8">

            <h3 className="font-semibold mb-3">
              Check Delivery
            </h3>

            <div className="flex gap-2">

              <input
                value={pincode}
                onChange={(e) =>
                  setPincode(e.target.value)
                }
                placeholder="Enter Pincode"
                className="
                  flex-1
                  border
                  rounded-lg
                  px-4
                  py-3
                "
              />

              <button
                className="
                  bg-black
                  text-white
                  px-5
                  rounded-lg
                "
              >
                Check
              </button>

            </div>

            <p className="text-green-600 text-sm mt-3">
              Delivery available in 2-4 days
            </p>

          </div>

          {/* TRUST */}

          <div className="grid grid-cols-3 gap-3 mt-8 text-center">

            <div className="border p-4 rounded-xl">
              <Truck className="mx-auto mb-2 text-brand-red" />
              <p className="text-xs">
                Free Shipping
              </p>
            </div>

            <div className="border p-4 rounded-xl">
              <RotateCcw className="mx-auto mb-2 text-brand-red" />
              <p className="text-xs">
                Easy Returns
              </p>
            </div>

            <div className="border p-4 rounded-xl">
              <ShieldCheck className="mx-auto mb-2 text-brand-red" />
              <p className="text-xs">
                Authentic
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* RELATED */}

      {related.length > 0 && (

        <section className="container mx-auto px-4 pb-20">

          <h2 className="text-3xl font-bold mb-8">
            COMPLETE THE FIT
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {related.map((p: Product) => (
              <ProductCard
                key={p.id}
                p={p}
              />
            ))}

          </div>

        </section>

      )}

      {/* MOBILE CTA */}

      <div
        className="
          md:hidden
          fixed
          bottom-0
          left-0
          right-0
          bg-white
          border-t
          p-4
          z-50
        "
      >

        <button
          onClick={handleAdd}
          className="
            w-full
            bg-black
            text-white
            py-4
            rounded-xl
            font-bold
          "
        >
          ADD TO BAG • ₹{product.price}
        </button>

      </div>

    </div>
  );
}

function useState<T>(initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  return React.useState(initial);
}
function useCart(): { add: any; } {
  throw new Error("Function not implemented.");
}

