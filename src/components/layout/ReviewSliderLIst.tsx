"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";
import Rating from "./Rating";
import { TestimonialData } from "./interface/TestimonialsData";
import { strApi } from "@/graphql/client";
function ReviewSliderLIst({ data }: { data: TestimonialData["testimonials"] }) {
  const isMobile = useIsMobile();
  return (
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
      {data.map((item, index) => {
        return (
          <SwiperSlide key={index + "tet" + item.documentId}>
            <ReviewsSlideItem data={item} />
          </SwiperSlide>
        );
      })}
      <SlideNextButton />
    </Swiper>
  );
}

export default ReviewSliderLIst;

export function ReviewsSlideItem({
  data,
}: {
  data: TestimonialData["testimonials"][number];
}) {
  return (
    <div className="w-full h-56 p-5 rounded-3xl bg-white border border-primary/10 flex-col flex justify-between items-center">
      <div className="">
        <div className="flex justify-start items-center gap-4">
          <Image
            alt="review"
            src={strApi + data.profile_image.url}
            width={1000}
            height={1000}
            className="object-cover  rounded-full shadow-lg h-10 w-10"
          />
          <div className="">
            <p className="font-bold text-gray-800">{data.name} </p>
            <p className="text-xs text-gray-500">{data.review_date}</p>
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-3 line-clamp-6">
          {data.review_content}
        </p>
      </div>
      <div className="flex justify-between items-center mt-2 w-full">
        <Rating rating={data.rating} />
        <Image
          alt="review"
          src={
            data.platform_name === "Practo"
              ? reviewImage.practo
              : reviewImage.google
          }
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

const reviewImage = {
  practo: "/practo.png",
  google: "/google.webp",
};
