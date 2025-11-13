"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { track } from "@/lib/telemetry";

export type CartItem = {
  productId: string;
  slug: string;
  title: string;
  price: number;
  currency: string;
  size?: string;
  qty: number;
};

export type CartState = {
  open: boolean;
  items: CartItem[];
};

const CartCtx = createContext<{
  state: CartState;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
} | null>(null);

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CartState>({ open: false, items: [] });

  const api = useMemo(
    () => ({
      state,
      openCart: () => {
        setState((s) => ({ ...s, open: true }));
        track("app.cart.open");
      },
      closeCart: () => {
        setState((s) => ({ ...s, open: false }));
        track("app.cart.close");
      },
      toggleCart: () => {
        setState((s) => {
          const open = !s.open;
          if (open) track("app.cart.open"); else track("app.cart.close");
          return { ...s, open };
        });
      },
      addItem: (item: CartItem) => {
        setState((s) => ({ ...s, items: [...s.items, item] }));
        track("app.cart.add_item", { slug: item.slug, price: item.price });
      },
      removeItem: (slug: string) => {
        setState((s) => ({ ...s, items: s.items.filter((i) => i.slug !== slug) }));
      },
    }),
    [state]
  );

  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}
