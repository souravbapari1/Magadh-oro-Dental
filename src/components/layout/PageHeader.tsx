import Link from "next/link";
import React from "react";

function PageHeader({
  path,
  title,
  bg,
}: {
  title: string;
  path: string;
  bg?: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg || "/page-header.jpg"})`,
      }}
      className="w-full h-72 bg-primary  bg-cover md:bg-center bg-left bg-no-repeat relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-primary/20 to-black flex justify-center items-center flex-col gap-4">
        <h1 className="md:text-4xl text-3xl container text-center font-semibold text-white">
          {title}
        </h1>
        <Link href="/" className="text-white/80 md:text-base text-sm">
          Home / {path}
        </Link>
      </div>
    </div>
  );
}

export default PageHeader;
