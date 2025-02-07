import AboutUs from "@/components/layout/AboutUs";
import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import VideoSlider from "@/components/layout/VideoSlider";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import DoctorCard from "./DoctorCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function page() {
  const images = [
    "https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259",
    "https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259",
    "https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259",
    "https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259",
    "https://investin.org/cdn/shop/articles/jafar-ahmed-E285pJbC4uE-unsplash.jpg?v=1634293259",
  ];
  return (
    <div className="">
      <PageHeader title="About Us" path="About Us" />
      <div className="container pt-20 md:text-lg  text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
        perspiciatis sunt similique, tempore ab earum accusamus harum veniam ut
        officiis omnis, consectetur ipsum accusantium, iste velit amet
        praesentium odio exercitationem?
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        quasi non nobis minima itaque, vitae veniam delectus quos libero quo,
        saepe reiciendis animi molestias distinctio, numquam inventore fuga?
        Quod tenetur reprehenderit iste eos expedita optio aperiam vitae nisi
        deleniti. Quod obcaecati aliquid accusantium reprehenderit vitae maxime
        repudiandae culpa eos voluptate asperiores totam unde nihil, sequi
        quidem odit explicabo hic sint voluptatum, omnis soluta saepe officiis?
        Illo aperiam porro sequi ullam quos magni accusamus incidunt. Dolorum
        blanditiis placeat perferendis doloremque quam autem vero dignissimos
        corrupti nisi eos quos magnam et voluptate, nihil, ea enim vel
        consectetur architecto, recusandae quo atque sint!
      </div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5  my-10">
          <div className="col-span-2 row-span-2">
            <Image
              src={images[0]}
              width={1000}
              height={1000}
              alt="Big Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-2">
            <Image
              src={images[1]}
              width={500}
              height={1000}
              alt="Medium Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src={images[2]}
              width={500}
              height={500}
              alt="Small Image 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src={images[3]}
              width={500}
              height={500}
              alt="Small Image 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-1 row-span-1 md:block hidden">
            <Image
              src={images[3]}
              width={500}
              height={500}
              alt="Small Image 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container my-20">
        <div className="flex  justify-center items-center gap-2 opacity-80 ">
          <Image
            src="/teeth.svg"
            width={1000}
            height={1000}
            alt="About Us"
            className="object-contain w-4 h-4 "
          />
          <p className="text-primary font-semibold">Our Doctors</p>
        </div>
        <h1 className="text-gray-800 text-3xl font-bold mt-2 text-center">
          Meet Our Experienced Dentists
        </h1>
        <p className="max-w-[750px] mx-auto text-center text-sm text-gray-500 my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis hic
          exercitationem esse totam ipsa tempore vero, nihil culpa sapiente ea
          amet, error cum odit dolore, nobis quidem pariatur consectetur.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button className="rounded-full px-8 shadow-none">
            Meet All Doctors{" "}
          </Button>
        </div>
      </div>
      <HomeFaqs />
      <WhyChooseUs />
      <VideoSlider />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
