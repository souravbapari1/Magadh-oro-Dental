import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import { VideoItem } from "@/components/layout/VideoSlider";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watch Videos - Magadh oro Dental",
};

function watch() {
  return (
    <div>
      <PageHeader title="Watch Videos" path="Watch" />

      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <VideoItem
            video="https://www.youtube.com/embed/eBDU0E4fH40?si=TNY4d5Fni0csib1g"
            active={true}
          />
          <VideoItem
            video="https://www.youtube.com/embed/eBDU0E4fH40?si=TNY4d5Fni0csib1g"
            active={true}
          />
          <VideoItem
            video="https://www.youtube.com/embed/eBDU0E4fH40?si=TNY4d5Fni0csib1g"
            active={true}
          />
          <VideoItem
            video="https://www.youtube.com/embed/eBDU0E4fH40?si=TNY4d5Fni0csib1g"
            active={true}
          />
          <VideoItem
            video="https://www.youtube.com/embed/eBDU0E4fH40?si=TNY4d5Fni0csib1g"
            active={true}
          />
          <VideoItem
            video="https://www.youtube.com/embed/eBDU0E4fH40?si=TNY4d5Fni0csib1g"
            active={true}
          />
        </div>
        <div className="flex justify-center items-center mt-6">
          <Button className="mx-auto rounded-full shadow-none px-8 py-5 mt-10 text-center">
            Watch More Videos
          </Button>
        </div>
      </div>
      {/* <HomeFaqs /> */}
      <ReviewsSlide />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default watch;
