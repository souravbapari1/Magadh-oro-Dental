"use client";
// Import Swiper React components

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";
import Rating from "./Rating";

function ReviewsSlide() {
  const isMobile = useIsMobile();
  return (
    <div className="container mt-20 mb-20">
      <div className="mb-8">
        <div className="flex  justify-center items-center gap-2 opacity-80 mt-10">
          <Image
            src="/teeth.svg"
            width={1000}
            height={1000}
            alt="About Us"
            className="object-contain w-4 h-4 "
          />
          <p className="text-primary font-semibold">Patent Reviews</p>
        </div>

        <h1 className="text-gray-800 text-3xl font-bold mt-2 text-center">
          What are happy patients say.
        </h1>
        <p className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis hic
          exercitationem esse totam ipsa tempore vero, nihil culpa sapiente ea
          amet, error cum odit dolore, nobis quidem pariatur consectetur.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        slidesPerView={isMobile ? 1 : 3}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewsSlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsSlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsSlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsSlideItem />
        </SwiperSlide>
        <SlideNextButton />
      </Swiper>
    </div>
  );
}

export default ReviewsSlide;

export function ReviewsSlideItem() {
  return (
    <div className="w-full h-56 p-5 rounded-3xl bg-white border border-primary/10 flex-col flex justify-between items-center">
      <div className="">
        <div className="flex justify-start items-center gap-4">
          <Image
            alt="review"
            src="https://img.freepik.com/free-photo/man-talking-phone_23-2148467244.jpg"
            width={1000}
            height={1000}
            className="object-cover  rounded-full shadow-lg h-10 w-10"
          />
          <div className="">
            <p className="font-bold text-gray-800">Om Prakash </p>
            <p className="text-xs text-gray-500">2 Years Ago</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-3 line-clamp-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam at
          sequi optio excepturi, modi repellendus sint non quas minima harum et
          eius molestiae voluptatum ipsa sapiente aperiam. Beatae, harum et eius
          molestiae voluptatum ipsa sapiente aperiam. Beatae, harum et eius
          molestiae voluptatum ipsa sapiente aperiam. Beatae, consequuntur!
          Libero.
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 w-full">
        <Rating rating={4} />
        <Image
          alt="review"
          src="https://magadhorodental.com/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F96%2FPracto_Health_Logo.png&w=96&q=75"
          width={1000}
          height={1000}
          className="object-cover  rounded-full shadow-lg h-6 w-6 mt-2"
        />
      </div>
    </div>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <Button
        size="sm"
        variant="outline"
        className="text-primary border-primary/20  w-9  h-9 rounded-xl"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft />
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="text-primary border-primary/20  w-9  h-9 rounded-xl"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight />
      </Button>
    </div>
  );
}
