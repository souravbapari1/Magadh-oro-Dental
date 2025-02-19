import ServicesItem from "@/components/layout/ServicesItem";
import { Button } from "@/components/ui/button";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { ServicesViewData } from "./interface/ServicesViewData";
import Link from "next/link";

const SERVICES_VIEW_QUERY = gql`
  query BasicHeader {
    ourServicesList {
      basicHeader {
        title
        id
        description
        top_title
      }
      services {
        service_name
        slug
        description
        image {
          url
        }
        documentId
      }
    }
  }
`;

async function ServicesView() {
  const { data } = await client.query<ServicesViewData>({
    query: SERVICES_VIEW_QUERY,
  });

  return (
    <div className="bg-primary/5 py-16">
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
            {data.ourServicesList.basicHeader.top_title}
          </p>
        </div>

        <h2
          className="text-gray-800 text-3xl font-bold mt-2 text-center"
          dangerouslySetInnerHTML={{
            __html: data.ourServicesList.basicHeader.title,
          }}
        />
        <p
          className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5"
          dangerouslySetInnerHTML={{
            __html: data.ourServicesList.basicHeader.description,
          }}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
          {data.ourServicesList.services.map((item, index) => {
            return (
              <ServicesItem key={index + "tet" + item.documentId} data={item} />
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center">
          <Link href="/services">
            <Button
              className="shadow-none px-8 py-5 mt-10 mx-auto rounded-full"
              size="sm"
            >
              Explore Our All Services <IoArrowForward />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesView;
