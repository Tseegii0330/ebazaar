"use client";

import React from "react";
import Image from "next/image";

export default function ImgFallback({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  console.log(src, "src");

  return (
    <Image
      src={src}
      alt={alt}
      className="h-full w-full object-cover object-center"
    />
  );
}
