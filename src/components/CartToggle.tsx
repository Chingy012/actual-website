"use client";
import { useCart } from "@/lib/cart";

export function CartToggle() {
  const { toggleCart } = useCart();
  return (
    <button
      type="button"
      aria-label="Open cart"
      onClick={toggleCart}
      className="rounded-full border px-3 py-1 text-sm hover:bg-zinc-100"
    >
      Bag
    </button>
  );
}
