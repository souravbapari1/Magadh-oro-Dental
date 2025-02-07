import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneCall,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="border-t border-white/10 ">
      <div className="container ">
        <div className="w-full grid lg:grid-cols-6 md:grid-cols-3 md:gap-3 gap-6 md:py-20 py-10 ">
          <div className=" lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                className="h-16 mb-5 w-auto md:-mt-5"
                width={1000}
                height={1000}
                alt=""
              />
            </Link>
            <div className="flex justify-start items-center gap-4 mt-6">
              <div className="w-8 h-8 rounded-full bg-primary flex justify-center items-center text-secondary  ">
                <PhoneCall size={16} />
              </div>
              <p className=" text-xl ">+91-9315509430</p>
            </div>
            <div className="flex justify-start items-center gap-4 mt-5">
              <div className="w-8 h-8 rounded-full bg-primary flex justify-center items-center text-secondary  ">
                <MdEmail size={16} />
              </div>
              <p className=" text-xl ">info@idealedesigns.com</p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid text-left grid-cols-2 gap-5">
              <div className="">
                <h1 className="text-xl font-bold ">Quick Links</h1>
                <div className="mt-5">
                  <ul className="flex flex-col gap-3  ">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h1 className="text-xl font-bold ">Support</h1>
                <div className="mt-5">
                  <ul className="flex flex-col gap-3  ">
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/pages/terms-conditions">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-xl font-bold ">Follow Us</h1>
            <div className="flex justify-start items-center gap-6 mt-6">
              <Link
                href="https://www.facebook.com/idealedesigns"
                target="_blank"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/idealedesigns/"
                target="_blank"
              >
                <Instagram size={20} />
              </Link>
              <Link href="https://x.com/idealedesigns" target="_blank">
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/ideal-e-designs"
                target="_blank"
              >
                <Linkedin size={20} />
              </Link>
              <Link href="/not-found" target="_blank">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t w-full h-20 flex justify-center items-center text-center">
          <p className="text-sm text-primary">
            Copyright © {new Date().getFullYear()} Ideal e Designs. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
