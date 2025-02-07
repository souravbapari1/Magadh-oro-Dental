import { Facebook, Mail, Menu, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { IoLogoYoutube, IoMailUnread } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import NavItem from "./NavItem";
function NavBar() {
  return (
    <>
      <div className="w-full h-8 bg-primary flex justify-between items-center ">
        <div className="container h-full flex md:justify-between justify-center items-center ">
          <div className="w-full md:justify-between justify-center md:flex hidden items-center h-full ">
            <div className="text-white h-full flex  justify-start items-center">
              <p className="text-xs font-semibold flex justify-start items-center gap-2">
                <IoMailUnread size={13} /> magadhorodentalclinic@gmail.com
              </p>
              <p className="text-xs font-semibold flex justify-start items-center gap-2 pl-5">
                <FaPhone size={11} /> +91 9135086087
              </p>
            </div>
          </div>
          <div className="flex md:justify-end justify-center items-center gap-4 text-white text-sm">
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <TbBrandInstagramFilled size={20} />
            </Link>
            <Link href="/">
              <FaSquareXTwitter />
            </Link>
            <Link href="/">
              <IoLogoYoutube size={17} />
            </Link>
            <Link href="/">
              <FaLinkedinIn size={17} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-white border-b sticky top-0 flex justify-center items-center z-40">
        <div className="container flex justify-between items-center h-full">
          <div className="lg:w-24 gap-4 flex justify-start items-center">
            <div className="lg:hidden block">
              <MobileNavBarItem>
                <Menu size={28} className="text-primary" />
              </MobileNavBarItem>
            </div>
            <Image
              alt="logo"
              src="/logo.jpeg"
              width={1000}
              height={1000}
              className="object-contain h-14 w-auto"
            />
          </div>
          <div className="h-full lg:flex hidden justify-center items-center gap-4 font-[550] text-sm">
            <NavItem />
          </div>
          <div className="">
            <Button className=" shadow-none rounded-none" size="sm">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MobileNavBarItem({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Image
              alt="logo"
              src="/logo.jpeg"
              width={1000}
              height={1000}
              className="object-contain h-14 w-auto"
            />
          </SheetTitle>
        </SheetHeader>
        <NavItem />
      </SheetContent>
    </Sheet>
  );
}
