import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import UpcomingEventCard from "../molecules/UpcomingEventCard";

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
  {
    id: "3",
    image: "/images/nipr_annual_conf.jpg",
    theme: "Annual general meeting",
    slug: "Annual-general-meeting",
    description:
      "This is the 2024 Annual General Meeting. All members are encouraged to attend.",
    venue: "NIPR Headquarters",
    date: "2024-06-10T11:43:35.000000Z",
  },
  {
    id: "4",
    image: "/images/nipr_annual_conf.jpg",
    theme: "Annual general meeting",
    slug: "Annual-general-meeting",
    description:
      "This is the 2024 Annual General Meeting. All members are encouraged to attend.",
    venue: "NIPR Headquarters",
    date: "2024-06-10T11:43:35.000000Z",
  },
];

interface UpcomingEventsProps {}
const UpcomingEvents: FC<UpcomingEventsProps> = () => {
  return (
    <div className="w-frame space-y-12">
      <div className="flex justify-between items-center">
        <h3 className="text-[3.45rem] text-[#E8362B]">Upcoming Events</h3>
        <Button className="rounded-none bg-white text-primary">View All</Button>
      </div>

      <div className="grid grid-cols-2 gap-10">
        {allEvents.map((event) => (
          <React.Fragment key={event.id}>
            <UpcomingEventCard {...event} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
