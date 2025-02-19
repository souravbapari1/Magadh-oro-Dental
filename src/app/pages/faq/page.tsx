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
import { FrequentlyAskedDataTpye } from "./Faqs";
import { TabTitle } from "@/app/constant";

const FAQ_QUERY = gql`
  query FaqS {
    faqS {
      answer
      question
      documentId
    }
    mataData {
      FaqsMetaData {
        description
        title
      }
    }
  }
`;

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<FrequentlyAskedDataTpye>({
    query: FAQ_QUERY,
  });

  return {
    title: metadataResponse.data.mataData.FaqsMetaData.title + " " + TabTitle,

    description: metadataResponse.data.mataData.FaqsMetaData.description,
  };
};

async function page() {
  const { data } = await client.query<FrequentlyAskedDataTpye>({
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
