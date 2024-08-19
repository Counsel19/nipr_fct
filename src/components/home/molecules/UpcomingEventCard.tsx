import { IEvent } from "@/types/event";
import { format } from "date-fns";
import { Calendar, LocateIcon } from "lucide-react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface UpcomingEventCardProps {
  data: IEvent;
}
const UpcomingEventCard: FC<UpcomingEventCardProps> = ({
  data: { poster_image, id, title, description, location, start_date },
}) => {
  return (
    <Link
      to={`/events/${id}`}
      className="flex flex-col bg-white gap-2 w-full h-full"
    >
      <div className="relative w-full h-[32.2rem] ">
        <img
          src={poster_image as string}
          alt={poster_image as string}
          className="absolute object-cover top-0 bottom-0 right-0 left-0"
        />
        <div className="absolute right-0 bottom-0 w-[90%] sm:w-[60%] space-y-4 p-4 lg:h-[9rem] bg-white text-[#474747]">
          <div className="grid grid-cols-[1fr_5fr] items-center">
            <span className="lg:w-[2.8rem] lg:h-[2.8rem] rounded-full border border-white grid place-content-center">
              <Calendar size={16} />
            </span>
            <p className="text-[1.2rem] lg:text-[1.6rem]">
              {format(start_date, "dd/MM/yyyy")}
            </p>
          </div>
          <div className="grid grid-cols-[1fr_5fr] items-center">
            <span className=" w-[2.8rem] h-[2.8rem] rounded-full border border-white grid place-content-center">
              <LocateIcon size={16} />
            </span>
            <p className="text-[1.2rem] lg:text-[1.6rem]">{location}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[3fr_4fr] gap-[0.5rem] lg:gap-[1rem] items-center lg:py-8">
        <h3 className="font-semibold text-2xl lg:text-[2.3rem] text-primary leading-[2.3rem] lg:leading-[3.73rem]">
          {title}
        </h3>
        <p className="text-base lg:text-[1.4rem]  leading-[2.1rem]lg:leading-[2.4rem]">
          {description.slice(0, 100)}...
        </p>
      </div>
    </Link>
  );
};

export default UpcomingEventCard;
