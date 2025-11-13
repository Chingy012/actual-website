import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/content/products.json";
import Image from "next/image";
import { track } from "@/lib/telemetry";
import { PDPClient } from "@/components/PDPClient";
import { ProductCard } from "@/components/ProductCard";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product | Aether Motion" };
  return {
    title: `${product.title} | Aether Motion`,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.description,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  track("app.product.view", { slug: product.slug });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  } as const;

  return (
    <main className="mx-auto max-w-4xl p-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100">
          <Image src={product.image} alt="" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="mt-2 text-zinc-600">{product.description}</p>
          <p className="mt-4 text-xl font-medium">{product.currency} {product.price.toFixed(2)}</p>
          <PDPClient product={{ id: product.id, slug: product.slug, title: product.title, price: product.price, currency: product.currency, sizes: product.sizes }} />
          <ul className="mt-6 list-disc pl-6 text-sm text-zinc-600">
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-xl font-semibold">You may also like</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {products
            .filter((p) => p.slug !== product.slug && (p.category === product.category || p.use === product.use))
            .slice(0, 3)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </main>
  );
}
