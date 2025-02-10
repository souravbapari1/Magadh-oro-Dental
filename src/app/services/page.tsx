import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesItem from "@/components/layout/ServicesItem";
import VideoSection from "@/components/layout/VideoSection";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { ServiceData } from "./service";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services - Magadh oro Dental",
};
const services_query = gql`
  query Image {
    services {
      image {
        url
      }
      service_name
      slug
      description
    }
  }
`;

async function page() {
  const { data } = await client.query<ServiceData>({
    query: services_query,
  });

  return (
    <div>
      <PageHeader title="Services" path="Services" />
      <div className="container py-20">
        <div className="grid  md:grid-cols-3 gap-8">
          {data.services.map((service) => (
            <ServicesItem key={service.slug} data={service} />
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
