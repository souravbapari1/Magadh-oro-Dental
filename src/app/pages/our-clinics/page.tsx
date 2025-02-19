import BookNow from "@/components/layout/BookNow";
import ClinicCard from "@/components/layout/ClinicCard";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import { ClinicsData } from "@/components/layout/interface/ClinicsData";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import VideoSlider from "@/components/layout/VideoSlider";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Clinics - Magadh oro Dental",
};

async function page() {
  const { data } = await client.query<ClinicsData>({
    query: gql`
      query OurClinics {
        ourClinics {
          branch_index
          branch_address
          contact_email
          contact_number
          documentId
          google_map_link
          google_review_link
          opening_hours
          practo_review_link
        }
      }
    `,
  });
  return (
    <div>
      <PageHeader title="Visit Our Clinics" path="Pages / Our Clinics" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-5">
          {data.ourClinics.map((clinic) => (
            <ClinicCard key={clinic.documentId} clinic={clinic} />
          ))}
        </div>
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
