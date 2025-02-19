import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesListCard from "@/components/layout/ServicesListCard";
import VideoSection from "@/components/layout/VideoSection";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import Head from "next/head";
import { PriceMetaData } from "./priceMeta";
import { TabTitle } from "../constant";

const SERVICES_LIST_CARD_QUERY = gql`
  query Pricing {
    pricing {
      content
    }
  }
`;
const META_DATA_PRICE = gql`
  query PricingMetaData {
    mataData {
      PricingMetaData {
        title
        description
      }
    }
  }
`;

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<PriceMetaData>({
    query: META_DATA_PRICE,
  });

  return {
    title: metadataResponse?.data?.mataData.PricingMetaData.title + TabTitle,

    description: metadataResponse?.data?.mataData.PricingMetaData.description,
  };
};

async function page() {
  const { data } = await client.query<{
    pricing: {
      content: string;
    };
  }>({
    query: SERVICES_LIST_CARD_QUERY,
  });

  return (
    <div>
      <PageHeader title="Dental Treatment Price List" path="Pricing List" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-3 lg:gap-20 gap-10">
          <div
            className="content lg:col-span-2"
            dangerouslySetInnerHTML={{ __html: data.pricing.content }}
          />
          <div className="">
            <div className="lg:sticky top-24">
              <ServicesListCard />
            </div>
          </div>
        </div>
      </div>
      {/* <HomeFaqs /> */}
      <ReviewsSlide />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
    </>

  );
}

export default page;
