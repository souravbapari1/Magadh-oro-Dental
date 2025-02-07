import NavBar from "@/components/layout/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="relative">
      <div className="w-full max-h-[800px] h-screen flex justify-center items-center">
        <div className="container flex flex-col items-center justify-center gap-5 text-center">
          <Image
            alt="404"
            src="/error.png"
            width={1148}
            height={1148}
            className="object-contain md:w-96 md:h-96 w-80 h-80"
          />
          <h1 className="md:text-5xl text-2xl  mt-5 font-semibold ">
            OooPs! Page Not Found
          </h1>
          <p className="md:text-lg text-gray-500">
            Oops! The page you are looking for does not exist. It might have
            been moved <br />
            or deleted. Please check and try again.
          </p>
          <Link href="/">
            <Button className="mt-5 rounded-full shadow-none" size="lg">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
