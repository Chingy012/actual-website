import type { Metadata } from "next";
import { flagEnabled } from "@/lib/flags";

export const metadata: Metadata = {
  title: "World of Aether",
  description: "Explore the interactive map of Aether.",
};

export default function WorldPage() {
  const enabled = flagEnabled("world_map_enabled");
  return (
    <main className="min-h-dvh">
      <h1 className="sr-only">World of Aether</h1>
      {enabled ? (
        <div className="grid place-items-center h-[70dvh]">
          <div className="text-center">
            <p className="text-2xl font-semibold">World map placeholder</p>
            <p className="text-muted-foreground mt-2">Zoom/pan and hotspots coming soon.</p>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center h-[70dvh]">
          <p className="text-muted-foreground">World map is disabled by feature flag.</p>
        </div>
      )}
    </main>
  );
}
