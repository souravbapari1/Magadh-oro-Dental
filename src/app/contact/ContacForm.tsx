import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function ContactForm() {
  return (
    <div className=" border-white/10 bg-white/5 p-10 md:gap-10 gap-5 gap-x-5 mt-5 rounded-3xl grid md:grid-cols-2 backdrop-blur-xl">
      <Input
        className="rounded-xl text-xl p-7 shadow-none bg-primary/5 border-none"
        placeholder="First Name"
      />
      <Input
        className="rounded-xl text-xl p-7 shadow-none bg-primary/5 border-none"
        placeholder="Last Name"
      />
      <Input
        className="rounded-xl text-xl p-7 shadow-none bg-primary/5 border-none md:col-span-2"
        placeholder="Email ID"
      />
      <Textarea
        className="rounded-xl text-xl p-7 md:col-span-2 bg-primary/5 border-none shadow-none"
        placeholder="Write Message..."
      />
      <div className="md:col-span-2 flex justify-center items-center mt-2">
        <Button className="text-secondary py-6 font-semibold w-full px-8 mx-auto rounded-xl ">
          Send Message
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
