import { FC } from "react";
import { Link } from "react-router-dom";

const sideLinks = [
  {
    text: "Ethics Code",
    link: "/ethics",
  },
  {
    text: "Leadership",
    link: "/leaders",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Facts About Nipr",
    link: "/about/facts-about-nipr",
  },
];
interface SideLinksProps {}

const SideLinks: FC<SideLinksProps> = () => {
  return (
    <div>
      {sideLinks.map((item, index) => (
        <Link
          className="text flex  border border-[#F4F4F4] text-[#E8362B] leading-[2.625rem] px-6 py-8 text-[1.5rem]"
          key={index}
          to={item.link}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default SideLinks;
