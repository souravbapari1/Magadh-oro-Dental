import Image from "next/image";
import React from "react";
import ClinicCard from "./ClinicCard";

function ClinicView() {
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
          <p className="text-primary font-semibold">Our Clinics</p>
        </div>
        <h1 className="text-gray-800 text-3xl font-bold mt-2 text-center">
          Visit Our Dental Clinic Near You
        </h1>
        <p className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis hic
          exercitationem esse totam ipsa tempore vero, nihil culpa sapiente ea
          amet, error cum odit dolore, nobis quidem pariatur consectetur.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <ClinicCard />
          <ClinicCard />
        </div>
      </div>
    </div>
  );
}

export default ClinicView;
