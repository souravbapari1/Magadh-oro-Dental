import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import { DoctorsSection } from "@/components/layout/interface/docctorSection";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import DoctorCard from "../about/DoctorCard";

export const metadata: Metadata = {
  title: "Doctors - Magadh oro Dental",
};

const doctors_query = gql`
  query Doctors {
    doctors {
      slug
      position
      name
      doctor_experience
      doctor_image {
        url
      }
      description
      social_links {
        facebook {
          link_text
          id
          link_url
          open_on
        }
        google {
          link_text
          link_url
          open_on
          id
        }
        instagram {
          link_text
          link_url
          open_on
        }
        linkedin {
          open_on
          link_url
          link_text
        }
        twitter {
          open_on
          link_url
          link_text
        }
        youtube {
          open_on
          link_url
          link_text
        }
      }
    }
  }
`;

async function page() {
  const { data } = await client.query<DoctorsSection>({
    query: doctors_query,
  });
  return (
    <div className="">
      <PageHeader title="Meet Doctors" path="Doctors" />
      <div className="container">
        <div className="grid grid-cols-3 gap-6 py-16">
          {data.doctors.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
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
