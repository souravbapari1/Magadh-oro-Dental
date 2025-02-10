import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "lucide-react";
import Image from "next/image";
import { FaClock, FaPhone } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Button } from "../ui/button";
import { OurClinic } from "./interface/ClinicsData";
import Link from "next/link";
function ClinicCard({ clinic }: { clinic: OurClinic }) {
  return (
    <Card className="shadow-none bg-primary/5 border-[10px] border-primary/10 p-2 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">
          {clinic.branch_index}
        </CardTitle>
        <CardDescription>{clinic.branch_address}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-gray-700 ">
          <div className="flex justify-start items-center gap-3">
            <MdEmail size={16} className="text-primary" />
            <p>{clinic.contact_email}</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaPhone size={15} className="text-primary" />
            <p>{clinic.contact_number}</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <FaClock size={16} className="text-primary" />
            <p>{clinic.opening_hours}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-3 gap-5 w-full">
          <Link href={clinic.google_map_link} target="_blank">
            <Button size="sm" className="shadow-none rounded-full px-5 ">
              <Navigation size={10} /> Get Direction
            </Button>
          </Link>
          <div className="flex  gap-3">
            <Link href={clinic.google_review_link} target="_blank">
              <Button
                size="sm"
                variant="secondary"
                className="shadow-none rounded-full px-6 bg-white md:w-auto w-full"
              >
                <FcGoogle /> Review
              </Button>
            </Link>

            <Link href={clinic.practo_review_link} target="_blank">
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
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ClinicCard;
