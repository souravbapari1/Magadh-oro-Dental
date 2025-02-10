import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ImageSlider from "@/components/layout/ImageSlider";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import { BeforeAfterData } from "./beforeafter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before After Compare - Magadh oro Dental",
};

const before_after_query = gql`
  query BeforeAfters {
    beforeAfters {
      title
      after {
        url
      }
      before {
        url
      }
      documentId
    }
  }
`;

async function page() {
  const { data } = await client.query<BeforeAfterData>({
    query: before_after_query,
  });
  return (
    <div className="">
      <PageHeader title="Before After Compare" path="Pages / Before After" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gal-5 gap-5">
          {data.beforeAfters.map((beforeAfter) => (
            <ImageSlider
              key={beforeAfter.documentId}
              data={{
                after: strApi + beforeAfter.after.url,
                before: strApi + beforeAfter.before.url,
              }}
            />
          ))}
        </div>
      </div>
      <HomeFaqs />
      <ReviewsSlide />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
