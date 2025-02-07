import BookNow from "@/components/layout/BookNow";
import ClinicCard from "@/components/layout/ClinicCard";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader title="Visit Our Clinics" path="Pages / Our Clinics" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-5">
          <ClinicCard />
          <ClinicCard />
        </div>
      </div>
      <HomeFaqs />
      <ReviewsSlide />
      <VideoSlider />

      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
