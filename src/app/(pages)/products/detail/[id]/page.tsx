import React from "react";
import { getProductsA } from "@/app/actions/product";
export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const isDetail = true;

  const product = await getProductsA(params.id, isDetail);

  console.log(product);

  if (!product.data)
    return (
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8">
        No product
      </div>
    );

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8">
      Product details
    </div>
  );
}
