import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import { Metadata } from "next";
import BlogsList from "./BlogsList";
import { TabTitle } from "../constant";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { BlogMetaData } from "./blogs";

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<BlogMetaData>({
    query: gql`
      query MataData {
        mataData {
          BlogMetaData {
            title
            description
          }
        }
      }
    `,
  });

  return {
    title: metadataResponse.data.mataData.BlogMetaData.title + TabTitle,

    description: metadataResponse.data.mataData.BlogMetaData.description,
  };
};

function page() {
  return (
    <div>
      <PageHeader title="Latest Blogs" path="Blogs" />
      <BlogsList />
      {/* <HomeFaqs /> */}
      <ReviewsSlide />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
