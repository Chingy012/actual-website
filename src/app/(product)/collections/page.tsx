import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Aether Motion",
  description: "Browse collections with filters and sorting.",
};

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-semibold">Collections</h1>
      <p className="text-muted-foreground mt-2">Filter and sort coming soon.</p>
    </main>
  );
}
