import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesItem from "@/components/layout/ServicesItem";
import VideoSlider from "@/components/layout/VideoSlider";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader title="Services" path="Services" />
      <div className="container py-20">
        <div className="grid grid-cols-3 gap-8">
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
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
