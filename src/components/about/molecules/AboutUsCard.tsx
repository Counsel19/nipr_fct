import { FC } from "react";

interface AboutUsCardProps {
  image: string;
  title: string;
  heading: string;
  body: string;
}
const AboutUsCard: FC<AboutUsCardProps> = ({ body, heading, image, title }) => {
  return (
    <div>
      <img src={image} alt={image} className="h-[33.9rem] object-right"  />
      <div className="p-8 space-y-6 ">
        <h5 className="text-[#F6453C] uppercase font-bold text-lg">{title}</h5>
        <div className="space-y-12">
          <h3 className="text-[4rem] leading-[4rem]">{heading}</h3>

          <p className="text-[1.6rem] leading-[2.56rem]">
            {body} <span className="text-[#F6453C] font-bold">More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
