import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

interface CarouseltemProps {
  tagline: string;
  headingText: string;
  description: string;
  imageUrl: string;
  link: string;
}
const Carouseltem: FC<CarouseltemProps> = ({
  description,
  headingText,
  imageUrl,
  link,
  tagline,
}) => {
  const slideVariants = {
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={slideVariants}
        className="relative h-[50vh] lg:h-[140vh] overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={tagline}
          className="absolute top-0 right-0 left-0 bottom-0 z-0 object-bottom object-fit"
        />
        <div className="bg-[#00000099] absolute top-0 right-0 left-0 bottom-0 z-10" />

        <div className="z-20 relative h-full flex items-center w-frame ">
          <div className="space-y-6 max-w-[80.0rem]">
            <h3 className="text-[2.4rem] text-white">{tagline}</h3>
            <h2 className="text-[6.2rem] text-white font-bold leading-[8rem]">
              {headingText}
            </h2>
            <p className="text-[#D9D9D9] text-[3rem] font-normal leading-[3.2rem]">
              {description}
            </p>

            <div />

            <Link
              to={link}
              className={cn(
                buttonVariants({
                  className:
                    "bg-primary-gradient font-playfairDisplay font-semibold  text-[2rem] h-[5rem]",
                })
              )}
            >
              Discover More
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Carouseltem;
