import { Button } from "@/components/ui/button";
import { FC, useState } from "react";

interface AboutUsCardProps {
  image: string;
  title: string;
  heading: string;
  body: string;
  hideMore?: boolean;
  extract: string;
}
const AboutUsCard: FC<AboutUsCardProps> = ({
  body,
  heading,
  image,
  title,
  hideMore,
  extract,
}) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <img src={image} alt={image} className="h-[33.9rem] object-right" />
      <div className="p-8 space-y-6 ">
        <h5 className="text-[#F6453C] uppercase font-bold text-lg">{title}</h5>
        <div className="space-y-12">
          <h3 className="text-[3rem] lg:text-[4rem] leading-[3rem] lg:leading-[4rem]">
            {heading}
          </h3>

          <p className="text-base lg:text-[1.6rem] leading-[2.56rem]">
            {!showAll ? `${extract}` : body}
            {!hideMore && (
              <Button
                onClick={() => setShowAll(!showAll)}
                variant={"ghost"}
                className="text-[#F6453C] p-0 px-2 font-bold"
              >
                {showAll ? " Close" : " More"}
              </Button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
