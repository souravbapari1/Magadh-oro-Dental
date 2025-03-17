import AboutUs from "@/components/layout/AboutUs";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import VideoSlider from "@/components/layout/VideoSlider";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import DoctorCard from "./DoctorCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/layout/VideoSection";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import { AboutUsData, AboutUsMetaData } from "./aboutus";
import DoctorsSection from "@/components/layout/DoctorsSection";
import { Metadata } from "next";
import Head from "next/head";
export const revalidate = 0;
const About_US_query = gql`
  query AboutUs {
    aboutUs {
      Content
      Images {
        url
      }
    }
  }
`;
const ABOUT_US_META_QUERY = gql`
  query MataData {
    mataData {
      AboutUsMetaData {
        title
        description
      }
    }
  }
`;

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<AboutUsMetaData>({
    query: ABOUT_US_META_QUERY,
  });

  return {
    title: metadataResponse.data.mataData.AboutUsMetaData.title,

    description: metadataResponse.data.mataData.AboutUsMetaData.description,
  };
};

async function page() {
  const { data } = await client.query<AboutUsData>({
    query: About_US_query,
  });
  const images = data.aboutUs.Images.map((image) => strApi + image.url);

  return (
    <div>
      <PageHeader title="About Us" path="About Us" />
      <div
        className="container pt-20 md:text-lg  text-justify content"
        dangerouslySetInnerHTML={{
          __html: data.aboutUs.Content,
        }}
      />
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5  my-10">
          <div className="col-span-2 row-span-2">
            <Image
              src={
                images[0] ||
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
              }
              width={1000}
              height={1000}
              alt="Big Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <Image
              src={
                images[1] ||
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
              }
              width={500}
              height={1000}
              alt="Medium Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src={
                images[2] ||
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
              }
              width={500}
              height={500}
              alt="Small Image 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src={
                images[3] ||
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
              }
              width={500}
              height={500}
              alt="Small Image 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1 md:block hidden">
            <Image
              src={
                images[4] ||
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"
              }
              width={500}
              height={500}
              alt="Small Image 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <DoctorsSection />
      {/* <HomeFaqs /> */}
      <WhyChooseUs />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
