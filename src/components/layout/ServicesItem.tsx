import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForward } from "react-icons/io5";

function ServicesItem() {
  return (
    <div className="w-full  border  rounded-2xl border-gray-100 shadow-md shadow-black/5  bg-white overflow-hidden p-3">
      <Image
        src="https://medito-react.vercel.app/static/media/service-2-2.c2ef88e670981fd3cbb3.jpg"
        alt="service"
        width={1000}
        height={1000}
        className="object-cover w-full  rounded-2xl shadow-lg h-52"
      />
      <div className="p-3">
        <h1 className="text-lg text-gray-800 font-semibold mt-2">
          Dental Care
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          We are excited to meet you and provide the best dental care.
        </p>
        <div className="border-t pt-3 mt-6 flex justify-between items-center">
          <Link
            href="/services/name"
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
