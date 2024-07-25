import { FC } from "react";

interface BrandingProps {}
const Branding: FC<BrandingProps> = () => {
  return (
    <div className="flex items-end gap-3 ">
      <img src="/images/brand.svg" alt="NIPR Logo" />
      <img
        src="/images/global_alliance.svg"
        alt="NIPR Member of Gloabl Alliance"
      />
    </div>
  );
};

export default Branding;
