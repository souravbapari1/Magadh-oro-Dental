import { Doctor } from "@/components/layout/interface/docctorSection";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { strApi } from "@/graphql/client";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="overflow-hidden rounded-3xl border-primary/5 shadow-none bg-primary/5 p-2 ">
      <div className="w-full h-auto relative   overflow-hidden  rounded-2xl group">
        <Image
          src={strApi + doctor.doctor_image.url}
          width={1000}
          height={1000}
          alt="About Us"
          className="object-cover object-top w-full h-80 rounded-2xl "
        />
        <Badge className="absolute top-4 border-2 border-white/20 shadow-sm left-4 rounded-lg text-xs ">
          {doctor.doctor_experience}
        </Badge>
        <div className="w-full h-20 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex justify-center items-center">
          <div className="flex justify-center items-center gap-3 translate-y-14 group-hover:translate-y-0 transition-all">
            {doctor.social_links.facebook && (
              <Link
                href={doctor.social_links.facebook.link_url}
                target={doctor.social_links.facebook.open_on}
                className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
              >
                <Facebook size={17} />
              </Link>
            )}
            {doctor.social_links.instagram && (
              <Link
                href={doctor.social_links.instagram.link_url}
                target={doctor.social_links.instagram.open_on}
                className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
              >
                <Instagram size={17} />
              </Link>
            )}
            {doctor.social_links.google && (
              <Link
                href={doctor.social_links.google.link_url}
                target={doctor.social_links.google.open_on}
                className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
              >
                <FaGoogle size={15} />
              </Link>
            )}
            {doctor.social_links.youtube && (
              <Link
                href={doctor.social_links.youtube.link_url}
                target={doctor.social_links.youtube.open_on}
                className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
              >
                <Youtube size={17} />
              </Link>
            )}
            {doctor.social_links.linkedin && (
              <Link
                href={doctor.social_links.linkedin.link_url}
                target={doctor.social_links.linkedin.open_on}
                className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
              >
                <Linkedin size={15} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <CardHeader className="py-3 px-3">
        <h1 className="font-bold">{doctor.name}</h1>
        <p className="text-sm text-primary/50">{doctor.position}</p>
      </CardHeader>
      <CardContent className="mt-0 px-3">
        <p className="text-gray-700 text-sm line-clamp-3">
          {doctor.description}
        </p>
      </CardContent>
      <CardFooter className="px-3 pt-0 mt-0 pb-3">
        <Link
          href={"/doctors/" + doctor.slug}
          className="flex justify-center items-center gap-3 text-primary"
        >
          Read More <IoArrowForward className="mt-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default DoctorCard;
