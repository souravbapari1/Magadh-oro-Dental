import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Book Your Visit | Magadh oro Dental - Implant & Orthodontic Clinic",
  description:
    "Book your visit with our dental clinic today and get the best service you deserve. ",
};
export const revalidate = 0;
function page() {
  return (
    <div className="bg-gray-50/50 ">
      <div className="md:min-h-[90vh]  container flex justify-center items-center ">
        <div className="grid lg:grid-cols-7 gap-5 md:shadow-md shadow-none shadow-gray-300/30 relative  overflow-hidden w-full md:h-[70vh] md:rounded-3xl nd:border border-primary/5 bg-white">
          <div className="lg:col-span-4 md:p-10   relative">
            <div className=" md:mt-5 flex flex-col justify-between relative">
              <Card className=" shadow-none bg-primary/5 border-none">
                <CardHeader>
                  <CardTitle className="text-gray-800">
                    Select Your Service
                  </CardTitle>
                  <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:max-h-[330px] max-h-[45vh] overflow-auto ">
                  <div className="grid md:grid-cols-2 gap-5">
                    {Array.from({ length: 30 }).map((e) => {
                      return (
                        <div className=" rounded-2xl p-3 bg-white ">
                          <div className="flex justify-start items-center gap-4">
                            <Image
                              alt=""
                              src="https://demo.awaikenthemes.com/primecare/wp-content/uploads/2024/09/post-2.jpg"
                              width={500}
                              height={500}
                              className="w-10 h-10  object-cover rounded-full"
                            />
                            <h1 className="text-center font-bold text-primary">
                              Lorem ipsum dolor
                            </h1>
                          </div>
                          <p className="line-clamp-2 text-xs text-gray-500 mt-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Consequatur numquam, itaque repellendus sed et
                            nisi distinctio, perspiciatis, officiis incidunt
                            officia saepe repellat facilis quis. Numquam modi
                            doloribus quos repudiandae voluptatum.
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button
              className="md:absolute bottom-8 md:mt-0 mt-10 rounded-xl md:w-auto w-full shadow-none   right-8"
              size="lg"
            >
              Proceed to Booking <ArrowRight />
            </Button>
          </div>
          <div className="lg:flex hidden justify-center items-center lg:col-span-3 ">
            <Image
              src="/appointment.webp"
              alt=""
              width={1500}
              height={1500}
              className="w-full h-full bg-white object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
