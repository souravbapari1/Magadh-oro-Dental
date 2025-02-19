import React from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import client, { strApi } from "@/graphql/client";
import { HomeHeaderData } from "./interface/HomeHeader";
import { gql } from "@apollo/client";
import HeaderImageSlider from "./HeaderImageSlider";
import Link from "next/link";
import AlertVideo from "./AlertVideo";

const HEADER_DATA_QUERY = gql`
  query HomeHeader {
    homeHeader {
      top_title
      main_title
      description
      images {
        url
      }
      youtube_embed_url
    }
  }
`;

async function Header() {
  const { data } = await client.query<HomeHeaderData>({
    query: HEADER_DATA_QUERY,
  });

  return (
    <div className=" w-full flex justify-between lg:flex-row flex-col lg:gap-20 items-center lg:h-screen h-auto  lg:max-h-[700px] relative bg-[#fafbff] bg-[url('/hero_bg_3.png')] bg-no-repeat bg-cover bg-center">
      <div className="container  w-full h-full md:pt-0 pt-10 ">
        <div className="w-full h-full lg:text-left text-center xl:pl-28 flex flex-col justify-center lg:items-start items-center gap-6">
          <h1
            className="lg:text-base text-sm font-bold capitalize text-gray-700 "
            dangerouslySetInnerHTML={{
              __html: data.homeHeader.top_title,
            }}
          />
          <h2
            className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-primary"
            dangerouslySetInnerHTML={{
              __html: data.homeHeader.main_title,
            }}
          />
          <p
            className="md:text-sm text-xs text-gray-500"
            dangerouslySetInnerHTML={{
              __html: data.homeHeader.description,
            }}
          />
          <div className="flex lg:flex-row flex-col justify-start items-center md:gap-9 gap-5 mt-3">
            <Link href="/contact">
              <Button size="lg" className="shadow-none rounded-full py-6">
                Make An Appointment
              </Button>
            </Link>
            <AlertVideo video={data.homeHeader.youtube_embed_url}>
              <div className="flex justify-center items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 border-[2px] rounded-full border-primary flex justify-center items-center text-primary">
                  <FaPlay size={12} />
                </div>
                <p className="text-xl font-semibold text-primary">
                  See How We Works{" "}
                </p>
              </div>
            </AlertVideo>
          </div>
          <div className="flex lg:justify-start justify-evenly md:gap-20 md:mt-14 mt-5 items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="md:text-5xl text-4xl font-bold text-primary">
                20+
              </h3>
              <p className="md:text-sm text-xs font-semibold text-primary/60">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="md:text-5xl text-4xl font-bold text-primary">
                24/7
              </h3>
              <p className="md:text-sm text-xs font-semibold text-primary/60">
                Emergency Services
              </p>
            </div>
          </div>
        </div>
      </div>

      <HeaderImageSlider images={data.homeHeader.images} />
    </div>
  );
}

export default Header;
