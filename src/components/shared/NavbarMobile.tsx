import { FC } from "react";
import Branding from "./atoms/Branding";
import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";

interface NavbarMobileProps {}
const NavbarMobile: FC<NavbarMobileProps> = () => {
  return (
    <div className="flex p-4 justify-between items-center">
      <Branding />

      <Button variant={"ghost"}>
        <AlignJustify />
      </Button>
    </div>
  );
};

export default NavbarMobile;
