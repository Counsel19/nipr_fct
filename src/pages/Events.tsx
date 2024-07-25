import HeldEvents from "@/components/events/organisms/HeldEvents";
import UpcomingEvents from "@/components/home/organisms/UpcomingEvents";
import HaveAQuestion from "@/components/shared/molecules/HaveAQuestion";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface EventsProps {}
const Events: FC<EventsProps> = () => {
  return (
    <div className=" space-y-20 relative">
      <PageTitle title="Events" />
      <img
        src={"/images/bgPatterns/pattarn_rect.svg"}
        alt="pattarn_rect"
        className="absolute  right-0 w-fit h-fit z-0 "
      />

      <div className="space-y-20  relative">
        <div className="w-frame">
          <p className="  relative font-poppins text-[2.4rem] leading-[3.6rem] w-[60%]">
            Through our regional, national and special interest groups, we run a
            varied programme of events around the UK. We also hold an Annual
            Conference as well as several Awards events.
          </p>
        </div>
        <HeldEvents />
        <UpcomingEvents />
      </div>
      <HaveAQuestion />
    </div>
  );
};

export default Events;
