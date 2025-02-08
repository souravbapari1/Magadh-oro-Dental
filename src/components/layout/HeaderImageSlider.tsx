"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { HomeHeader } from "./interface/HomeHeader";
import Image from "next/image";
import { strApi } from "@/graphql/client";
import "swiper/css";

function HeaderImageSlider({ images }: { images: HomeHeader["images"] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, // Change slide every 3 seconds
        disableOnInteraction: false,
      }}
      className="lg:w-[950px] w-full lg:h-full md:h-[600px] sm:h-96 h-60 lg:p-0 p-4 lg:mt-0 mt-10 relative"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index + "image-header"} className="w-full h-full">
          <Image
            alt="logo"
            src={`${strApi}${image.url}`}
            width={1000}
            height={1000}
            className="object-cover w-full h-full md:rounded-none rounded-3xl md:shadow-none shadow-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeaderImageSlider;
