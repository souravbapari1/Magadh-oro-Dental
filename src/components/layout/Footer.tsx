import client from "@/graphql/client";
import { gql } from "@apollo/client";
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
import { FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TopHeaderData } from "./interface/NavBar";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const TopDataQuery = gql`
  query TopBar {
    headerTop {
      TopBar {
        Email
        Mobile
        socailLinks {
          facebook {
            id
            link_text
            link_url
            open_on
          }
          google {
            id
            link_text
            link_url
            open_on
          }
          instagram {
            id
            link_text
            link_url
            open_on
          }
          linkedin {
            id
            link_text
            link_url
            open_on
          }
          twitter {
            id
            link_text
            link_url
            open_on
          }
          youtube {
            id
            link_text
            link_url
            open_on
          }
          id
        }
      }
    }
  }
`;

async function Footer() {
  const { data } = await client.query<TopHeaderData>({
    query: TopDataQuery,
  });

  return (
    <div className="border-t border-white/10 ">
      <div className="container ">
        <div className="w-full grid lg:grid-cols-6  md:gap-3 gap-6 md:py-20 py-10 ">
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
              <div className="w-8 h-8 rounded-full bg-primary hidden md:flex justify-center items-center text-secondary  ">
                <PhoneCall size={16} />
              </div>
              <p className=" text-sm md:text-xl ">
                {data?.headerTop?.TopBar?.Mobile}
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 mt-5">
              <div className="w-8 h-8 rounded-full  bg-primary hidden md:flex justify-center items-center text-secondary  ">
                <MdEmail size={16} />
              </div>
              <p className=" text-sm md:text-xl ">
                {data?.headerTop?.TopBar?.Email}
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="grid text-left grid-cols-2 gap-5">
              <div className="">
                <h3 className="text-xl font-bold ">Quick Links</h3>
                <div className="mt-5">
                  <ul className="flex flex-col gap-3  ">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <h3 className="text-xl font-bold ">Support</h3>
                <div className="mt-5">
                  <ul className="flex flex-col gap-3  ">
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/pages/terms-and-service">
                        Terms And Services
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
            <h3 className="text-xl font-bold ">Follow Us</h3>
            <div className="flex  lg:grid grid-cols-3 gap-6 mt-6">
              {data.headerTop.TopBar.socailLinks.facebook && (
                <Link
                  target={data.headerTop.TopBar.socailLinks.facebook.open_on}
                  href={data?.headerTop.TopBar.socailLinks.facebook.link_url}
                >
                  <FaFacebook />
                </Link>
              )}
              {data.headerTop.TopBar.socailLinks.instagram && (
                <Link
                  target={data.headerTop.TopBar.socailLinks.instagram.open_on}
                  href={data?.headerTop.TopBar.socailLinks.instagram.link_url}
                >
                  <TbBrandInstagramFilled size={20} />
                </Link>
              )}
              {data.headerTop.TopBar.socailLinks.twitter && (
                <Link
                  target={data.headerTop.TopBar.socailLinks.twitter.open_on}
                  href={data.headerTop.TopBar.socailLinks.twitter.link_url}
                >
                  <FaSquareXTwitter />
                </Link>
              )}

              {data.headerTop.TopBar.socailLinks.youtube && (
                <Link
                  target={data.headerTop.TopBar.socailLinks.youtube.open_on}
                  href={data.headerTop.TopBar.socailLinks.youtube.link_url}
                >
                  <IoLogoYoutube size={17} />
                </Link>
              )}
              {data.headerTop.TopBar.socailLinks.google && (
                <Link
                  target={data.headerTop.TopBar.socailLinks.google.open_on}
                  href={data.headerTop.TopBar.socailLinks.google.link_url}
                >
                  <FaGoogle size={16} />
                </Link>
              )}
              {data.headerTop.TopBar.socailLinks.linkedin && (
                <Link
                  target={data.headerTop.TopBar.socailLinks.linkedin.open_on}
                  href={data.headerTop.TopBar.socailLinks.linkedin.link_url}
                >
                  <FaLinkedinIn size={17} />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="border-t w-full h-20 flex justify-center items-center text-center">
          <p className="text-sm text-primary">
            Copyright © {new Date().getFullYear()} Magadh oro Dental. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
