import DoctorCard from "@/app/about/DoctorCard";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ImageSlider from "@/components/layout/ImageSlider";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

function page() {
  return (
    <div>
      <PageHeader title="Dr. Abhishek Kumar" path="Dr. Abhishek Kumar" />
      <div className="container pt-20">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="">
            <div className="bg-primary/5 rounded-3xl p-4 w-full">
              <div className="w-full h-auto relative   overflow-hidden  rounded-2xl group">
                <Image
                  src="https://magadhorodental.com/_next/image?url=https%3A%2F%2Fbackend.magadhorodental.com%2Fapi%2Ffiles%2Fltcy7gw1y82u195%2F01pq9h4zb1g3e7t%2Fdr_abhishek_kumar_SHG5aC93YH.jpeg&w=1200&q=75"
                  width={1000}
                  height={1000}
                  alt="About Us"
                  className="object-cover object-top w-full lg:h-80 h-96 rounded-2xl "
                />
                <Badge className="absolute top-4 border-2 border-white/20 shadow-sm left-4 rounded-lg text-xs ">
                  15+Y Exp
                </Badge>
                <div className="w-full h-20 bg-gradient-to-t from-black to-transparent absolute bottom-0 flex justify-center items-center">
                  <div className="flex justify-center items-center gap-3  transition-all">
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

              <div className="py-4">
                <h1 className="font-bold text-2xl">Dr. Abhishek Kumar</h1>
                <p className=" text-primary/50">Clinic Manager</p>
              </div>
              <div className="">
                <p className=" text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  exercitationem veniam aperiam quaerat, facilis saepe amet
                  aspernatur doloremque cumque iste incidunt dolore nobis itaque
                  eaque consequatur nihil cupiditate, distinctio odio?
                </p>
              </div>
              <div className="py-3 mt-2">
                <h4 className="font-semibold text-primary">Education</h4>
                <ul className="list-disc pl-4 pt-2">
                  <li>BDS - B.I.D.S.H. Patna</li>
                  <li>Master Basic Courses in Implantology</li>
                </ul>
              </div>
              <div className="py-3">
                <h4 className="font-semibold text-primary">Out and about</h4>
                <ul className="list-disc pl-4 pt-2">
                  <li>18 Years of experience in cosmetic dentistry</li>
                  <li>
                    Cosmetic Dentist at Kailash Hospital & Heart Institute,
                    Noida (2008 - 2009)
                  </li>
                  <li>
                    Cosmetic & Pediatric Dentist at Magadh Oro Dental &
                    Orthodontic Clinic, Patna (2007 - 2024)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 content lg:pl-5">
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              aut fugit vitae alias temporibus assumenda dignissimos reiciendis
              quidem voluptatum velit impedit, ex consectetur suscipit sunt
              tempora minima facere nobis nemo tempore sed deleniti! Nulla,
              odio! Minima iste temporibus ipsa perferendis. Quidem corrupti
              nisi blanditiis magnam, dicta animi, enim ut dolores amet quia est
              explicabo quibusdam illum minus doloribus natus itaque rem hic
              nostrum. Odio eaque iure aperiam, est, debitis quaerat itaque eum
              iste quia beatae ex ducimus dolore. Minus, vitae iusto. Tempore
              eaque quas officiis, incidunt eligendi repellat voluptates nam
              modi aut ipsum! Rerum est, quam laborum autem laboriosam
              veritatis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deleniti voluptatem iusto magni asperiores quas quis vel. Minima
              repellat culpa, rem quod numquam optio quasi, sunt sapiente,
              dolores est quibusdam.
            </p>
            <ul>
              <li>18 Years of experience in cosmetic dentistry</li>
              <li>
                Cosmetic Dentist at Kailash Hospital & Heart Institute, Noida
                (2008 - 2009)
              </li>
              <li>
                Cosmetic & Pediatric Dentist at Magadh Oro Dental & Orthodontic
                Clinic, Patna (2007 - 2024)
              </li>
            </ul>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              aut fugit vitae alias temporibus assumenda dignissimos reiciendis
              quidem voluptatum velit impedit, ex consectetur suscipit sunt
              tempora minima facere nobis nemo tempore sed deleniti! Nulla,
              odio! Minima iste temporibus ipsa perferendis. Quidem corrupti
              nisi blanditiis magnam, dicta animi, enim ut dolores amet quia est
              explicabo quibusdam illum minus doloribus natus itaque rem hic
              nostrum. Odio eaque iure aperiam, est, debitis quaerat itaque eum
              iste quia beatae ex ducimus dolore. Minus, vitae iusto. Tempore
              eaque quas officiis, incidunt eligendi repellat voluptates nam
              modi aut ipsum! Rerum est,
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              deleniti voluptatem iusto magni asperiores quas quis vel. Minima
              repellat culpa, rem quod numquam optio quasi, sunt sapiente,
            </p>
            <p>
              repellat culpa, rem quod numquam optio quasi, sunt sapiente, Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti
              voluptatem iusto magni asperiores quas quis vel. Minima repellat
              culpa, rem quod numquam optio quasi, sunt sapiente, dolores
            </p>
          </div>
        </div>
        <div className="py-10 grid md:grid-cols-2 grid-cols-1 gap-8">
          <ImageSlider />
          <ImageSlider />
        </div>
      </div>
      <HomeFaqs />
      <ReviewsSlide />
      <VideoSlider />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
