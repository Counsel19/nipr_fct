import HeldEvents from "@/components/events/organisms/HeldEvents";
import UpcomingEvents from "@/components/home/organisms/UpcomingEvents";
import HaveAQuestion from "@/components/shared/molecules/HaveAQuestion";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { fetchAllEvents } from "@/lib/redux/slices/events/eventsThunk";
import { AppDispatch } from "@/lib/redux/store";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface EventsProps {}
const Events: FC<EventsProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(fetchAllEvents());
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className=" space-y-20 relative">
      <PageTitle title="Events" />

      <div className="space-y-20  relative">
        <div className="w-frame">
          <p className="  relative font-poppins text-[1.6rem] lg:text-[2.4rem] leading-[3.6rem] lg:w-[60%]">
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
