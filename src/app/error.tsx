"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { MdError } from "react-icons/md";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center gap-3 flex-col h-[80vh]">
      <MdError size={60} className="text-red-600" />
      <h2 className="text-3xl font-bold ">Something went wrong!</h2>
      <p>{error.message}</p>
      <Button
        className="mt-7"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
