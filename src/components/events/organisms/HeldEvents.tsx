import UpcomingEventCard from "@/components/home/molecules/UpcomingEventCard";
import PageLoader from "@/components/shared/PageLoader";
import { RootState } from "@/lib/redux/store";
import React, { FC } from "react";
import { useSelector } from "react-redux";

interface HeldEventsProps {}
const HeldEvents: FC<HeldEventsProps> = () => {
  const { heldEvents } = useSelector((store: RootState) => store.events);

  return (
    <div className="w-frame space-y-12">
      <div className="grid lg:grid-cols-2 gap-10">
        {heldEvents && heldEvents.length > 0 ? (
          heldEvents.map((event) => (
            <React.Fragment key={event.id}>
              <UpcomingEventCard data={event} />
            </React.Fragment>
          ))
        ) : heldEvents && heldEvents.length == 0 ? (
          <h3> No Held Events at the Moment</h3>
        ) : (
          <div className="col-span-2">
          <PageLoader />
        </div>
        )}
      </div>
    </div>
  );
};

export default HeldEvents;
