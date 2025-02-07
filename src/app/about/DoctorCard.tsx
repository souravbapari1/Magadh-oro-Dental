import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";

function DoctorCard() {
  return (
    <Card className="overflow-hidden rounded-3xl border-primary/5 shadow-none bg-primary/5 p-2 ">
      <div className="w-full h-auto relative   overflow-hidden  rounded-2xl group">
        <Image
          src="https://magadhorodental.com/_next/image?url=https%3A%2F%2Fbackend.magadhorodental.com%2Fapi%2Ffiles%2Fltcy7gw1y82u195%2F01pq9h4zb1g3e7t%2Fdr_abhishek_kumar_SHG5aC93YH.jpeg&w=1200&q=75"
          width={1000}
          height={1000}
          alt="About Us"
          className="object-cover object-top w-full h-80 rounded-2xl "
        />
        <Badge className="absolute top-4 border-2 border-white/20 shadow-sm left-4 rounded-lg text-xs ">
          15+Y Exp
        </Badge>
        <div className="w-full h-20 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex justify-center items-center">
          <div className="flex justify-center items-center gap-3 translate-y-14 group-hover:translate-y-0 transition-all">
            <Link
              href="#"
              className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
            >
              <Facebook size={17} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
            >
              <Instagram size={17} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
            >
              <FaGoogle size={15} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
            >
              <Youtube size={17} />
            </Link>
            <Link
              href="#"
              className="w-8 h-8 bg-primary text-white rounded-full flex justify-center items-center"
            >
              <Linkedin size={15} />
            </Link>
          </div>
        </div>
      </div>
      <CardHeader className="py-3 px-3">
        <h1 className="font-bold">Dr. Abhishek Kumar</h1>
        <p className="text-sm text-primary/50">Clinic Manager</p>
      </CardHeader>
      <CardContent className="mt-0 px-3">
        <p className="text-gray-700 text-sm line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem
          saepe rem repellat magni, distinctio odio, nulla, itaque impedit
          deserunt mollitia! Facilis labore modi repudiandae non? Quo
          consequatur ipsam fugiat!
        </p>
      </CardContent>
      <CardFooter className="px-3 pt-0 mt-0 pb-3">
        <Link
          href="/doctors/abhishek-kumar"
          className="flex justify-center items-center gap-3 text-primary"
        >
          Read More <IoArrowForward className="mt-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default DoctorCard;
