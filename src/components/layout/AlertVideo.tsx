"use client";
import React, { ReactNode, useState, useRef, useEffect } from "react";

function AlertVideo({
  children,
  video,
}: {
  children: ReactNode;
  video: string;
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
            className="w-[80vw] max-w-4xl bg-primary md:p-4 p-2 rounded-3xl shadow-lg transform transition-transform duration-300 ease-in-out scale-100"
          >
            <iframe
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
              className="aspect-video w-full rounded-3xl"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AlertVideo;
