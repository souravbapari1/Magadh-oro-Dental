import React from "react";
import DoctorCard from "../about/DoctorCard";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import HomeFaqs from "@/components/layout/HomeFaqs";
import VideoSlider from "@/components/layout/VideoSlider";
import ClinicView from "@/components/layout/ClinicView";
import BookNow from "@/components/layout/BookNow";
import Footer from "@/components/layout/Footer";

function page() {
  return (
    <div className="">
      <PageHeader title="Meet Doctors" path="Doctors" />
      <div className="container">
        <div className="grid grid-cols-3 gap-6 py-16">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
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
