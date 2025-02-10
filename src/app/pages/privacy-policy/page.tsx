import PageHeader from "@/components/layout/PageHeader";
import client from "@/graphql/client";
import { PrivacyPolicyData } from "./privacypolicy";
import { gql } from "@apollo/client";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import ClinicView from "@/components/layout/ClinicView";
import BookNow from "@/components/layout/BookNow";
import Footer from "@/components/layout/Footer";

const PRIVACY_POLICY_QUERY = gql`
  query PrivacyPolicy {
    privacyPolicy {
      content
    }
  }
`;

async function page() {
  const { data } = await client.query<PrivacyPolicyData>({
    query: PRIVACY_POLICY_QUERY,
  });

  return (
    <div>
      <PageHeader title="Privacy Policy" path="Pages / Privacy Policy" />

      <div className="container py-20">
        <div className=" ">
          <div
            className="content lg:col-span-2"
            dangerouslySetInnerHTML={{ __html: data?.privacyPolicy?.content }}
          />
        </div>
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
