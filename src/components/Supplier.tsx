"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imgReplace } from "@/lib/imgReplace";

export default function Supplier({ supplier }: { supplier: any }) {
  return (
    <div className="rounded border">
      <Link href={`/products/${supplier.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 flex flex-col">
          <Image
            src={imgReplace(supplier.media)}
            alt={supplier.name}
            width={160}
            height={100}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          <h2 className="text-foreground p-2">{supplier.name}</h2>
        </div>
      </Link>
    </div>
  );
}
