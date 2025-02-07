import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdEmail } from "react-icons/md";
import { Clock, Navigation } from "lucide-react";
import { FaClock, FaPhone } from "react-icons/fa6";
import Rating from "@/components/layout/Rating";
import { Button } from "../ui/button";
import Image from "next/image";
function ClinicCard() {
  return (
    <Card className="shadow-none bg-primary/5 border-[10px] border-primary/10 p-2 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Branch 1</CardTitle>
        <CardDescription>
          Flat No. 101, Mateshwari Residency, Patna Central School Rd,
          Ramkrishan Nagar, Patna, Bihar 800027
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-gray-700 ">
          <div className="flex justify-start items-center gap-3">
            <MdEmail size={16} className="text-primary" />
            <p>info@magadhorodental.com</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaPhone size={15} className="text-primary" />
            <p>+91 1234567890</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaClock size={16} className="text-primary" />
            <p>Open 24/7</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-3 gap-5 w-full">
          <Button size="sm" className="shadow-none rounded-full px-5 ">
            <Navigation size={10} /> Get Direction
          </Button>
          <div className="flex  gap-3">
            <Button
              size="sm"
              variant="secondary"
              className="shadow-none rounded-full px-6 bg-white md:w-auto w-full"
            >
              <FcGoogle /> Review
            </Button>

            <Button
              size="sm"
              variant="secondary"
              className="shadow-none rounded-full px-6 bg-white md:w-auto w-full"
            >
              <Image
                src="/practo.png"
                width={100}
                height={100}
                alt=""
                className="w-4 h-4 rounded-full object-cover "
              />{" "}
              Review
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ClinicCard;
