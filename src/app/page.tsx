import AboutUs from "@/components/layout/AboutUs";
import CallSection from "@/components/layout/CallSection";
import Header from "@/components/layout/Header";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesItem from "@/components/layout/ServicesItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

import HomeFaqs from "@/components/layout/HomeFaqs";
import VideoSlider from "@/components/layout/VideoSlider";
import ClinicCard from "@/components/layout/ClinicCard";
import Footer from "@/components/layout/Footer";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";

function page() {
  return (
    <div className="relative">
      <Header />
      <CallSection />
      <AboutUs />
      <div className="bg-primary/5 py-16">
        <div className="container">
          <div className="flex  justify-center items-center gap-2 opacity-80 ">
            <Image
              src="/teeth.svg"
              width={1000}
              height={1000}
              alt="About Us"
              className="object-contain w-4 h-4 "
            />
            <p className="text-primary font-semibold">Our Services</p>
          </div>

          <h1 className="text-gray-800 text-3xl font-bold mt-2 text-center">
            Explore the solutions we provide
          </h1>
          <p className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis
            hic exercitationem esse totam ipsa tempore vero, nihil culpa
            sapiente ea amet, error cum odit dolore, nobis quidem pariatur
            consectetur.
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
            <ServicesItem />
            <ServicesItem />
            <ServicesItem />
            <ServicesItem />
            <ServicesItem />
            <ServicesItem />
          </div>
          <div className="w-full flex justify-center items-center">
            <Button
              className="shadow-none px-8 py-5 mt-10 mx-auto rounded-full"
              size="sm"
            >
              Explore Our All Services <IoArrowForward />
            </Button>
          </div>
        </div>
      </div>
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
      <VideoSlider />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
