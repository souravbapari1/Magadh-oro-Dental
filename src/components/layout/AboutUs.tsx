import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";

function AboutUs() {
  return (
    <div className="bg-white py-20">
      <div className="container ">
        <div className="w-full grid lg:grid-cols-2 gap-16">
          <div className="w-full md:h-[400px] h-64 bg-primary/20 rounded-3xl relative">
            <Image
              src="https://magadhorodental.com/_next/image?url=https%3A%2F%2Fbackend.magadhorodental.com%2Fapi%2Ffiles%2Fkoe78xrl9aphtfe%2Fi9qhus7g6zklqky%2Fteam_magadh_oro_dental_ziBOMbum4D.jpeg&w=1080&q=75"
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
              <p className="text-primary font-semibold">About Us</p>
            </div>
            <h1 className="md:text-3xl text-2xl font-bold text-primary mt-3">
              Lorem ipsum dolor sit{" "}
              <span className="text-[#22cc22]">amet consectetur</span>{" "}
              adipisicing dolor elit.
            </h1>
            <p className="mt-5 md:text-base text-sm text-gray-600">
              Magadh Oro Dental - Implant Orthodontic & Laser Clinic is a Patna
              based Multi Speciality dental cinic, We specialize in Cosmetic
              dentistry, Laser dentistry, Root canals, Crown & bridge,
              Maxillofacial surgery, Implantology, Gum's treatment, Pediatric
              dentistry and Prosthetic dentistry.
            </p>
            <div className="grid  gap-2 mt-6">
              {Array(3)
                .fill(0)
                .map((item, index) => (
                  <div
                    key={index + "tet"}
                    className="flex justify-start  items-center md:font-semibold md:text-base text-sm   text-gray-800 gap-3"
                  >
                    <div className="w-4 h-4">
                      <IoMdCheckmarkCircleOutline
                        size={19}
                        className="text-[#22cc22]"
                      />
                    </div>
                    <p>Lorem ipsum dolor sit Lorem ipsum .</p>
                  </div>
                ))}
            </div>
            <Button size="lg" className="shadow-none rounded-full mt-6 px-8">
              Read More About
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
