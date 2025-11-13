"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { track } from "@/lib/telemetry";

export function PDPClient({
  product,
}: {
  product: {
    id: string;
    slug: string;
    title: string;
    price: number;
    currency: string;
    sizes: string[];
  };
}) {
  const { addItem, openCart } = useCart();
  const [size, setSize] = useState<string | undefined>(undefined);

  function addToBag() {
    track("app.product.add_to_bag_click", { slug: product.slug, size });
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      currency: product.currency,
      size,
      qty: 1,
    });
    openCart();
  }

  return (
    <div className="mt-6">
      <label className="mb-2 block text-sm">Size</label>
      <div className="flex flex-wrap gap-2">
        {product.sizes.map((s) => (
          <button
            key={s}
            className={`rounded-md border px-3 py-2 text-sm ${size === s ? "bg-black text-white" : ""}`}
            type="button"
            onClick={() => setSize(s)}
            aria-pressed={size === s}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={addToBag}
          disabled={!size}
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}
