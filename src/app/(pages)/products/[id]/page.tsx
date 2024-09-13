import React from "react";
import { getProductsA } from "@/app/actions/product";
import ProductCard from "@/components/ProductCard";

export default async function products({ params }: { params: { id: string } }) {
  const isDetail = false;
  const products = await getProductsA(params.id, isDetail);

  if (!products.data)
    return (
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8">
        No products
      </div>
    );

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8">
      <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {products.data.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
