import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Collection | Aether Motion",
};

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const { collection } = params;
  if (!collection) return notFound();
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold">Collection: {collection}</h1>
      <p className="text-muted-foreground mt-2">Scoped PLP coming soon.</p>
    </main>
  );
}
