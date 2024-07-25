import { cn } from "@/lib/utils";
import { FC } from "react";

interface CarouselDotProps {
  bg: string;
}
const CarouselDot: FC<CarouselDotProps> = ({ bg }) => {
  return <span className={cn("w-8 h-8 flex rounded-full", bg)}></span>;
};

export default CarouselDot;
