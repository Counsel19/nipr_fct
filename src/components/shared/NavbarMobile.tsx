import { FC, useState } from "react";
import Branding from "./atoms/Branding";
import { AlignJustify, X } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface NavbarMobileProps {}
const NavbarMobile: FC<NavbarMobileProps> = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex p-4  justify-between items-center">
      <Branding />

      <Button onClick={() => setShowNav(true)} variant={"ghost"}>
        <AlignJustify />
      </Button>

      {showNav && (
        <div className="fixed   z-50 top-0 bottom-0 right-0 left-0 bg-[#000000D6]">
          <div className="p-12 space-y-20">
            <div className="flex justify-between items-center">
              <Branding />

              <Button variant={"ghost"}>
                <X className="text-white" />
              </Button>
            </div>

            <div className="flex flex-col gap-8 ">
              {navLinks.map((item, index) => (
                <Link
                  onClick={() => setShowNav(false)}
                  className="flex p-6 text-base text-white hover:bg-[#713538]"
                  key={index}
                  to={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Membership",
    link: "/membership",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Resources",
    link: "/resources",
  },
  {
    name: "News",
    link: "/news",
  },
];

export default NavbarMobile;
