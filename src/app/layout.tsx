import type { Metadata } from "next";
import { Geist_Mono, Jost } from "next/font/google";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";

import NavBar from "@/components/layout/NavBar";
import Client from "./client";
import NextTopLoader from "nextjs-toploader";
import AlertVideo from "@/components/layout/AlertVideo"; // Ensure this is used if needed
import FloatIcon from "@/components/layout/FloatIcon";
import Canonical from "@/components/layout/Canonical";
import Head from "next/head";

const geistSans = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Uncomment and use this metadata if needed
export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Canonical />
      </Head>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader />
        <Client>
          <div className="relative">
            <NavBar />
            {children}
          </div>
        </Client>
        <FloatIcon />
      </body>
    </html>
  );
}
