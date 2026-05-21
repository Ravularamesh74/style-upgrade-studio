import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  qty: number;
  size: string;
};

type CartContextType = {
  items: CartItem[];
  count: number;

  add: (id: string, size?: string) => void;
  remove: (id: string, size: string) => void;
  setQty: (
    id: string,
    size: string,
    qty: number
  ) => void;

  clear: () => void;
};

const STORAGE_KEY = "sd_cart";

const CartContext =
  createContext<CartContextType | null>(null);

function cartKey(id: string, size: string) {
  return `${id}_${size}`;
}

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const stored =
        localStorage.getItem(STORAGE_KEY);

      return stored
        ? JSON.parse(stored)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  const add = (
    id: string,
    size = "M"
  ) => {
    setItems((prev) => {
      const key = cartKey(id, size);

      const existing = prev.find(
        (item) =>
          cartKey(item.id, item.size) === key
      );

      if (existing) {
        return prev.map((item) =>
          cartKey(item.id, item.size) === key
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          id,
          size,
          qty: 1,
        },
      ];
    });
  };

  const remove = (
    id: string,
    size: string
  ) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size
          )
      )
    );
  };

  const setQty = (
    id: string,
    size: string,
    qty: number
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id &&
        item.size === size
          ? {
              ...item,
              qty: Math.max(1, qty),
            }
          : item
      )
    );
  };

  const clear = () => {
    setItems([]);
  };

  const count = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.qty,
        0
      ),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      count,
      add,
      remove,
      setQty,
      clear,
    }),
    [items, count]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}