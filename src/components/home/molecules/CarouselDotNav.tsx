import React, { FC } from "react";
import CarouselDot from "../atoms/CarouselDot";

interface CarouselDotNavProps {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  currentSlide: number;
  numberOfSlides: number;
}
const CarouselDotNav: FC<CarouselDotNavProps> = ({
  setCurrentSlide,
  currentSlide,
  numberOfSlides,
}) => {
  return (
    <div className="flex flex-col gap-4  ">
      {new Array(numberOfSlides).fill(1).map((_, index) => (
        <button onClick={() => setCurrentSlide(index)} key={index}>
          <CarouselDot bg={  index === currentSlide ? "bg-white": "bg-[#D9D9D9B2]" } />
        </button>
      ))}
    </div>
  );
};

export default CarouselDotNav;
