import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "./NavLink";

function NavItem() {
  return (
    <ul className="flex lg:justify-center lg:mt-0 mt-4 lg:items-center lg:gap-6 gap-2 lg:flex-row flex-col text-sm text-gray-500 font-[550] h-full  ">
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink exact={true} className=" h-full block" href="/">
          Home
        </NavLink>
      </li>
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink href="/about">About</NavLink>
      </li>
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink href="/services">Services</NavLink>
      </li>
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink href="/watch">Watch</NavLink>
      </li>
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink href="/doctors">Doctors</NavLink>
      </li>
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink href="/pricing">Pricing</NavLink>
      </li>
      <li className="hover:text-primary  transition-all lg:border-b-0  border-b lg:pb-0 pb-3">
        <NavLink href="/blogs">Blogs</NavLink>
      </li>
      <li className="  relative cursor-pointer lg:border-b-0 border-b lg:pb-0 pb-3  lg:h-full group flex lg:justify-center items-center">
        <span className="flex lg:justify-center justify-between w-full items-center gap-2 group-hover:text-primary transition-all ">
          Pages{" "}
          <IoIosArrowDown className="mt-1 group-hover:rotate-180 transition-all duration-500" />
        </span>
        <ul className="absolute  lg:w-52 w-full lg:top-14 top-8 shadow-md p-6 bg-primary text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hidden group-hover:flex flex-col gap-3 lg:rounded-2xl  transition-all duration-500">
          <li>
            <Link href="/pages/before-after">Before After</Link>
          </li>
          <li>
            <Link href="/pages/our-clinics">Our Clinics</Link>
          </li>
          <li>
            <Link href="/pages/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/pages/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/pages/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/pages/terms-and-service">Terms and Service</Link>
          </li>
        </ul>
      </li>
      <li className="lg:border-b-0 border-b lg:pb-0 pb-3 hover:text-primary  transition-all">
        <NavLink className="hover:text-primary" href="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavItem;
