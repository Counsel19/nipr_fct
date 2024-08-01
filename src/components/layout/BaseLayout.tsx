import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarMobile from "../shared/NavbarMobile";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { cn } from "@/lib/utils";

interface BaseLayoutProps {}
const BaseLayout: FC<BaseLayoutProps> = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <>
        <div className="hidden fixed right-0 left-0 top-0 z-30 md:block">
          <Navbar />
        </div>

        <div className="md:hidden">
          <NavbarMobile />
        </div>

        <div className={cn(pathname !== "/" && "md:mt-[9rem]")}>
          <Outlet />
        </div>

        <div className="mt-[10rem]">
          <Footer />
        </div>
      </>
    </div>
  );
};

export default BaseLayout;
