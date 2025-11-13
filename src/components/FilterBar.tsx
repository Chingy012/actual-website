"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  category: z.string().optional(),
  use: z.string().optional(),
  gender: z.string().optional(),
  intensity: z.string().optional(),
  sort: z.enum(["featured", "newest", "price_asc", "price_desc"]).optional(),
});

export type Filters = z.infer<typeof schema>;

export function FilterBar({ defaultValues, onChange }: { defaultValues?: Partial<Filters>; onChange: (f: Filters) => void }) {
  const {
    register,
    watch,
  } = useForm<Filters>({ resolver: zodResolver(schema), defaultValues: { sort: "featured", ...defaultValues } });

  const values = watch();

  // Notify parent on any change
  React.useEffect(() => {
    onChange(schema.parse(values));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.category, values.use, values.gender, values.intensity, values.sort]);

  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="flex flex-col">
        <label className="text-sm">Category</label>
        <select className="rounded border p-2" {...register("category")}>
          <option value="">All</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Use</label>
        <select className="rounded border p-2" {...register("use")}>
          <option value="">All</option>
          <option value="running">Running</option>
          <option value="training">Training</option>
          <option value="yoga">Yoga</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Gender</label>
        <select className="rounded border p-2" {...register("gender")}>
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Intensity</label>
        <select className="rounded border p-2" {...register("intensity")}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm">Sort</label>
        <select className="rounded border p-2" {...register("sort")}>
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
