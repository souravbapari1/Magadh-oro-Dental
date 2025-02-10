"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { sendEmail } from "./action";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    let newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const mail = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    },
    onError: () => {
      toast.dismiss();
      toast.error("Error sending message");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      toast.dismiss();
      toast.loading("Sending Message...");
      mail.mutate({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      });
      // Add form submission logic here
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-white/10 bg-white/5 p-10 md:gap-3 gap-5 gap-x-5 mt-5 rounded-3xl grid md:grid-cols-2 backdrop-blur-xl"
    >
      <div className="md:col-span-2">
        <Input
          className="rounded-xl text-xl p-7 shadow-none bg-primary/5 border-none"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-xs px-1 mt-1">{errors.name}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <Input
          className="rounded-xl text-xl p-7 shadow-none bg-primary/5 border-none"
          placeholder="Email ID"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-xs px-1 mt-1">{errors.email}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <Input
          className="rounded-xl text-xl p-7 shadow-none bg-primary/5 border-none"
          placeholder="Mobile Number"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && (
          <p className="text-red-500 text-xs px-1 mt-1">{errors.mobile}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <Textarea
          className="rounded-xl text-xl p-7 md:col-span-2 bg-primary/5 border-none shadow-none"
          placeholder="Write Message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-500 text-xs px-1 mt-1">{errors.message}</p>
        )}
      </div>
      <div className="md:col-span-2 flex justify-center items-center mt-2">
        <Button
          type="submit"
          className="text-secondary py-6 font-semibold w-full px-8 mx-auto rounded-xl"
          disabled={mail.isPending}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
