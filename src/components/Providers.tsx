"use client";
import React from "react";
import { ReactQueryProvider } from "@/lib/queryClient";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/CartDrawer";

export function Providers({ children, cartEnabled }: { children: React.ReactNode; cartEnabled: boolean }) {
  if (!cartEnabled) {
    return <ReactQueryProvider>{children}</ReactQueryProvider>;
  }
  return (
    <CartProvider>
      <ReactQueryProvider>
        {children}
        <CartDrawer />
      </ReactQueryProvider>
    </CartProvider>
  );
}
