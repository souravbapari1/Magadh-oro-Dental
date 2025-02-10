import client from "@/graphql/client";
import { gql } from "@apollo/client";
import React from "react";
import { ServiceNameData } from "./interface/sewrviceNames";
import Link from "next/link";

const SERVICES_LIST_CARD_QUERY = gql`
  query Services {
    services {
      service_name
      documentId
      slug
    }
  }
`;

async function ServicesListCard() {
  const { data } = await client.query<ServiceNameData>({
    query: SERVICES_LIST_CARD_QUERY,
  });
  return (
    <div className="w-full bg-gradient-to-tr  from-primary to-primary/80   rounded-3xl p-7 px-8">
      <h5 className="text-white text-2xl font-bold">Our Services</h5>
      <div className="py-3">
        <ul className="list-disc pl-4 space-y-2 text-white text-sm">
          {data.services.map((service, index) => (
            <li key={index + service.documentId}>
              <Link href={`/services/${service.slug}`}>
                {service.service_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServicesListCard;
