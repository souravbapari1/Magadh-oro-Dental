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
import Head from "next/head";
import client from "@/graphql/client";
import { HomeMetaDataType } from "./HomeMeta";
import { gql } from "@apollo/client";
import { Metadata } from "next";
const META_DATA_QUERY = gql`
  query MataData {
    mataData {
      HomePageMetaData {
        title
        description
      }
    }
  }
  `;
export const revalidate = 0;
export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<HomeMetaDataType>({
    query: META_DATA_QUERY,
  });

  return {
    title: metadataResponse.data.mataData.HomePageMetaData.title,

    description: metadataResponse.data.mataData.HomePageMetaData.description,
  };
};
async function page() {
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
