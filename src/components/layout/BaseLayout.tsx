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

        <div
          id="rendering-information"
          data-height="500px"
          data-width="500px"
          data-formid="NIPR_FCT_Chapter_Sentiment_Analysis_AI_Tool_09A5Z"
          data-frame-source="https://embed.pickaxeproject.com/axe?id=NIPR_FCT_Chapter_Sentiment_Analysis_AI_Tool_09A5Z&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=E71313&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=0.5&s_to=1&s_r=2"
          data-title="NIPRA"
        ></div>

        <div className="mt-[10rem]">
          <Footer />
        </div>
      </>
    </div>
  );
};

export default BaseLayout;
