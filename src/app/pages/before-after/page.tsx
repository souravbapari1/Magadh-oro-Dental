import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ImageSlider from "@/components/layout/ImageSlider";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import React from "react";

function page() {
  return (
    <div className="">
      <PageHeader title="Before After Compare" path="Pages / Before After" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gal-5 gap-5">
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
        </div>
      </div>
      <HomeFaqs />
      <ReviewsSlide />
      <VideoSlider />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
