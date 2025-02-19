import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const FloatIcon = () => {
  return (
    <div className="fixed z-30 bottom-0 left-0 shadow-md  border-primary">
      <Link
        href={"tel:9798999722"}
        target="_blank"
        className="w-14 h-14 bg-white  shadow-md flex items-center justify-center cursor-pointer"
      >
        <PhoneCall className="text-2xl text-primary" />
      </Link>
      <Link
        href={
          "https://api.whatsapp.com/send?phone=+919135086087&text=Hello,%20Dr.%20Abhishek"
        }
        target="_blank"
        className="w-14 h-14 bg-green-700  shadow-md flex items-center justify-center cursor-pointer"
      >
        <FaWhatsapp className="text-2xl text-white" />
      </Link>
    </div>
  );
};

export default FloatIcon;
