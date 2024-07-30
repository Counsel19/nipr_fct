import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

interface MemberTypeCardProps {
  title: string;
  description: string;
  slug: string;
}
const MemberTypeCard: FC<MemberTypeCardProps> = ({
  description,
  slug,
  title,
}) => {
  return (
    <div className="p-8  transition-all duration-1000  ease-out cursor-pointer space-y-8 border shadow-sm group ">
      <div className="flex justify-between items-center">
        <h4 className="text-[3rem] uppercase text-[#E8362B] leading-[5.25rem] tracking-[0.3rem]">
          {title}
        </h4>
        <Link
          className={cn(
            buttonVariants({
              className: "capitalize bg-primary text-white",
            })
          )}
          to={`/membership/${slug}`}
        >
          {slug.split("-").join(" ")}
        </Link>
      </div>
      <p className=" hidden group-hover:flex text-2xl leading-[3rem] transition-all duration-1000  ease-out">
        {description}
      </p>
    </div>
  );
};

export default MemberTypeCard;
