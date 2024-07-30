import { format } from "date-fns";
import { Calendar, LocateIcon } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface UpcomingEventCardProps {
  date: string;
  venue: string;
  theme: string;
  description: string;
  image: string;
  slug: string;
}
const UpcomingEventCard: FC<UpcomingEventCardProps> = ({
  date,
  description,
  image,
  theme,
  venue,
  slug,
}) => {
  return (
    <Link to={`${slug}`} className="flex flex-col bg-white gap-2 w-full h-full">
      <div className="relative w-full h-[32.2rem] ">
        <img
          src={image}
          alt={image}
          className="absolute object-cover top-0 bottom-0 right-0 left-0"
        />
        <div className="absolute right-0 bottom-0 w-[90%] sm:w-[60%] space-y-4 p-4 lg:h-[9rem] bg-white text-[#474747]">
          <div className="grid grid-cols-[1fr_5fr] items-center">
            <span className="lg:w-[2.8rem] lg:h-[2.8rem] rounded-full border border-white grid place-content-center">
              <Calendar size={16} />
            </span>
            <p className="text-[1.2rem] lg:text-[1.6rem]">{format(date, "dd/mm/yyyy")}</p>
          </div>
          <div className="grid grid-cols-[1fr_5fr] items-center">
            <span className=" w-[2.8rem] h-[2.8rem] rounded-full border border-white grid place-content-center">
              <LocateIcon size={16} />
            </span>
            <p className="text-[1.2rem] lg:text-[1.6rem]">{venue}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[3fr_4fr] lg:gap-[1rem] items-center lg:p-8">
        <h3 className="font-semibold text-2xl lg:text-[2.8rem] text-primary leading-[2.6rem] lg:leading-[3.73rem]">
          {theme}
        </h3>
        <p className="text-base lg:text-[1.6rem]  leading-[2.1rem]lg:leading-[2.4rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default UpcomingEventCard;
