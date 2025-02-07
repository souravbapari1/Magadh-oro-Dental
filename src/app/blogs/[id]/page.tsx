import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import DoctorSmallCard from "@/components/layout/DoctorSmallCard";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesListCard from "@/components/layout/ServicesListCard";
import VideoSlider from "@/components/layout/VideoSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="container py-20 ">
        <Image
          width={1000}
          height={10000}
          src="https://magadhorodental.com/_next/image?url=https%3A%2F%2Fbackend.magadhorodental.com%2Fapi%2Ffiles%2Fd5ffrkvrjrwdb6t%2Fviw5ezbo7nd20hz%2Ffluoride_treatment_at_magadh_oro_dental_evH9z88CRm.jpg&w=256&q=75"
          alt="fsd"
          className="w-full h-auto object-cover rounded-2xl"
        />
        <h1 className="font-bold text-3xl text-left mt-10 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus perferendis atque sit iste similique minussit iste
          similique minus.
        </h1>
        <div className="flex justify-between items-center mt-10 mb-10">
          <p className="text-primary/80 font-bold">02/11/2023</p>
          <Badge className="bg-primary text-white shadow-none text-xs rounded-full ">
            Teeth Clinging
          </Badge>
        </div>
        <hr />
        <div className="grid lg:grid-cols-3 lg:gap-14 gap-10">
          <div className=" lg:col-span-2">
            <div className="mt-10 content ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                mollitia asperiores atque quasi, soluta, maiores quam
                reprehenderit veritatis id optio dolore nobis aliquam dolorum
                facere libero. Nesciunt, delectus, consectetur neque veniam a
                voluptate obcaecati cumque reprehenderit dolorum ducimus tempore
                culpa corrupti atque asperiores iste iure cupiditate consequatur
                necessitatibus porro quisquam cum. Possimus molestias eveniet
                cumque ipsam reiciendis nemo dolorum recusandae rem totam
                voluptatibus a, veritatis, repudiandae quod modi excepturi
                accusamus ullam corrupti. Dolore, autem eum, optio quasi
                repellat tempore quod modi maiores quidem sequi quos neque fuga
                non dolorem quas atque natus placeat et facere, perspiciatis
                voluptatibus temporibus. Sed, tenetur!
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                sequi incidunt aperiam, cupiditate doloribus aut iste quae non.
                Delectus ducimus numquam laudantium earum expedita dicta
                voluptatem nihil eos praesentium voluptatibus, quasi dolorum
                voluptate quam eaque quaerat tempora inventore consequuntur nam.
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                mollitia asperiores atque quasi, soluta, maiores quam
                reprehenderit veritatis id optio dolore nobis aliquam dolorum
                facere libero. Nesciunt, delectus, consectetur neque veniam a
                voluptate obcaecati cumque reprehenderit dolorum ducimus tempore
                culpa corrupti atque asperiores iste iure cupiditate consequatur
                necessitatibus porro quisquam cum. Possimus molestias eveniet
                cumque ipsam reiciendis nemo dolorum recusandae rem totam
                voluptatibus a, veritatis, repudiandae quod modi excepturi
                accusamus ullam corrupti. Dolore, autem eum, optio quasi
                repellat tempore quod modi maiores quidem sequi quos neque fuga
                non dolorem quas atque natus placeat et facere, perspiciatis
                voluptatibus temporibus. Sed, tenetur!
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                sequi incidunt aperiam, cupiditate doloribus aut iste quae non.
                Delectus ducimus numquam laudantium earum expedita dicta
                voluptatem nihil eos praesentium voluptatibus, quasi dolorum
                voluptate quam eaque quaerat tempora inventore consequuntur nam.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
                mollitia asperiores atque quasi, soluta, maiores quam
                reprehenderit veritatis id optio dolore nobis aliquam dolorum
                facere libero. Nesciunt, delectus, consectetur neque veniam a
                voluptate obcaecati cumque reprehenderit dolorum ducimus tempore
                culpa corrupti atque asperiores iste iure cupiditate consequatur
                necessitatibus porro quisquam cum. Possimus molestias eveniet
                cumque ipsam reiciendis nemo dolorum recusandae rem totam
                voluptatibus a, veritatis, repudiandae quod modi excepturi
                accusamus ullam corrupti. Dolore, autem eum, optio quasi
                repellat tempore quod modi maiores quidem sequi quos neque fuga
                non dolorem quas atque natus placeat et facere, perspiciatis
                voluptatibus temporibus. Sed, tenetur!
              </p>
            </div>
          </div>
          <div className="lg:block hidden mt-10">
            <div className="">
              <h2 className="text-2xl font-bold text-primary">
                Releted Docrors
              </h2>
              <div className="flex flex-col gap-3 mt-5">
                <DoctorSmallCard />
                <DoctorSmallCard />
                <DoctorSmallCard />
              </div>
            </div>
            <div className=" mt-10 lg:sticky top-20">
              <ServicesListCard />
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* //coments  */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="">
            <div className="flex-col gap-5 flex">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Card className="shadow-none border-none bg-gray-400/5">
                    <CardHeader>
                      <h5 className="text-xl font-bold">Name Is Here</h5>
                      <p className="text-sm">Date: 02/02/2022</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam ipsum, architecto dolorum pariatur odio qui?
                        Culpa consequatur omnis nemo rem impedit adipisci.
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
          <div className="">
            <div className="grid lg:sticky top-28 grid-cols-2 gap-8 bg-primary/5 px-10 py-8 rounded-3xl">
              <div className="col-span-2 ">
                <h1 className="text-xl font-bold text-primary text-center">
                  Leave A Comment
                </h1>
              </div>
              <div className="">
                <Label>Your Name</Label>
                <Input className="shadow-none bg-white border-none" />
              </div>
              <div className="">
                <Label>Email ID</Label>
                <Input className="shadow-none bg-white border-none" />
              </div>
              <div className="col-span-2">
                <Label>Your Comment</Label>
                <Textarea className="h-24 bg-white border-none shadow-none" />
              </div>
              <div className="col-span-2 flex justify-start items-center">
                <Button>Post A Comment</Button>
              </div>
            </div>
          </div>
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
