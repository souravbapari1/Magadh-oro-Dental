import React from "react";
import { Button } from "../ui/button";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

function Header() {
  return (
    <div className=" w-full flex justify-between lg:flex-row flex-col lg:gap-20 items-center lg:h-screen h-auto  lg:max-h-[700px] relative bg-[#fafbff] bg-[url('/hero_bg_3.png')] bg-no-repeat bg-cover bg-center">
      <div className="container  w-full h-full md:pt-0 pt-10 ">
        <div className="w-full h-full lg:text-left text-center xl:pl-28 flex flex-col justify-center lg:items-start items-center gap-6">
          <h1 className="lg:text-base text-sm font-bold capitalize text-gray-700 ">
            welcome to <span className="text-[#22cc22]">magadh oro dental</span>{" "}
            - implant orthodontic & laser clinic
          </h1>
          <h2 className="lg:text-6xl text-4xl lg:text-left text-center font-bold text-primary">
            Your smile <br /> is our expertise
          </h2>
          <p className="md:text-sm text-xs text-gray-500">
            At Magadh Oro Dental, we believe that everyone deserves a beautiful,
            confident smile. Our clinics in Patna specializes in Invisible
            braces, Root canals, Cosmetic and laser dentistry, Maxillofacial and
            gum's surgery, Dental implants, Kids dentistry and Full mouth
            rehablitation. offering a wide range of advanced dental solutions
            designed to enhance your smile and boost your inner confidence.
          </p>
          <div className="flex lg:flex-row flex-col justify-start items-center md:gap-9 gap-5 mt-3">
            <Button size="lg" className="shadow-none rounded-full py-6">
              Make An Appointment
            </Button>
            <div className="flex justify-center items-center gap-3">
              <div className="w-10 h-10 border-[2px] rounded-full border-primary flex justify-center items-center text-primary">
                <FaPlay size={12} />
              </div>
              <p className="text-xl font-semibold text-primary">
                See How We Works{" "}
              </p>
            </div>
          </div>
          <div className="flex lg:justify-start justify-evenly md:gap-20 md:mt-14 mt-5 items-center w-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="md:text-5xl text-4xl font-bold text-primary">
                15+
              </h1>
              <p className="md:text-sm text-xs font-semibold text-primary/60">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="md:text-5xl text-4xl font-bold text-primary">
                24/7
              </h1>
              <p className="md:text-sm text-xs font-semibold text-primary/60">
                Emergency Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[950px] w-full lg:h-full md:h-[600px] sm:h-96 h-60 lg:p-0 p-4 lg:mt-0 mt-10 relative">
        <Image
          alt="logo"
          src="https://magadhorodental.com/_next/image?url=https%3A%2F%2Fbackend.magadhorodental.com%2Fapi%2Ffiles%2Fkoe78xrl9aphtfe%2Fi9qhus7g6zklqky%2Fimg_20231231_175206_copy_1d2mX6pwwR.jpg&w=1200&q=75"
          width={1000}
          height={1000}
          className="object-cover w-full h-full md:rounded-none rounded-3xl md:shadow-none shadow-lg"
        />
      </div>
    </div>
  );
}

export default Header;
