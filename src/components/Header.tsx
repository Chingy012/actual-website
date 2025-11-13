"use client";
import Link from "next/link";
import { track } from "@/lib/telemetry";

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold" onClick={() => track("app.nav.click", { to: "/" })}>
          Aether Motion
        </Link>
        <nav className="flex items-center gap-4 text-sm">
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
        </nav>
      </div>
    </header>
  );
}
