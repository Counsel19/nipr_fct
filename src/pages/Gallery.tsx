import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

const gallery = [
  {
    id: "1",
    image: "/images/attend_events.jpg",
  },
  {
    id: "1",
    image: "/images/become_a_member.jpg",
  },
  {
    id: "1",
    image: "/images/aboutus/image1.jpg",
  },
  {
    id: "1",
    image: "/images/aboutus/image2.jpg",
  },
  {
    id: "1",
    image: "/images/aboutus/image6.jpg",
  },
  {
    id: "1",
    image: "/images/aboutus/image3.jpg",
  },
  {
    id: "1",
    image: "/images/aboutus/image4.jpg",
  },
  {
    id: "1",
    image: "/images/aboutus/image5.jpg",
  },
];

interface GalleryProps {}
const Gallery: FC<GalleryProps> = () => {
  return (
    <div className="space-y-28">
      <PageTitle title="Gallery" />
      <div className="space-y-28 w-frame">
        <div className="lg:w-[60%] mx-auto space-y-8">
          <h3 className=" text-[2.4rem] lg:text-[4.8rem] text-center text-primary lg:leading-[6rem]">
            A picture is worth more than a thousand words
          </h3>
          <p className="text-[#667085] text-center text-[1.6rem] lg:text-2xl leading-[3rem]">
            Explore on galleries to see pictures of past seminars, trainings,
            meetings and other events
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.image}
              className="h-[35rem]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
