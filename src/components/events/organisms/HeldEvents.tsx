import UpcomingEventCard from "@/components/home/molecules/UpcomingEventCard";
import React, { FC } from "react";

const allEvents = [
  {
    id: "1",
    image: "/images/nipr_annual_conf.jpg",
    theme: "Annual general meeting",
    slug: "Annual-general-meeting",
    description:
      "This is the 2024 Annual General Meeting. All members are encouraged to attend.",
    venue: "NIPR Headquarters",
    date: "2024-06-10T11:43:35.000000Z",
  },
  {
    id: "2",
    image: "/images/nipr_annual_conf.jpg",
    theme: "Annual general meeting",
    slug: "Annual-general-meeting",
    description:
      "This is the 2024 Annual General Meeting. All members are encouraged to attend.",
    venue: "NIPR Headquarters",
    date: "2024-06-10T11:43:35.000000Z",
  },
];

interface HeldEventsProps {}
const HeldEvents: FC<HeldEventsProps> = () => {
  return (
    <div className="w-frame space-y-12">
      <div className="grid lg:grid-cols-2 gap-10">
        {allEvents.map((event) => (
          <React.Fragment key={event.id}>
            <UpcomingEventCard {...event} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HeldEvents;
