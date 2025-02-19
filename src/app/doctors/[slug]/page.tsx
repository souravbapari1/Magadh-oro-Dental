import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { DoctorData } from "./doctordata";
import client, { strApi } from "@/graphql/client";
import { gql } from "@apollo/client";
import NotFound from "@/app/not-found";
import { Metadata } from "next";
import ImageSlider from "@/components/layout/ImageSlider";
import Head from "next/head";
import { TabTitle } from "@/app/constant";
export let metadata: Metadata;
const doctor_query = gql`
  query Doctors($pagination: PaginationArg, $filters: DoctorsListFiltersInput) {
    doctors(pagination: $pagination, filters: $filters) {
      slug
      position
      name
      before_afters {
        after {
          url
        }
        before {
          url
        }
        title
      }
      content
      description
      doctor_experience
      doctor_image {
        url
      }
      documentId
      education {
        content
        id
      }
      out_and_about {
        id
        content
      }
      social_links {
        facebook {
          open_on
          link_url
          link_text
          id
        }
        google {
          open_on
          link_url
          link_text
          id
        }
        id
        instagram {
          open_on
          link_url
          link_text
          id
        }
        linkedin {
          open_on
          link_url
          link_text
          id
        }
        twitter {
          open_on
          link_url
          link_text
          id
        }
        youtube {
          open_on
          link_url
          link_text
          id
        }
      }
      Metadata {
        title
        description
      }
    }
  }
`;

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data } = await client.query<DoctorData>({
    query: doctor_query,
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

  if (data.doctors.length === 0) {
    return <NotFound />;
  }

  metadata = {
    title: data?.doctors[0].Metadata.title + TabTitle,
    description: data.doctors[0].Metadata.description,
  };

  const doctor = data.doctors[0];

  return (
    <div>
      <PageHeader title={doctor.name} path={doctor.slug} />
      <div className="container pt-20">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="">
            <div className="bg-primary/5 rounded-3xl p-4 w-full">
              <div className="w-full h-auto relative   overflow-hidden  rounded-2xl group">
                <Image
                  src={strApi + doctor.doctor_image.url}
                  width={1000}
                  height={1000}
                  alt="About Us"
                  className="object-cover object-top w-full lg:h-80 h-96 rounded-2xl "
                />
                <Badge className="absolute top-4 border-2 border-white/20 shadow-sm left-4 rounded-lg text-xs ">
                  {doctor.doctor_experience}
                </Badge>
                <div className="w-full h-20 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex justify-center items-center">
                  <div className="flex justify-center items-center gap-3  transition-all">
                    {doctor.social_links.facebook && (
                      <Link
                        href={doctor.social_links.facebook.link_url}
                        target={doctor.social_links.facebook.open_on}
                        className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
                      >
                        <Facebook size={17} />
                      </Link>
                    )}
                    {doctor.social_links.instagram && (
                      <Link
                        href={doctor.social_links.instagram.link_url}
                        target={doctor.social_links.instagram.open_on}
                        className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
                      >
                        <Instagram size={17} />
                      </Link>
                    )}
                    {doctor.social_links.google && (
                      <Link
                        href={doctor.social_links.google.link_url}
                        target={doctor.social_links.google.open_on}
                        className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
                      >
                        <FaGoogle size={15} />
                      </Link>
                    )}
                    {doctor.social_links.youtube && (
                      <Link
                        href={doctor.social_links.youtube.link_url}
                        target={doctor.social_links.youtube.open_on}
                        className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
                      >
                        <Youtube size={17} />
                      </Link>
                    )}
                    {doctor.social_links.linkedin && (
                      <Link
                        href={doctor.social_links.linkedin.link_url}
                        target={doctor.social_links.linkedin.open_on}
                        className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
                      >
                        <Linkedin size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="py-4">
                <h1 className="font-bold text-2xl">{doctor.name}</h1>
                <p className=" text-primary/50">{doctor.position}</p>
              </div>
              <div className="">
                <p className=" text-gray-600 ">{doctor.description}</p>
              </div>
              <div className="py-3 mt-2">
                <h4 className="font-semibold text-primary">Education</h4>
                <ul className="list-disc pl-4 pt-2">
                  {doctor.education.map((education) => (
                    <li key={education.id}>{education.content}</li>
                  ))}
                </ul>
              </div>
              <div className="py-3">
                <h4 className="font-semibold text-primary">Out and about</h4>
                <ul className="list-disc pl-4 pt-2">
                  {doctor.out_and_about.map((out_and_about) => (
                    <li key={out_and_about.id}>{out_and_about.content}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="lg:col-span-2 content lg:pl-5"
            dangerouslySetInnerHTML={{
              __html: doctor.content,
            }}
          />
        </div>
        <div className="py-10 grid md:grid-cols-2 grid-cols-1 gap-8">
          {doctor.before_afters.map((before_after, index) => {
            return (
              <ImageSlider
                key={index + `df-af`}
                data={{
                  after: strApi + before_after.after.url,
                  before: strApi + before_after.before.url,
                }}
              />
            );
          })}
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
