import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import { Clock, Clock1, PhoneCall } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import ContactForm from "./ContacForm";
import { Metadata } from "next";
import { gql } from "@apollo/client";
import client from "@/graphql/client";
import { ContactUsMetaDataType } from "./ContactType";
import { TabTitle } from "../constant";

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<ContactUsMetaDataType>({
    query: gql`
      query ContactUsMetaData {
        mataData {
          ContactUsMetaData {
            title
            description
          }
        }
      }
    `,
  });

  return {
    title: metadataResponse.data.mataData.ContactUsMetaData.title + TabTitle,

    description: metadataResponse.data.mataData.ContactUsMetaData.description,
  };
};

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
                <p className="text-primary/80">+91 9798999722</p>
              </div>
              <div className="text-center flex flex-col gap-4 items-center ">
                <MdMarkEmailRead
                  className="text-primary text-center"
                  size={40}
                />
                <p className="text-xl font-bold">Email</p>
                <p className="text-primary/80">
                  magadhorodentalpatna@gmail.com
                </p>
              </div>
            </div>
            <div className=" border-primary/10 bg-primary/5 px-7 py-7 mt-7 gap-8 rounded-3xl backdrop-blur-xl flex justify-start items-center relative">
              <div className="">
                <Clock1 size={60} className="text-primary text-center" />
              </div>
              <div className="">
                <p className="text-xl font-bold">Opening Hours</p>
                <p className="text-primary/80 mt-2">24/7 Open </p>
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
      {/* <HomeFaqs /> */}
      <ReviewsSlide />
      <VideoSection />

      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
