import NotFound from "@/app/not-found";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ImageSlider from "@/components/layout/ImageSlider";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesListCard from "@/components/layout/ServicesListCard";
import VideoSection from "@/components/layout/VideoSection";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import Head from "next/head";
import { ServicesConnectionData } from "./servicesPosts";
import { Metadata } from "next";

const SERVICES_VIEW_QUERY = gql`
  query Services_connection(
    $filters: ServiceslistFiltersInput
    $pagination: PaginationArg
  ) {
    services_connection(filters: $filters, pagination: $pagination) {
      nodes {
        slug
        service_name
        image {
          url
        }
        documentId
        description
        content
        ServicesMetadata {
          description
          title
        }
        before_afters {
          title
          after {
            url
          }
          before {
            url
          }
        }
      }
    }
  }
`;

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<ServicesConnectionData>({
    query: SERVICES_VIEW_QUERY,
  });

  return {
    title:
      metadataResponse.data.services_connection.nodes[0].ServicesMetadata
        ?.title,

    description:
      metadataResponse.data.services_connection.nodes[0].ServicesMetadata
        ?.description,
  };
};

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data } = await client.query<ServicesConnectionData>({
    query: SERVICES_VIEW_QUERY,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });

  console.log(data?.services_connection?.nodes[0].ServicesMetadata);

  if (data.services_connection.nodes.length === 0) {
    return <NotFound />;
  }

  return (
    <div>
      <PageHeader
        title={data.services_connection.nodes[0].service_name}
        path={data.services_connection.nodes[0].slug}
      />
      <div className="container py-20">
        <div className="grid lg:grid-cols-3 lg:gap-20 gap-10">
          <div
            className="content lg:col-span-2"
            dangerouslySetInnerHTML={{
              __html: data.services_connection.nodes[0].content,
            }}
          />
          <div>
            <div className="lg:sticky top-24">
              <ServicesListCard />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-10 grid md:grid-cols-2 grid-cols-1 gap-8">
          {data.services_connection.nodes[0].before_afters.map(
            (item, index) => {
              return (
                <ImageSlider
                  key={index + `df-af`}
                  data={{
                    after: strApi + item.after.url,
                    before: strApi + item.before.url,
                  }}
                />
              );
            }
          )}
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
