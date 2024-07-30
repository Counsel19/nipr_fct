import React, { FC } from "react";
import QuickActionsCard from "../molecules/QuickActionsCard";

const quickActionList = [
  {
    image: "/images/become_a_member.jpg",
    text: "Become a Member",
    link: "/become-a-member",
  },
  {
    image: "/images/attend_events.jpg",
    text: "Attend Events",
    link: "/events",
  },
  {
    image: "/images/explore_resources.jpg",
    text: "Explore Resources",
    link: "/resources",
  },
];

interface QuickActionsProps {}
const QuickActions: FC<QuickActionsProps> = () => {
  return (
    <div className=" lg:h-[50rem] flex items-center">
      <div className="grid lg:grid-cols-3 gap-12 w-frame">
        {quickActionList.map((item, index) => (
          <React.Fragment key={index}>
            <QuickActionsCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
