import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { BlogPostData } from "@/app/blogs/[id]/blogData";
import { strApi } from "@/graphql/client";
import Link from "next/link";

function DoctorSmallCard({
  doctor,
}: {
  doctor: BlogPostData["blogPosts"][number]["doctors"][number];
}) {
  return (
    <Link href={`/doctors/${doctor.slug}`}>
      <Card className="shadow-none p-3 rounded-3xl bg-primary/5 border-none">
        <div className="flex items-center justify-between gap-4">
          <Image
            src={strApi + doctor.doctor_image.url}
            alt="user"
            width={150}
            height={150}
            className="w-20 h-20 rounded-3xl  object-cover object-top"
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
              {doctor.name}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-500">
              {doctor.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default DoctorSmallCard;
