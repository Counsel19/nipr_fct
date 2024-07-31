import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Branding from "./atoms/Branding";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import UserAvatar from "./atoms/UserAvatar";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = () => {
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  const { pathname } = useLocation();
  const { userProfile } = useSelector((store: RootState) => store.auth);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setUserHasScrolled(true);
    } else {
      setUserHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        " py-6  bg-white",
        !userHasScrolled && pathname === "/" ? "bg-nav-gradient " : "bg-white"
      )}
    >
      <div className="w-frame flex justify-between items-center ">
        <Link to="/">
          <Branding
            variant={
              !userHasScrolled && pathname === "/"
                ? false
                : userHasScrolled && pathname === "/"
                ? true
                : true
            }
          />
        </Link>

        <ul
          className={cn(
            "flex items-center text-xl gap-6 font-roboto",
            userHasScrolled
              ? "text-[#231F20]"
              : pathname === "/"
              ? "text-white"
              : ""
          )}
        >
          {navLinks.map((navItem) => (
            <li>
              <Link
                className={cn(
                  "p-5 hover:text-white hover:bg-[#871C1F8C] hover:border-b-[4px] border-[#231F20] rounded-md",
                  pathname === navItem.link
                    ? "bg-[#871C1F8C] text-white border-b-[4px] border-[#231F20]"
                    : ""
                )}
                to={navItem.link}
              >
                {navItem.name}
              </Link>
            </li>
          ))}
        </ul>

        {userProfile ? (
          <Link to={"/account/profile"}>
            <UserAvatar
              width="w-[50px]"
              height="h-[50px]"
              imgUrl=""
              name={userProfile.name}
            />
          </Link>
        ) : (
          <Link
            to={"/login"}
            className={cn(
              buttonVariants({
                className:
                  "bg-primary-gradient min-w-[16.3rem] font-playfairDisplay text-xl h-[4.5rem] font-semibold",
              })
            )}
          >
            Login
          </Link>
        )}
      </div>
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

export default Navbar;
