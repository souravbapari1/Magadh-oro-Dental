"use client";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";

import React from "react";

function ImageSlider() {
  return (
    <ImgComparisonSlider className="focus:outline-none outline-none hover:outline-none  overflow-hidden  bg-white ">
      <Image
        alt=""
        width={800}
        height={600}
        slot="first"
        src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
        className="h-96 w-full object-cover bg-primary/10"
      />
      <Image
        alt=""
        width={800}
        height={600}
        slot="second"
        src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
        className="h-96 w-full object-cover bg-primary/10"
      />
    </ImgComparisonSlider>
  );
}

export default ImageSlider;
