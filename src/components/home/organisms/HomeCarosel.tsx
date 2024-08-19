import React, { FC, useEffect, useState } from "react";
import Carouseltem from "../molecules/Carouseltem";
import CarouselDotNav from "../molecules/CarouselDotNav";

interface HomeCaroselProps {}

const carouselList = [
  {
    tagline: "The Nigerian Institute of Public Relations (NIPR) FCT Chapter",
    headingText: "Shaping Nigeria's Communication Landscape",
    description:
      "Discover upcoming events, enhance your skills, and join a community of certified PR professionals",
    imageUrl: "/images/nipr_carousel1.jpg",
    link: "/about",
  },
  {
    tagline: "The Nigerian Institute of Public Relations (NIPR) FCT Chapter",
    headingText: "Shaping Nigeria's Communication Landscape",
    description:
      "Discover upcoming events, enhance your skills, and join a community of certified PR professionals",
    imageUrl: "/images/nipr_carousel2.jpg",
    link: "/about",
  },
  {
    tagline: "The Nigerian Institute of Public Relations (NIPR) FCT Chapter",
    headingText: "Shaping Nigeria's Communication Landscape",
    description:
      "Discover upcoming events, enhance your skills, and join a community of certified PR professionals",
    imageUrl: "/images/nipr_carousel3.jpg",
    link: "/about",
  },
];

const HomeCarosel: FC<HomeCaroselProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % carouselList.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);


  return (
    <div className="relative">
      {carouselList.map((item, index) => (
        <React.Fragment key={index}>
          {currentSlide === index && <Carouseltem {...item} />}
        </React.Fragment>
      ))}
      <div className="absolute top-[40%]  right-8 z-50">
        <CarouselDotNav
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
          numberOfSlides={carouselList.length}
        />
      </div>
    </div>
  );
};

export default HomeCarosel;
