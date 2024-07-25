import { FC } from "react";

interface LeadershipCardProps {
  name: string;
  image: string;
  position: string;
}
const LeadershipCard: FC<LeadershipCardProps> = ({ image, name, position }) => {
  return (
    <div className="">
      <img
        src={image}
        alt={image}
        className="h-[33.2rem] object-cover object-top"
      />

      <div className="flex flex-col gap-6 text-white p-8 bg-primary">
        <h3 className="font-semibold text-[2.8rem] leading-[3rem]">{name}</h3>
        <span className="italic  font-roboto text-2xl">{position}</span>
      </div>
    </div>
  );
};

export default LeadershipCard;
