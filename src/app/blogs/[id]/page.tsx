import NotFound from "@/app/not-found";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import DoctorSmallCard from "@/components/layout/DoctorSmallCard";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesListCard from "@/components/layout/ServicesListCard";
import VideoSection from "@/components/layout/VideoSection";
import { Badge } from "@/components/ui/badge";
import client, { strApi } from "@/graphql/client";
import { getFormattedDate } from "@/lib/utils";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import Image from "next/image";
import BlogComment from "./BlogComment";
import { BlogPostData } from "./blogData";

export let metadata: Metadata;

const blog_query = gql`
  query Blog_category(
    $pagination: PaginationArg
    $filters: BlogPostFiltersInput
  ) {
    blogPosts(pagination: $pagination, filters: $filters) {
      publishedAt
      content
      createdAt
      description
      image {
        url
      }
      title
      slug
      documentId
      doctors {
        name
        description
        slug
        doctor_image {
          url
        }
      }
      blog_category {
        category_name
      }
    }
  }
`;

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { data } = await client.query<BlogPostData>({
    query: blog_query,
    variables: {
      filters: {
        slug: {
          eq: id,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });

  if (data.blogPosts.length === 0) {
    return <NotFound />;
  }

  metadata = {
    title: data.blogPosts[0].title + " - Magadh oro Dental",
    description: data.blogPosts[0].description,
  };

  const blog = data.blogPosts[0];

  return (
    <div>
      <div className="container py-20 ">
        <Image
          width={1000}
          height={10000}
          src={strApi + blog.image.url}
          alt="fsd"
          className="w-full h-auto object-cover rounded-2xl"
        />
        <h1
          className="font-bold md:text-3xl text-xl text-left mt-10 text-gray-800"
          dangerouslySetInnerHTML={{
            __html: blog.title,
          }}
        />
        <div className="flex justify-between items-center mt-10 mb-10">
          <p className="text-primary/80 font-bold">
            {getFormattedDate(blog.createdAt)}
          </p>
          <Badge className="bg-primary text-white shadow-none text-xs rounded-full ">
            {blog.blog_category.category_name}
          </Badge>
        </div>
        <hr />
        <div className="grid lg:grid-cols-3 lg:gap-14 gap-10">
          <div className=" lg:col-span-2">
            <div
              className="mt-10 content "
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />
          </div>
          <div className="lg:block hidden mt-10">
            {blog.doctors.length != 0 && (
              <div className="">
                <h2 className="text-2xl font-bold text-primary">
                  Related Doctors
                </h2>
                <div className="flex flex-col gap-3 mt-5">
                  {blog.doctors.map((doctor, i) => (
                    <DoctorSmallCard
                      key={doctor.name + doctor + i}
                      doctor={doctor}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className=" mt-10 lg:sticky top-20">
              <ServicesListCard />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* //coments  */}
      <BlogComment id={blog.documentId} />
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
