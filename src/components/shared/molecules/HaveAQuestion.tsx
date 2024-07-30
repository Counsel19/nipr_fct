import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

interface HaveAQuestionProps {}
const HaveAQuestion: FC<HaveAQuestionProps> = () => {
  return (
    <div className="flex mt-[10rem] flex-col  gap-8 justify-center items-center">
      <h4 className="uppercase text-[2.4rem] lg:text-[4rem] leading-[2.8rem] lg:leading-[4.4rem]">
        Have A Question?
      </h4>
      <p className=" text-base lg:text-[1.8rem] leading-[3.13rem]">
        Please reach out to us for more information.
      </p>
      <Link
        to={"/contact"}
        className={cn(
          buttonVariants({
            className: " bg-[#F6453C] text-white font-light rounded-[2rem]",
          })
        )}
      >
        CONTACT US
      </Link>
    </div>
  );
};

export default HaveAQuestion;
