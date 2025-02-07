import Image from "next/image";
import React from "react";

function WhyChooseUs() {
  return (
    <div className="container my-20">
      <Image
        src="/why.svg"
        width={1000}
        height={1000}
        alt="About Us"
        className="object-contain w-full h-auto md:block hidden "
      />
      <Image
        src="/why-mob.svg"
        width={1000}
        height={1000}
        alt="About Us"
        className="object-contain w-full h-auto md:hidden block "
      />
    </div>
  );
}

export default WhyChooseUs;
