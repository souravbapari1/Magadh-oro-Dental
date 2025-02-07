import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import ImageSlider from "@/components/layout/ImageSlider";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import ServicesListCard from "@/components/layout/ServicesListCard";
import VideoSlider from "@/components/layout/VideoSlider";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader title="Teeth Implantation" path="Teeth Implantation" />
      <div className="container py-20">
        <div className="grid lg:grid-cols-3 lg:gap-20 gap-10">
          <div className="content lg:col-span-2">
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
          </div>
          <div className="">
            <div className="lg:sticky top-24">
              <ServicesListCard />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
