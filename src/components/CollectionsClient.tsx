"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FilterBar, type Filters } from "@/components/FilterBar";
import { ProductCard } from "@/components/ProductCard";
import type products from "@/content/products.json";
import { track } from "@/lib/telemetry";

type Product = (typeof products)[number];

function buildQueryString(filters: Filters) {
  const params = new URLSearchParams();
  if (filters.category) params.set("category", filters.category);
  if (filters.use) params.set("use", filters.use);
  if (filters.gender) params.set("gender", filters.gender);
  if (filters.intensity) params.set("intensity", filters.intensity);
  if (filters.sort) params.set("sort", filters.sort);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

export function CollectionsClient({ initialFilters }: { initialFilters: Filters }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const { data, isPending } = useQuery<{ items: Product[] }>({
    queryKey: ["products", filters],
    queryFn: async () => {
      const res = await fetch(`/api/products${buildQueryString(filters)}`);
      if (!res.ok) throw new Error("Failed to load products");
      return (await res.json()) as { items: Product[] };
    },
  });

  return (
    <>
      <div className="mt-4">
        <FilterBar
          defaultValues={initialFilters}
          onChange={(f) => {
            setFilters(f);
            track("app.collections.filter_change", f as Record<string, unknown>);
          }}
        />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {isPending && Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-lg bg-zinc-100" />
        ))}
        {data?.items?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
