import Image from "next/image";
import React from "react";
import ClinicCard from "./ClinicCard";
import client from "@/graphql/client";
import { ClinicsData } from "./interface/ClinicsData";
import { gql } from "@apollo/client";

const clinics_section = gql`
  query OurClinics {
    ourClinics {
      branch_address
      branch_index
      contact_email
      contact_number
      documentId
      google_map_link
      google_review_link
      opening_hours
      practo_review_link
      publishedAt
    }
    clinicsSection {
      basicHeader {
        top_title
        title
        id
        description
      }
    }
  }
`;

async function ClinicView() {
  const { data } = await client.query<ClinicsData>({
    query: clinics_section,
  });
  return (
    <div className="py-20">
      <div className="container">
        <div className="flex  justify-center items-center gap-2 opacity-80 ">
          <Image
            src="/teeth.svg"
            width={1000}
            height={1000}
            alt="About Us"
            className="object-contain w-4 h-4 "
          />
          <p className="text-primary font-semibold">
            {data.clinicsSection.basicHeader.top_title}
          </p>
        </div>
        <h2
          className="text-gray-800 text-3xl font-bold mt-2 text-center"
          dangerouslySetInnerHTML={{
            __html: data.clinicsSection.basicHeader.title,
          }}
        />
        <p
          className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5"
          dangerouslySetInnerHTML={{
            __html: data.clinicsSection.basicHeader.description,
          }}
        />
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          {data.ourClinics.reverse().map((clinic) => (
            <ClinicCard key={clinic.documentId} clinic={clinic} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClinicView;
