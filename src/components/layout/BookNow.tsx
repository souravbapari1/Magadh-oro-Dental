import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function BookNow() {
  return (
    <div className="relative w-full py-16 bg-primary bg-[url('/hero-bg.svg')] bg-no-repeat bg-center bg-cover">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-primary/50"></div>

      <div className="relative flex justify-center items-center flex-col gap-6 container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Book Your Visit Online
        </h2>

        <p className="max-w-[600px] text-white/80 text-base ">
          View available appointments and enjoy dentistry done right. +FREE
          teeth whitening for life.
        </p>

        <Link href={"/contact"}>
          <Button
            size="lg"
            className="rounded-full px-10 text-primary  transition-all "
            variant="secondary"
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BookNow;
