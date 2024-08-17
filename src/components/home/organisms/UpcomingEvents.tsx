import { Button } from "@/components/ui/button";
import React, { FC, useEffect } from "react";
import UpcomingEventCard from "../molecules/UpcomingEventCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import PageLoader from "@/components/shared/PageLoader";
import { fetchAllEvents } from "@/lib/redux/slices/events/eventsThunk";

interface UpcomingEventsProps {}
const UpcomingEvents: FC<UpcomingEventsProps> = () => {
  const { upcomingEvents } = useSelector((store: RootState) => store.events);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(fetchAllEvents());
      } catch (error) {
        console.log(error);
      }
    };

    if (!upcomingEvents) getData();
  }, []);
  return (
    <div className="w-frame space-y-12">
      <div className="flex justify-between items-center">
        <h3 className=" text-[2.4rem] leading-[3.2rem] lg:text-[3.45rem] text-[#E8362B]">
          Upcoming Events
        </h3>
        <Button className="rounded-none bg-white text-[1.2rem] uppercase hover:bg-rose-50 text-primary">
          View All
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {upcomingEvents && upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <React.Fragment key={event.id}>
              <UpcomingEventCard data={event} />
            </React.Fragment>
          ))
        ) : upcomingEvents && upcomingEvents.length == 0 ? (
          <div className="my-8 p-8 border w-full col-span-3">
            <h3 className="text-2xl font-semibold">
              No Upcoming Events at the Moment
            </h3>
          </div>
        ) : (
          <div className="col-span-2">
            <PageLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
