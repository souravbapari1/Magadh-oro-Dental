import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { OurServicesList } from "./interface/ServicesViewData";
import { strApi } from "@/graphql/client";

function ServicesItem({ data }: { data: OurServicesList["services"][number] }) {
  return (
    <div className="w-full  border  rounded-2xl border-gray-100 shadow-md shadow-black/5  bg-white overflow-hidden p-3">
      <Image
        src={strApi + data.image.url}
        alt="service"
        width={1000}
        height={1000}
        className="object-cover w-full  rounded-2xl shadow-lg h-52"
      />
      <div className="p-3">
        <h3
          className="text-lg text-gray-800 font-semibold mt-2"
          dangerouslySetInnerHTML={{
            __html: data.service_name,
          }}
        />
        <p
          className="text-sm text-gray-500 mt-2 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />
        <div className="border-t pt-3 mt-6 flex justify-between items-center">
          <Link
            href={"/services/" + data.slug}
            className="flex justify-start items-center gap-5 text-primary px-2"
          >
            Learn More <IoArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
