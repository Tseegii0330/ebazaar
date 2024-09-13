"use client";

import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Tradeshops(tradeshop: any) {
  const { tradeshops } = tradeshop;

  if (tradeshops) {
    Cookies.set("tradeshopId", tradeshops.id);
    Cookies.set("lang", tradeshops.latitude);
    Cookies.set("long", tradeshops.longitude);
    Cookies.set("bussiness_type_id", tradeshops.business_type_id);
  }

  return (
    <div className="flex items-center justify-center">
      <Link
        href={`/suppliers/${tradeshops.id}`}
        className="flex flex-col items-center"
      >
        <h2 className="text-foreground text-xl">{tradeshops.name}</h2>
        <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-stone-100">
          <svg
            className="h-full w-full text-stone-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
        <p>{tradeshops.phone}</p>
      </Link>
    </div>
  );
}
