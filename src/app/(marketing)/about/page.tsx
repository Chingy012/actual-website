import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aether Motion",
  description: "About Aether Motion retail experience.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-semibold">About Aether Motion</h1>
      <p className="mt-3 text-zinc-600">High-performance apparel built for movement. This is a demo retail site scaffolded with Next.js, TypeScript, and Tailwind v4.</p>
    </main>
  );
}
