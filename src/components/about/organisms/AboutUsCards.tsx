import { FC } from "react";
import AboutUsCard from "../molecules/AboutUsCard";
import { cn } from "@/lib/utils";

const aboutUsCardList = [
  {
    image: "/images/aboutus/nipr_ethics.svg",
    title: "Action Builds Community",
    heading: "Our Ethics",
    body: "Nigerian Institute of Public Relations Public Relations Practitioners Decree No. 16 of 1990 empowers the Council of the Nigerian Institute of Public Relations to determine what standards of knowledge and skills are to be attained by Public Relations practitioners. For high standards of",
  },
  {
    image: "/images/aboutus/nipr_council.svg",
    title: "NIPR",
    heading: "Our Council",
    body: "In 1952, Daniel J. Edelman decided to open a small public relations agency in Chicago for one simple reason: he thought he could do better than the competition.",
  },
];

interface AboutUsCardsProps {}
const AboutUsCards: FC<AboutUsCardsProps> = () => {
  return (
    <div className="w-frame ">
      <div className="grid lg:grid-cols-2 gap-8 lg:p-[10rem]">
        {aboutUsCardList.map((item, index) => (
          <div key={index} className={cn(index === 1 && "lg:translate-y-[20rem]")}>
            <AboutUsCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCards;
