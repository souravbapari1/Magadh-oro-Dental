import client from "@/graphql/client";
import { LucideClock4, Phone } from "lucide-react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CallSectionData } from "./interface/CallSection";
import { gql } from "@apollo/client";

const CALL_SECTION = gql`
  query Email {
    homeHeader {
      email {
        content
        id
        title
      }
      timing {
        content
        id
        title
      }
      call {
        content
        id
        title
      }
    }
  }
`;
async function CallSection() {
  const { data } = await client.query<CallSectionData>({
    query: CALL_SECTION,
  });

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
              <p
                className="font-bold text-primary"
                dangerouslySetInnerHTML={{
                  __html: data?.homeHeader.call.title,
                }}
              />

              <p
                className="text-sm text-primary/60"
                dangerouslySetInnerHTML={{
                  __html: data?.homeHeader.call.content,
                }}
              />
            </div>
          </div>

          <div className="w-full h-20  flex md:flex-row flex-col md:justify-start justify-center md:text-left text-center items-center gap-4 ">
            <div className="">
              <div className="w-11 text-white h-11 rounded-xl bg-primary flex justify-center items-center">
                <LucideClock4 size={20} />
              </div>
            </div>
            <div className="flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center ">
              <p
                className="font-bold text-primary"
                dangerouslySetInnerHTML={{
                  __html: data?.homeHeader.timing.title,
                }}
              />

              <p
                className="text-sm text-primary/60"
                dangerouslySetInnerHTML={{
                  __html: data?.homeHeader.timing.content,
                }}
              />
            </div>
          </div>

          <div className="w-full h-20  flex md:flex-row flex-col md:justify-start justify-center md:text-left text-center items-center gap-4 ">
            <div className="">
              <div className="w-11 text-white h-11 rounded-xl bg-primary flex justify-center items-center">
                <MdOutlineMarkEmailUnread size={22} />
              </div>
            </div>
            <div className="flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center ">
              <p
                className="font-bold text-primary"
                dangerouslySetInnerHTML={{
                  __html: data?.homeHeader.email.title,
                }}
              />

              <p
                className="text-sm text-primary/60"
                dangerouslySetInnerHTML={{
                  __html: data?.homeHeader.email.content,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallSection;
