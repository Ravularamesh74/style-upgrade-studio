import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = { id: string; qty: number; size: string };

type Ctx = {
  items: CartItem[];
  add: (id: string, size?: string) => void;
  remove: (id: string, size: string) => void;
  setQty: (id: string, size: string, qty: number) => void;
  clear: () => void;
  count: number;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("sd_cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem("sd_cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add: Ctx["add"] = (id, size = "M") =>
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === id && x.size === size);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { id, size, qty: 1 }];
    });

  const remove: Ctx["remove"] = (id, size) =>
    setItems((p) => p.filter((x) => !(x.id === id && x.size === size)));

  const setQty: Ctx["setQty"] = (id, size, qty) =>
    setItems((p) => p.map((x) => (x.id === id && x.size === size ? { ...x, qty: Math.max(1, qty) } : x)));

  const clear = () => setItems([]);
  const count = items.reduce((a, b) => a + b.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, setQty, clear, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}