import Image from "next/image";
import ReviewSliderLIst from "./ReviewSliderLIst";
import { gql } from "@apollo/client";
import client from "@/graphql/client";
import { TestimonialData } from "./interface/TestimonialsData";

const REVIEWS_SLIDE_QUERY = gql`
  query Testimonials {
    testimonials {
      review_date
      name
      profile_image {
        url
      }
      platform_name
      rating
      review_content
      documentId
    }
    reviewsList {
      basicHeader {
        description
        title
        id
        top_title
      }
    }
  }
`;
async function ReviewsSlide() {
  const { data } = await client.query<TestimonialData>({
    query: REVIEWS_SLIDE_QUERY,
  });
  return (
    <div className="container mt-20 mb-20">
      <div className="mb-8">
        <div className="flex  justify-center items-center gap-2 opacity-80 mt-10">
          <Image
            src="/teeth.svg"
            width={1000}
            height={1000}
            alt="About Us"
            className="object-contain w-4 h-4 "
          />
          <p className="text-primary font-semibold">
            {data.reviewsList.basicHeader.top_title}
          </p>
        </div>

        <h2
          className="text-gray-800 text-3xl font-bold mt-2 text-center"
          dangerouslySetInnerHTML={{
            __html: data.reviewsList.basicHeader.title,
          }}
        />
        <p
          className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5"
          dangerouslySetInnerHTML={{
            __html: data.reviewsList.basicHeader.description,
          }}
        />
      </div>
      <ReviewSliderLIst data={data.testimonials} />
    </div>
  );
}

export default ReviewsSlide;
