"use client";
import Image from "next/image";
import React, { ReactNode, useState, useRef, useEffect } from "react";

function AlerImage({
  children,
  image,
}: {
  children: ReactNode;
  image: string;
}) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out">
          <div
            ref={modalRef}
            className="max-w-[95vw]  bg-primary md:p-4 p-2 rounded-3xl shadow-lg transform transition-transform duration-300 ease-in-out scale-100"
          >
            <Image
              src={image}
              alt="Image"
              width={2000}
              height={2000}
              className="w-auto  h-full rounded-3xl  max-h-[80vh] object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AlerImage;
