import NavBar from "@/components/layout/NavBar";
import { PhoneCall } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import ContactForm from "./ContacForm";
import PageHeader from "@/components/layout/PageHeader";
import ClinicView from "@/components/layout/ClinicView";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import BookNow from "@/components/layout/BookNow";
import Footer from "@/components/layout/Footer";

function page() {
  return (
    <div>
      <PageHeader path="Contact Us" title="Contact Us" />
      <div className="container mt-32">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="">
            <p className=" text-5xl text-primary/70 mt-3 lg:text-left text-center">
              Get in
              <span className="text-primary font-semibold"> touch </span>
              with us
            </p>
            <p className="mt-4 lg:text-left text-center">
              We’d love to hear from you! Whether you have questions, need
              support, or want to discuss a project, feel free to reach out.
            </p>
            <div className=" border-primary/10 bg-primary/5 px-2 py-7 mt-10 rounded-3xl grid md:grid-cols-2 md:gap-0 gap-10 backdrop-blur-xl">
              <div className="text-center flex flex-col gap-4 items-center border-r border-primary/10">
                <PhoneCall className="text-primary text-center" size={40} />
                <p className="text-xl font-bold">Phone Number </p>
                <p className="text-primary/80">+91-9315509430</p>
              </div>
              <div className="text-center flex flex-col gap-4 items-center ">
                <MdMarkEmailRead
                  className="text-primary text-center"
                  size={40}
                />
                <p className="text-xl font-bold">Email</p>
                <p className="text-primary/80">info@idealedesigns.com</p>
              </div>
            </div>
            <div className=" border-primary/10 bg-primary/5 px-7 py-7 mt-7 gap-8 rounded-3xl backdrop-blur-xl flex justify-start items-center relative">
              <div className="">
                <CiLocationOn size={60} className="text-primary text-center" />
              </div>
              <div className="">
                <p className="text-xl font-bold">Address</p>
                <p className="text-primary/80 mt-2">Gurugram, Haryana, India</p>
              </div>
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="py-10">
        <ClinicView />
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
