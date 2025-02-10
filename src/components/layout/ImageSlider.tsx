"use client";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";

import React from "react";

function ImageSlider({
  data,
}: {
  data: {
    before: string;
    after: string;
  };
}) {
  return (
    <ImgComparisonSlider className="focus:outline-none outline-none hover:outline-none border-[8px] border-primary/10 rounded-3xl overflow-hidden  bg-white ">
      <Image
        alt=""
        width={800}
        height={600}
        slot="first"
        src={data.before}
        className="h-96 w-full object-cover bg-primary/10"
      />
      <Image
        alt=""
        width={800}
        height={600}
        slot="second"
        src={data.after}
        className="h-96 w-full object-cover bg-primary/10"
      />
    </ImgComparisonSlider>
  );
}

export default ImageSlider;
