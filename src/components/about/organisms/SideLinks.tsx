import { FC } from "react";
import { Link } from "react-router-dom";

interface SideLinksProps {
  sideLinks: {
    link: string;
    text: string;
    newTab?: boolean;
  }[];
}

const SideLinks: FC<SideLinksProps> = ({ sideLinks }) => {
  return (
    <div>
      {sideLinks.map((item, index) => (
        <Link
          className="text flex  border border-[#F4F4F4] text-[#E8362B] leading-[2.625rem] px-6 py-8 text-[1.5rem]"
          key={index}
          to={item.link}
          target={item.newTab ? "_blank": "_self"}
          rel="noopener noreferrer"
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default SideLinks;
