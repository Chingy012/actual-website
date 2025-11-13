import type { Metadata } from "next";
import { CollectionsClient } from "@/components/CollectionsClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Collections | Aether Motion",
  description: "Browse collections with filters and sorting.",
};

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold">Collections</h1>
      <Suspense>
        <CollectionsClient initialFilters={{ sort: "featured" }} />
      </Suspense>
    </main>
  );
}
