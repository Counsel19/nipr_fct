import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

interface JoinNiprFctProps {
  bgImage: string;
  showPattarn?: boolean;
}

const JoinNiprFct: FC<JoinNiprFctProps> = ({ bgImage, showPattarn }) => {
  return (
    <div className="relative mb-[10rem]">
      <div className={`h-[90.5rem] relative flex items-center bg-cover bg-no-repeat ${bgImage} `}>
        <div className="bg-[#00000033] absolute top-0 right-0 bottom-0 left-0" />
        <div className="absolute left-0 w-[40%] h-full bg-primary" />

        <div className="relative w-frame z-10 text-white space-y-12">
          <h2 className="text-[9.6rem] font-semibold leading-[13.16rem]">
            Join NIPR FCT Chapter
          </h2>
          <p className="text-2xl leading-[2.34rem] w-[40%]">
            Become part of Nigeria's leading community of PR professionals. NIPR
            membership offers valuable benefits to enhance your career and
            network.
          </p>

          <div className="text-2xl leading-[2.34rem] w-[40%]">
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
                  " bg-white text-primary hover:bg-rose-100 font-playfairDisplay text-2xl h-[6.4rem]",
              })
            )}
          >
            Join Us Now
          </Link>
        </div>
      </div>
      {showPattarn && (
        <img
          src={"/images/bgPatterns/pattarn_rect.svg"}
          alt="pattarn_rect"
          className="w-fit absolute h-fit -bottom-[10rem] right-0 -z-10"
        />
      )}
    </div>
  );
};

export default JoinNiprFct;
