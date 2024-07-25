import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface QuickActionsCardProps {
  image: string;
  text: string;
  link: string;
}
const QuickActionsCard: FC<QuickActionsCardProps> = ({ image, link, text }) => {
  return (
    <Link to={link} className="relative  h-[22.25rem] flex">
      <img
        src={image}
        alt={text}
        className="absolute top-0 right-0 left-0 bottom-0 object-cover "
      />
      <div className=" bg-image-gradient absolute top-0 right-0 left-0 bottom-0 " />

      <div className=" w-full flex justify-between items-center relative text-2xl text-white p-8 self-end ">
        <h6>{text}</h6>
        <button className="bg-[#FA726B] w-[2.8rem] h-[2.8rem] rounded-full grid place-content-center">
          <ChevronRight />
        </button>
      </div>
    </Link>
  );
};

export default QuickActionsCard;
