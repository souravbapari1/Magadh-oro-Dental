import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import Image from "next/image";
import { GalleryData } from "./gallery";
import AlerImage from "@/components/layout/AlertImage";
import { TabTitle } from "@/app/constant";
export const revalidate = 0;
const gallery_query = gql`
  query Images {
    gallery {
      images {
        url
        name
      }
    }
    mataData {
      GalleryMetaData {
        title
        description
      }
    }
  }
`;
export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<GalleryData>({
    query: gallery_query,
  });

  return {
    title:
      metadataResponse.data.mataData.GalleryMetaData.title + " " + TabTitle,
    description: metadataResponse.data.mataData.GalleryMetaData.description,
  };
};

async function page() {
  const { data } = await client.query<GalleryData>({
    query: gallery_query,
  });
  return (
    <div>
      <PageHeader title="Gallery" path="Pages / Gallery" />
      <div className="grid md:grid-cols-2 gap-6 container py-20">
        {data.gallery.images.map((e, index) => (
          <AlerImage image={strApi + e.url}>
            <Image
              src={strApi + e.url}
              width={1000}
              height={1000}
              alt={e.name}
              key={index + `image`}
              className="object-cover w-full aspect-video   bg-primary/5"
            />
          </AlerImage>
        ))}
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

export default page;
