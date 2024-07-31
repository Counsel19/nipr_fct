import { FC } from "react";

interface BrandingProps {
  variant?: boolean;
}
const Branding: FC<BrandingProps> = ({ variant }) => {
  return (
    <div className="flex items-end gap-3 w-[12rem]  ">
      <img
        src={variant ? "/images/brand-black.svg" : "/images/brand.svg"}
        alt="NIPR Logo"
        className="object-cover"
      />
      <img
        src="/images/global_alliance.svg"
        alt="NIPR Member of Gloabl Alliance"
        className="object-cover"
      />
    </div>
  );
};

export default Branding;
