import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader title="Gallery" path="Pages / Gallery" />
      <div className="grid grid-cols-2 gap-6 container py-20">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Image
              src="https://www.praktischarzt.de/wp-content/uploads/2023/03/Becoming-a-medical-doctor-or-physician-in-Germany.jpg"
              width={1000}
              height={1000}
              alt="About Us"
              className="object-cover w-full aspect-video md:block hidden "
            />
          ))}
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
