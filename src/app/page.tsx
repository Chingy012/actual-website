"use client";
import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/telemetry";
import products from "@/content/products.json";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-20">
      {/* Hero */}
      <section className="grid gap-10 sm:grid-cols-[1.3fr,1fr] sm:items-center">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Everyday essentials, elevated.
          </h1>
          <p className="mt-4 max-w-prose text-lg text-zinc-600">
            A clean, modern wardrobe of hoodies, denim, outerwear, dresses, sneakers, and accessories. Soft palettes, sharp details,
            and all‑day comfort.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/collections"
              className="rounded-full px-6 py-3 text-white transition-colors"
              style={{ backgroundColor: "var(--color-brand)" }}
              onClick={() => track("app.home.hero_cta", { to: "/collections" })}
            >
              Shop Collections
            </Link>
            <Link href="/world" className="rounded-full border px-6 py-3 text-sm sm:text-base transition-colors hover:bg-zinc-100">
              World of Aether
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#f9f3e8] via-[#fdfbf7] to-[#f3f4f6]">
          <Image
            src="/globe.svg"
            alt="Minimalist fashion layout"
            fill
            className="object-contain opacity-70 mix-blend-multiply"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Promos */}
      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        <PromoCard title="Hoodies & Sweatshirts" href="/collections?category=hoodies" image="/window.svg" />
        <PromoCard title="Denim & Trousers" href="/collections?category=bottoms" image="/file.svg" />
        <PromoCard title="Sneakers & Accessories" href="/collections?category=footwear" image="/globe.svg" />
      </section>

      {/* Featured products (centered) */}
      <section className="mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <p className="mt-2 text-zinc-600">A curated edit of hoodies, denim, dresses, sneakers, and more.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Icon grid */}
      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        <Feature icon="🚚" title="Fast Shipping" desc="Tracked delivery on every order." />
        <Feature icon="↩️" title="Easy Returns" desc="Free returns within 30 days." />
        <Feature icon="✨" title="Quality Guaranteed" desc="Thoughtful fabrics, timeless fits." />
      </section>
    </main>
  );
}

function PromoCard({ title, href, image }: { title: string; href: string; image: string }) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-xl border bg-white">
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-5" />
      <div className="relative aspect-[16/9] w-full bg-zinc-50">
        <Image src={image} alt="" fill className="object-contain" sizes="(max-width: 1024px) 33vw, 33vw" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm text-zinc-600">Explore now →</p>
      </div>
    </Link>
  );
}

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-6">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-lg font-medium">{title}</h3>
      <p className="mt-1 text-sm text-zinc-600">{desc}</p>
    </div>
  );
}
