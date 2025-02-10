import DoctorCard from "@/app/about/DoctorCard";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { DoctorsSectionData } from "./interface/docctorSection";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import Link from "next/link";

const doctors_section = gql`
  query BasicHeader {
    doctorsSection {
      basicHeader {
        top_title
        id
        description
        title
      }
      doctors {
        doctor_experience
        description
        doctor_image {
          url
        }
        name
        position
        slug
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
      }
    }
  }
`;

async function DoctorsSection() {
  const { data } = await client.query<DoctorsSectionData>({
    query: doctors_section,
  });
  return (
    <div className="container my-20">
      <div className="flex  justify-center items-center gap-2 opacity-80 ">
        <Image
          src="/teeth.svg"
          width={1000}
          height={1000}
          alt="About Us"
          className="object-contain w-4 h-4 "
        />
        <p className="text-primary font-semibold">
          {data.doctorsSection.basicHeader.top_title}
        </p>
      </div>
      <h1
        className="text-gray-800 text-3xl font-bold mt-2 text-center"
        dangerouslySetInnerHTML={{
          __html: data.doctorsSection.basicHeader.title,
        }}
      />
      <p
        className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5"
        dangerouslySetInnerHTML={{
          __html: data.doctorsSection.basicHeader.description,
        }}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
        {data.doctorsSection.doctors.map((doctor) => (
          <DoctorCard key={doctor.slug} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link href="/doctors">
          <Button className="rounded-full px-8 shadow-none">
            Meet All Doctors{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DoctorsSection;
