"use client";
import React, { useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { VideosData } from "./interface/videos";

function VideoSlider({ data }: { data: VideosData }) {
  const videos = data.videos.map(
    (video) => `https://www.youtube.com/embed/${video.youtube_video_id}`
  );

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-primary/5">
      <div className="container md:p-20 py-10">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 8500,
            disableOnInteraction: false,
          }}
          navigation={true}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <VideoItem video={video} active={activeIndex === index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoSlider;

export function VideoItem({
  video,
  active,
}: {
  video: string;
  active: boolean;
}) {
  return (
    <iframe
      src={active ? video : ""}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="aspect-video w-full mx-auto max-w-[750px] rounded-3xl shadow-xl shadow-gray-600/5 border-[10px] border-primary bg-black"
    />
  );
}
