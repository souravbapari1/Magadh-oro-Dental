import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function HomeFaqs() {
  return (
    <div className="bg-primary/5 py-16 mt-20">
      <div className="container grid md:grid-cols-2 md:gap-20 gap-10">
        <div className="">
          <div className="w-full  sticky top-28">
            <div className="flex  md:justify-start justify-center items-center gap-2 opacity-80 ">
              <Image
                src="/teeth.svg"
                width={1000}
                height={1000}
                alt="About Us"
                className="object-contain w-4 h-4 "
              />
              <p className="text-primary font-semibold">Faqs</p>
            </div>
            <h1 className="md:text-3xl text-2xl font-bold text-gray-900 mt-3 md:text-left text-center ">
              Everything you need to know about our dental clinic
            </h1>
            <p className="md:text-sm text-xs md:text-left text-center mt-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              incidunt perferendis quo ab hic adipisci temporibus, dignissimos
              est eveniet doloremque voluptas doloribus sequi quam deserunt
              vitae molestiae, explicabo omnis autem.
            </p>
            <div className="lg:w-[75%] mt-5 bg-white p-8 shadow-sm shadow-gray-600/5 rounded-3xl flex justify-start items-start gap-5">
              <div className="w-20">
                <Image
                  src="/call.svg"
                  width={1000}
                  height={1000}
                  alt="About Us"
                  className="object-contain w-14 h-14 "
                />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p className="font-normal text-gray-600">
                  We always take care of your smile
                </p>
                <h2 className="text-xl font-bold text-primary">
                  24/7 Emergency
                </h2>
                <h5 className="text-sm text-primary/20">
                  Call us at{" "}
                  <span className="font-semibold text-primary/80">
                    1234567890
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* // Accordion */}
        <div className="flex w-full flex-col gap-3 md:mt-8">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="bg-white px-6  rounded-xl shadow-sm shadow-gray-600/5"
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
    </div>
  );
}

export default HomeFaqs;
