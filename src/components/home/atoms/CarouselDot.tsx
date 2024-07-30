import { cn } from "@/lib/utils";
import { FC } from "react";

interface CarouselDotProps {
  bg: string;
}
const CarouselDot: FC<CarouselDotProps> = ({ bg }) => {
  return <span className={cn(" w-4 h-4 lg:w-8 lg:h-8 flex rounded-full", bg)}></span>;
};

export default CarouselDot;
