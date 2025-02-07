import BookNow from "@/components/layout/BookNow";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSlider from "@/components/layout/VideoSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

function page() {
  return (
    <div>
      <PageHeader path="Pages / FAQ" title="Frequently Asked Questions" />
      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="bg-primary/5 px-6  rounded-xl shadow-sm shadow-gray-600/5"
                >
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    adipisci natus, eos nostrum facere fuga, libero ex quis
                    vitae atque iusto, aliquid impedit soluta sequi. Eum
                    expedita temporibus quaerat? Eligendi?
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
        </div>
      </div>
      <ReviewsSlide />
      <VideoSlider />

      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
