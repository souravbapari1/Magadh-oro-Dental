import BookNow from "@/components/layout/BookNow";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import VideoSlider from "@/components/layout/VideoSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Magadh oro Dental",
};

const FAQ_QUERY = gql`
  query FaqS {
    faqS {
      answer
      question
      documentId
    }
  }
`;

async function page() {
  const { data } = await client.query<{
    faqS: {
      answer: string;
      question: string;
      documentId: string;
    }[];
  }>({
    query: FAQ_QUERY,
  });

  return (
    <div>
      <PageHeader path="Pages / FAQ" title="Frequently Asked Questions" />
      <div className="container py-20">
        <div className="grid max-w-[600px] mx-auto gap-5">
          {data.faqS.map((e, index) => (
            <Accordion type="single" key={index + e.documentId} collapsible>
              <AccordionItem
                value="item-1"
                className="bg-primary/5 px-6  rounded-xl shadow-sm shadow-gray-600/5"
              >
                <AccordionTrigger>{e.question}</AccordionTrigger>
                <AccordionContent>{e.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <ReviewsSlide />
      <VideoSection />

      <BookNow />
      <Footer />
    </div>
  );
}

export default page;
