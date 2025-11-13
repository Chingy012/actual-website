import { NextRequest, NextResponse } from "next/server";
import products from "@/content/products.json";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  let list = [...products];

  const category = searchParams.get("category");
  const use = searchParams.get("use");
  const gender = searchParams.get("gender");
  const intensity = searchParams.get("intensity");
  const sort = searchParams.get("sort"); // featured|newest|price_asc|price_desc

  if (category) list = list.filter((p) => p.category === category);
  if (use) list = list.filter((p) => p.use === use);
  if (gender) list = list.filter((p) => p.gender === gender);
  if (intensity) list = list.filter((p) => p.intensity === intensity);

  switch (sort) {
    case "price_asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      // With static data, keep as-is or reverse to simulate
      list = list.slice().reverse();
      break;
    default:
      break; // featured default ordering
  }

  return NextResponse.json({ items: list });
}
