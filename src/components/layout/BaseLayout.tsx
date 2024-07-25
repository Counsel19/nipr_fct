import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavbarMobile from "../shared/NavbarMobile";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

interface BaseLayoutProps {}
const BaseLayout: FC<BaseLayoutProps> = () => {
  return (
    <div>
      <>
        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="md:hidden">
          <NavbarMobile />
        </div>

        <Outlet />

        <div className="mt-[10rem]">
          <Footer />
        </div>
      </>
    </div>
  );
};

export default BaseLayout;
