import React, { FC } from "react";
import LeadershipCard from "../molecules/LeadershipCard";

const leadershipList = [
  {
    name: "Mr. Stanley A. Ogadigo",
    image: "/images/nipr_chairman.png",
    position: "Current Chairman of the NIPR FCT Chapter",
  },
  {
    name: "Mrs. Olubunmi Badejo",
    image: "/images/OlubunmiBadejo.svg",
    position: "President/Chairman of the Governing Council,",
  },
  {
    name: "Haj. Maryam N. Sanusi",
    image: "/images/MaryamN.Sanusi.svg",
    position: "President/Chairman of the Governing Council,",
  },
];

interface LeadershipProps {}
const Leadership: FC<LeadershipProps> = () => {
  return (
    <div className="relative">
      <img
        src="/images/bgPatterns/pattarn_rect.svg"
        alt="Pattern"
        className="w-fit h-fit  absolute top-0 right-0"
      />
      <div className="w-frame space-y-12 relative" >
        <h3 className="font-bold text-[3.457rem] leading-[3.8rem] text-[#E8362B]">
          FCT Chapter Leadership
        </h3>
        <div className="flex flex-col lg:flex-row gap-12">
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
