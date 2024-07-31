import MembershipCatogory from "@/components/membership/organisms/MembershipCategory";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface MembershipUpgradeProps {}
const MembershipUpgrade: FC<MembershipUpgradeProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="Membership" />
      <div className="w-frame space-y-20 pagePadding">
        <div className="space-y-8 ">
          <h3 className="font-semibold text-[4.8rem] leading-[5.28rem]">
            NIPR Membership Upgrade
          </h3>
          <p className="text-2xl leading-[3rem]">
            The Following Are the Criteria for Membership Upgrade
          </p>
        </div>

        <MembershipCatogory />
      </div>
    </div>
  );
};

export default MembershipUpgrade;
