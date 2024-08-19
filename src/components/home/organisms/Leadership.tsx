import React, { FC } from "react";
import LeadershipCard from "../molecules/LeadershipCard";

const leadershipList = [
  {
    name: "Mr. Stanley A. Ogadigo",
    image: "/images/nipr_chairman.png",
    position: "Current Chairman of the NIPR FCT Chapter",
  },
  {
    name: "Edward Ọlásúnkànmí Adébánjọ, FNIPR.",
    image: "/images/EdwardOA.jpg",
    position: "Vice Chairman.",
  },
  {
    name: "Chiamaka Obi-Okafor",
    image: "/images/ChiamakaObi-Okafor.jpg",
    position: "NIPR FCT Secretary",
  },
];

interface LeadershipProps {}
const Leadership: FC<LeadershipProps> = () => {
  return (
    <div className="relative">
      <div className="w-frame space-y-12 relative">
        <h3 className="font-bold text-[3rem] lg:text-[3.457rem] leading-[3.8rem] text-[#E8362B]">
          FCT Chapter Leadership
        </h3>
        <div className="grid lg:grid-cols-3 gap-12 ">
          {leadershipList.map((leader, index) => (
            <React.Fragment key={index}>
              <LeadershipCard {...leader} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
