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
import AlertVideo from "@/components/layout/AlertVideo";

const geistSans = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magadh oro Dental - Implant & Orthodontic Clinic",
  description:
    "At Magadh Oro Dental, we believe that everyone deserves a beautiful, confident smile. Our clinics in Patna specializes in Invisible braces, Root canals, Cosmetic and laser dentistry, Maxillofacial and gum's surgery, Dental implants, Kids dentistry and Full mouth rehablitation. offering a wide range of advanced dental solutions designed to enhance your smile and boost your inner confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
