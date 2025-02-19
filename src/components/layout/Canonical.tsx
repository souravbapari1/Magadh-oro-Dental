"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Canonical = () => {
  const pathname = usePathname();
  //   console.log(pathname);
  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    setCanonicalUrl(`https://magadhorodental.com${pathname}`);
  }, [pathname]);

  if (!canonicalUrl) return null;

  return <link rel="canonical" href={canonicalUrl} />;
};

export default Canonical;
