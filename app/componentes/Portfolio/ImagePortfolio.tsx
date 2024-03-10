import React from "react";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function ImagePortfolio() {
  return (
    <Image
      isZoomed
      as={NextImage}
      width={300}
      height={200}
      src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      alt="NextUI hero Image"
    />
  );
}
