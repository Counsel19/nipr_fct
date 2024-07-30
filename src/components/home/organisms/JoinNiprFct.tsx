import { buttonVariants } from "@/components/ui/button";
import { useTargetBreakpoint } from "@/hooks/useTargetBreakpoint";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface JoinNiprFctProps {
  bgImage: string;
  showPattarn?: boolean;
}

const JoinNiprFct: FC<JoinNiprFctProps> = ({ bgImage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useTargetBreakpoint({ setIsMobile, breakPoint: 1024 });
  return (
    <div className="relative mb-[10rem]">
      <div
        className={`lg:h-[67.5rem] relative flex items-center bg-cover bg-no-repeat  ${
          isMobile ? "bg-primary p-12" : bgImage
        } `}
      >
        <div className="bg-[#00000033] absolute top-0 right-0 bottom-0 left-0" />
        <div className="absolute left-0 lg:w-[40%] h-full bg-primary" />

        <div className="relative w-frame z-10 text-white space-y-12">
          <h2 className=" text-[2.4rem] lg:text-[8.6rem] font-semibold leading-[3.1rem] lg:leading-[13.16rem]">
            Join NIPR FCT Chapter
          </h2>
          <p className=" text-base lg:text-2xl leading-[2.34rem] lg:w-[40%]">
            Become part of Nigeria's leading community of PR professionals. NIPR
            membership offers valuable benefits to enhance your career and
            network.
          </p>

          <div className="text-base lg:text-2xl leading-[2.34rem] lg:w-[40%]">
            <h6>Benefits: </h6>
            <ul className="list-disc list-inside">
              <li>Professional certification</li>
              <li>Networking opportunities</li>
              <li>Access to exclusive events</li>
              <li>Continuing education resources </li>
              <li>Industry recognition</li>
            </ul>
          </div>

          <Link
            to={"/membership"}
            className={cn(
              buttonVariants({
                className:
                  " bg-white text-primary hover:bg-rose-100 font-playfairDisplay lg:text-2xl lg:h-[6.4rem]",
              })
            )}
          >
            Become a Member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinNiprFct;
