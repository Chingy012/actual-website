import type { Metadata } from "next";
import { CollectionsClient } from "@/components/CollectionsClient";
import type { Filters } from "@/components/FilterBar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Collection | Aether Motion",
};

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const initial: Filters = { category: params.collection, sort: "featured" };
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold capitalize">{params.collection}</h1>
      <Suspense>
        <CollectionsClient initialFilters={initial} />
      </Suspense>
    </main>
  );
}
