"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function MobileNavBarItem({ children }: { children: React.ReactNode }) {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setisOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setisOpen}>
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

export default MobileNavBarItem;
