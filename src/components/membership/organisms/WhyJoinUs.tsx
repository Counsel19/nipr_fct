import React, { FC } from "react";
import WhyJoinUsCard from "../molecules/WhyJoinUsCard";

const whyJoinUsList = [
  {
    image: "/images/whyjoin/bosted_credibility.png",
    title: "Boosted Credibility: ",
    body: "Use your NIPR membership to enhance your professional image.",
  },
  {
    image: "/images/whyjoin/support_network.png",
    title: "Your Own Support Network: ",
    body: "Connect with a vibrant community of PR professionals across Nigeria.",
  },
  {
    image: "/images/whyjoin/event_access.png",
    title: "Event Access: ",
    body: " Attend a wide range of industry events, conferences, and workshops.",
  },
  {
    image: "/images/whyjoin/accreditation.png",
    title: "Accreditation:: ",
    body: "Advance your career with the NIPR accreditation program.",
  },
  {
    image: "/images/whyjoin/industry_insight.png",
    title: "Industry Insights: ",
    body: "Stay informed with the latest industry trends and news.",
  },
  {
    image: "/images/whyjoin/training_opportunities.png",
    title: "Training Opportunities:  ",
    body: "Access free and discounted training programs to upskill.",
  },
];

interface WhyJoinUsProps {}
const WhyJoinUs: FC<WhyJoinUsProps> = () => {
  return (
    <div className="w-frame space-y-20">
      <h4 className="font-semibold text-[#FA3329] leading-[2.5rem] text-[3.6rem]">
        See what you get when you join us
      </h4>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {whyJoinUsList.map((item, index) => (
          <React.Fragment key={index}>
            <WhyJoinUsCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinUs;
