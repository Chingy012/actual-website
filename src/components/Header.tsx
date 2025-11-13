"use client";
import Link from "next/link";
import { track } from "@/lib/telemetry";
import { useEffect, useRef, useState } from "react";
import { CartToggle } from "@/components/CartToggle";

type Props = { cartEnabled?: boolean };

export default function Header({ cartEnabled }: Props) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onDocKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onDocKey);
    return () => document.removeEventListener("keydown", onDocKey);
  }, []);
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold" onClick={() => track("app.nav.click", { to: "/" })}>
          Aether Motion
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") setOpen(true);
                if (e.key === "Escape") setOpen(false);
              }}
              className="rounded px-2 py-1 hover:bg-zinc-100"
            >
              Shop
            </button>
            {open && (
              <div
                role="menu"
                tabIndex={-1}
                className="absolute left-0 mt-2 w-64 rounded-lg border bg-white p-4 shadow-lg"
                onMouseLeave={() => setOpen(false)}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-xs font-medium text-zinc-500">By Category</p>
                    <ul className="space-y-1">
                      <li><Link href="/collections/tops">Tops</Link></li>
                      <li><Link href="/collections/bottoms">Bottoms</Link></li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium text-zinc-500">By Use</p>
                    <ul className="space-y-1">
                      <li><Link href="/collections?use=running">Running</Link></li>
                      <li><Link href="/collections?use=training">Training</Link></li>
                      <li><Link href="/collections?use=yoga">Yoga</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/collections" onClick={() => track("app.nav.click", { to: "/collections" })}>
            Collections
          </Link>
          <Link href="/world" onClick={() => track("app.nav.click", { to: "/world" })}>
            World
          </Link>
          <Link href="/about" onClick={() => track("app.nav.click", { to: "/about" })}>
            About
          </Link>
          <Link href="/help" onClick={() => track("app.nav.click", { to: "/help" })}>
            Help
          </Link>
          {cartEnabled && <CartToggle />}
        </nav>
      </div>
    </header>
  );
}
