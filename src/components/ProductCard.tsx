import Link from "next/link";
import Image from "next/image";
import type products from "@/content/products.json";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-zinc-100">
        <Image src={product.image} alt="" fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-contain" />
      </div>
      <div className="mt-3">
        <Link href={`/product/${product.slug}`} className="font-medium">
          {product.title}
        </Link>
        <p className="text-sm text-zinc-500">{product.currency} {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
