import { LucideClock4, Phone } from "lucide-react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function CallSection() {
  return (
    <div className="w-full border-b border-t border-primary/20">
      <div className="container">
        <div className="flex lg:justify-between justify-center items-center lg:py-5 py-14 lg:flex-nowrap flex-wrap gap-10">
          <div className="w-full h-20  flex md:flex-row flex-col md:justify-start justify-center md:text-left text-center items-center gap-4">
            <div className="">
              <div className="w-11 text-white h-11 rounded-xl bg-primary flex justify-center items-center">
                <Phone size={20} />
              </div>
            </div>
            <div className="flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center ">
              <p className="font-bold text-primary">Need Dental Services ?</p>

              <p className="text-sm text-primary/60">
                Call us on{" "}
                <span className="text-primary font-semibold">
                  {" "}
                  +91 9798999722
                </span>
              </p>
            </div>
          </div>

          <div className="w-full h-20  flex md:flex-row flex-col md:justify-start justify-center md:text-left text-center items-center gap-4 ">
            <div className="">
              <div className="w-11 text-white h-11 rounded-xl bg-primary flex justify-center items-center">
                <LucideClock4 size={20} />
              </div>
            </div>
            <div className="flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center ">
              <p className="font-bold text-primary">Opening Hours</p>

              <p className="text-sm text-primary/60 ">
                Mon to Sat
                <span className="text-primary font-semibold">
                  {" "}
                  9:00AM to 9:00PM
                </span>
              </p>
            </div>
          </div>

          <div className="w-full h-20  flex md:flex-row flex-col md:justify-start justify-center md:text-left text-center items-center gap-4 ">
            <div className="">
              <div className="w-11 text-white h-11 rounded-xl bg-primary flex justify-center items-center">
                <MdOutlineMarkEmailUnread size={22} />
              </div>
            </div>
            <div className="flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center ">
              <p className="font-bold text-primary">Schedule Appointment</p>

              <p className="text-sm text-primary/60">
                Mail us :
                <span className="text-primary font-semibold">
                  {" "}
                  appointment@domain.com{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallSection;
