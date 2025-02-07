import BlogCard from "@/components/layout/BlogCard";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader title="Latest Blogs" path="Blogs" />
      <div className="container py-20">
        <div className="grid grid-cols-3 gap-10">
          <BlogCard
            title="The Future of Dentistry"
            description="Explore the latest advancements in dental technology and treatment."
            image="https://www.patnadental.com/images/gallery/16.jpg"
            link="/blog/future-of-dentistry"
          />
          <BlogCard
            title="The Future of Dentistry"
            description="Explore the latest advancements in dental technology and treatment."
            image="https://www.patnadental.com/images/gallery/16.jpg"
            link="/blog/future-of-dentistry"
          />

          <BlogCard
            title="The Future of Dentistry"
            description="Explore the latest advancements in dental technology and treatment. advancements in dental technology advancements in dental technology"
            image="https://www.patnadental.com/images/gallery/16.jpg"
            link="/blog/future-of-dentistry"
          />
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
