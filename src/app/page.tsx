import AboutUs from "@/components/layout/AboutUs";
import CallSection from "@/components/layout/CallSection";
import Header from "@/components/layout/Header";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import Image from "next/image";

import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ServicesView from "@/components/layout/ServicesView";
import VideoSection from "@/components/layout/VideoSection";

function page() {
  return (
    <div className="relative">
      <Header />
      <CallSection />
      <AboutUs />
      <ServicesView />
      <ReviewsSlide />
      <HomeFaqs />
      <div className="container py-16">
        <Image
          src="/why.svg"
          width={1000}
          height={1000}
          alt="About Us"
          className="object-contain w-full h-auto md:block hidden "
        />
        <Image
          src="/why-mob.svg"
          width={1000}
          height={1000}
          alt="About Us"
          className="object-contain w-full h-auto md:hidden block "
        />
      </div>
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
