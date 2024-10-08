import { FC } from "react";

interface LeadershipCardProps {
  name: string;
  image: string;
  position: string;
}
const LeadershipCard: FC<LeadershipCardProps> = ({ image, name, position }) => {
  return (
    <div className="h-[50rem]">
      <img
        src={image}
        alt={image}
        className="h-[70%] object-cover object-top"
      />

      <div className="flex h-[25%] flex-col gap-6 text-white p-8 bg-primary">
        <h3 className="font-semibold text-[2.4rem]  lg:text-[2.8rem] leading-[3rem]">
          {name}
        </h3>
        <span className="italic  font-roboto text-[1.8rem]  lg:text-2xl">
          {position}
        </span>
      </div>
    </div>
  );
};

export default LeadershipCard;
