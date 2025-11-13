"use client";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { state, closeCart, removeItem } = useCart();
  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <aside
      aria-label="Shopping cart"
      className={`fixed inset-y-0 right-0 z-50 w-80 transform bg-white shadow-xl transition-transform duration-200 ${state.open ? "translate-x-0" : "translate-x-full"}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Your bag</h2>
        <button onClick={closeCart} aria-label="Close cart" className="rounded p-2 hover:bg-zinc-100">✕</button>
      </div>
      <div className="max-h-[60dvh] overflow-auto p-4">
        {state.items.length === 0 ? (
          <p className="text-sm text-zinc-500">Your bag is empty.</p>
        ) : (
          <ul className="space-y-3">
            {state.items.map((i) => (
              <li key={i.slug} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{i.title}</p>
                  <p className="text-xs text-zinc-500">{i.currency} {i.price.toFixed(2)} {i.size ? `· ${i.size}` : ""}</p>
                </div>
                <button className="text-sm text-zinc-600 hover:underline" onClick={() => removeItem(i.slug)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600">Subtotal</span>
          <span className="font-medium">{state.items[0]?.currency ?? "ZAR"} {total.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full rounded-full bg-black py-3 text-white hover:bg-zinc-800">Checkout (stub)</button>
      </div>
    </aside>
  );
}
