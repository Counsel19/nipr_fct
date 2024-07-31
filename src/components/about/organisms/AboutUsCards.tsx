import { FC } from "react";
import AboutUsCard from "../molecules/AboutUsCard";
import { cn } from "@/lib/utils";
import SideLinks from "./SideLinks";

const aboutUsCardList = [
  {
    image: "/images/aboutus/nipr_ethics.svg",
    title: "Action Builds Community",
    heading: "Our Ethics",
    extract:
      "Nigerian Institute of Public Relations Public Relations Practitioners Decree No. 16 of 1990 empowers the Council of the Nigerian Institute of Public Relations to determine what standards of knowledge and skills are to be attained by Public Relations practitioners. For high standards of practice. The Institute must from time to time update its Code of Professional Conduct.",
    body: "Nigerian Institute of Public Relations Public Relations Practitioners Decree No. 16 of 1990 empowers the Council of the Nigerian Institute of Public Relations to determine what standards of knowledge and skills are to be attained by Public Relations practitioners. For high standards of practice. The Institute must from time to time update its Code of Professional Conduct. The decree empowers the Council to make bylaws and other rules not inconsistent with this decree as to acts which constitute professional misconduct. In pursuance of the provision of the decree, the Council of the Nigerian Institute of Public Relations hereby makes the following Bye Laws to be known as “The Nigerian Institute of Public Relations Code of Professional Conduct Bye-laws No. 1 of 1992",
  },
  {
    image: "/images/aboutus/image2.jpg",
    title: "NIPR FCT",
    heading: "",
    extract: "",
    body: "",
  },
];

const sideLinks = [
  {
    text: "Leadership",
    link: "/leaders",
  },
  {
    text: "Facts About Nipr",
    link: "/about/facts-about-nipr",
  },
];

interface AboutUsCardsProps {}
const AboutUsCards: FC<AboutUsCardsProps> = () => {
  return (
    <div className="w-frame ">
      <div className="grid lg:grid-cols-2 gap-8 lg:px-[10rem]">
        {aboutUsCardList.map((item, index) => (
          <div
            key={index}
            className={cn(index === 1 && "lg:translate-y-[20rem]")}
          >
            <div>
              <AboutUsCard {...item} hideMore={index == 1} />
              {index == 1 && <SideLinks sideLinks={sideLinks} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsCards;
