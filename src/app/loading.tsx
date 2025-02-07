import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] bg-primary flex justify-center items-center  z-[99] fixed top-0 left-0 ">
      <div className="md:w-28 md:h-28 w-24 h-24 border-2 border-white border-t-4 border-t-transparent border-b-4 border-b-transparent rounded-full animate-spin"></div>
      <Image
        alt="loader"
        src="/loader.svg"
        width={48}
        height={48}
        className="absolute w-10 h-10"
      />
    </div>
  );
}
