import Link from "next/link";
import Image from "next/image";
import type products from "@/content/products.json";

type Product = (typeof products)[number];

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-zinc-100 bg-white/80 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
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
