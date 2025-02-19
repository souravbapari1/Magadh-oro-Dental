import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { termsAndConditionsContentData } from "./termsAndServicesData";

const TERMS_CONDITION_QUERY = gql`
  query TermsAndConditionsContent {
    termsAndConditionsContent {
      content
    }
  }
`;

async function page() {
  const { data } = await client.query<termsAndConditionsContentData>({
    query: TERMS_CONDITION_QUERY,
  });

  return (
    <div>
      <PageHeader title="Terms And Service" path="Pages / Terms and Service" />
      <div className="container py-20">
        <div
          className="content "
          dangerouslySetInnerHTML={{
            __html: data?.termsAndConditionsContent?.content,
          }}
        ></div>
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
