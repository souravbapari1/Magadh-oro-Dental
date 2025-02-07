import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

function DoctorSmallCard() {
  return (
    <Card className="shadow-none p-3 rounded-3xl bg-primary/5 border-none">
      <div className="flex items-center justify-between gap-4">
        <Image
          src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?semt=ais_hybrid"
          alt="user"
          width={150}
          height={150}
          className="w-20 h-20 rounded-3xl  object-cover object-top"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg text-gray-800">Dr. John Doe</h3>
          <p className="line-clamp-2 text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, aliquid est tempore veritatis sequi perspiciatis id
            doloribus veniam consectetur impedit dolorem, quis ipsa laboriosam
            odio a numquam inventore. Molestiae, accusantium.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default DoctorSmallCard;
