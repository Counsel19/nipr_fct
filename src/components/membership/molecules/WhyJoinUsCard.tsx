import { FC } from "react";

interface WhyJoinUsCardProps {
  image: string;
  title: string;
  body: string;
}
const WhyJoinUsCard: FC<WhyJoinUsCardProps> = ({ body, image, title }) => {
  return (
    <div className="space-y-8">
      <img className="h-[33.9rem] " src={image} alt={image} />

      <div className="grid lg:grid-cols-[3fr_4fr] gap-[2rem]">
        <h3 className="font-semibol text-primary text-[2.4rem] leading-[2.5rem]">
          {title}
        </h3>
        <span className="text-[1.6rem] leading-[2.5rem]">{body}</span>
      </div>
    </div>
  );
};

export default WhyJoinUsCard;
