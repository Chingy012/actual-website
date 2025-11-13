import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help | Aether Motion",
  description: "Help and support for Aether Motion.",
};

export default function HelpPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-semibold">Help Center</h1>
      <p className="mt-3 text-zinc-600">Find answers to common questions about orders, shipping, and returns.</p>
    </main>
  );
}
