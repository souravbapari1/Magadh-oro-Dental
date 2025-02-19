import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";
import { gql } from "@apollo/client";
import client, { strApi } from "@/graphql/client";
import { AboutUsData } from "./interface/AboutUsData";
import Link from "next/link";

const About_US_query = gql`
  query AboutUs {
    aboutUs {
      Content
      Images {
        url
      }
      TextList {
        content
        id
      }
      documentId
      basicHeader {
        description
        title
        top_title
      }
    }
  }
`;

async function AboutUs() {
  const { data } = await client.query<AboutUsData>({
    query: About_US_query,
  });

  return (
    <div className="bg-white py-20">
      <div className="container ">
        <div className="w-full grid lg:grid-cols-2 gap-16">
          <div className="w-full md:h-[400px] h-64 bg-primary/20 rounded-3xl relative">
            <Image
              src={strApi + data.aboutUs.Images[0].url}
              width={1000}
              height={1000}
              alt="About Us"
              className="object-cover w-full h-full rounded-3xl shadow-lg"
            />
          </div>
          <div className="w-full md:text-left text-center">
            <div className="flex md:justify-start justify-center items-center gap-2 opacity-80">
              <Image
                src="/teeth.svg"
                width={1000}
                height={1000}
                alt="About Us"
                className="object-contain w-4 h-4 "
              />
              <p className="text-primary font-semibold">
                {data.aboutUs.basicHeader.top_title}
              </p>
            </div>
            <h2
              className="md:text-3xl text-2xl font-bold text-primary mt-3"
              dangerouslySetInnerHTML={{
                __html: data.aboutUs.basicHeader.title,
              }}
            />
            <p
              className="mt-5 md:text-base text-sm text-gray-600"
              dangerouslySetInnerHTML={{
                __html: data.aboutUs.basicHeader.description,
              }}
            />
            <div className="grid  gap-2 mt-6">
              {data.aboutUs.TextList.map((item, index) => (
                <div
                  key={index + "tet" + item.id}
                  className="flex justify-start  items-center md:font-semibold md:text-base text-sm   text-gray-800 gap-3"
                >
                  <div className="w-4 h-4">
                    <IoMdCheckmarkCircleOutline
                      size={19}
                      className="text-[#22cc22]"
                    />
                  </div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
            <Link href="/about">
              <Button size="lg" className="shadow-none rounded-full mt-6 px-8">
                Read More About
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
