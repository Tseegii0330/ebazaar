"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imgReplace } from "@/lib/imgReplace";
export default function ProductCard({ product }: { product: any }) {
  return (
    <div>
      <div className="relative">
        <Link href={`/products/details/${product.supplier_id}`}>
          <div className="relative h-72 w-full overflow-hidden rounded-lg">
            <Image
              src={imgReplace(product.image[0])}
              width={200}
              height={400}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-sm font-medium text-gray-900">
              {product.name}
            </h3>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <p className="relative text-lg font-semibold text-white">
              {product.price}₮
            </p>
          </div>
        </Link>
      </div>
      <div className="mt-6">
        <a
          href={product.slug}
          className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Add to bag<span className="sr-only">, {product.name}</span>
        </a>
      </div>
    </div>
  );
}
