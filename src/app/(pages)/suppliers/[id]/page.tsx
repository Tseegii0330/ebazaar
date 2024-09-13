import React from "react";
import { getSuppliersA } from "@/app/actions/supplier";
import Supplier from "@/components/Supplier";

export default async function suppliers({
  params,
}: {
  params: { id: string };
}) {
  const suppliers = await getSuppliersA(params.id);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {suppliers.data.map((supplier: any) => (
          <Supplier supplier={supplier} key={supplier.id} />
        ))}
      </div>
    </div>
  );
}
