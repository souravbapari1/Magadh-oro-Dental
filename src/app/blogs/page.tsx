import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import { Metadata } from "next";
import BlogsList from "./BlogsList";

export const metadata: Metadata = {
  title: "Blogs - Magadh oro Dental",
};

function page() {
  return (
    <div>
      <PageHeader title="Latest Blogs" path="Blogs" />
      <BlogsList />
      <HomeFaqs />
      <ReviewsSlide />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
