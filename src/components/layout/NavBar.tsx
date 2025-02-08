import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaGoogle, FaPhone, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube, IoMailUnread } from "react-icons/io5";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { Button } from "../ui/button";
import MobileNavBarItem from "./MobileNavBarItem";
import NavItem from "./NavItem";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { TopHeaderData } from "./interface/NavBar";

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

async function NavBar() {
  const { data } = await client.query<TopHeaderData>({
    query: TopDataQuery,
  });

  return (
    <>
      <div className="w-full h-8 bg-primary flex justify-between items-center ">
        <div className="container h-full flex md:justify-between justify-center items-center ">
          <div className="w-full md:justify-between justify-center md:flex hidden items-center h-full ">
            <div className="text-white h-full flex  justify-start items-center">
              <p className="text-xs font-semibold flex justify-start items-center gap-2">
                <IoMailUnread size={13} /> {data?.headerTop?.TopBar?.Email}
              </p>
              <p className="text-xs font-semibold flex justify-start items-center gap-2 pl-5">
                <FaPhone size={11} /> +{data?.headerTop?.TopBar?.Mobile}
              </p>
            </div>
          </div>
          <div className="flex md:justify-end justify-center items-center gap-4 text-white text-sm">
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
            <Link href="/contact">
              <Button className=" shadow-none rounded-none" size="sm">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
