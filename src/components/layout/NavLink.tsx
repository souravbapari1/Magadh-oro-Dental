"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
export const NavLink = ({
  children,
  href,
  className,
  exact = false,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  exact?: boolean;
}) => {
  const param = usePathname();
  const isActive = () => {
    if (exact) {
      return param === href;
    }
    return param.startsWith(href);
  };
  return (
    <Link
      href={href}
      className={cn(className, isActive() ? "text-primary" : "")}
    >
      {children}
    </Link>
  );
};
