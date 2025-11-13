import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Product | Aether Motion",
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  if (!slug) return notFound();
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-semibold">Product: {slug}</h1>
      <p className="text-muted-foreground mt-2">Details, sizes, and add to bag coming soon.</p>
    </main>
  );
}
