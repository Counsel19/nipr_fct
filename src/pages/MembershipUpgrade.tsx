import MemberTypes from "@/components/membership/organisms/MemberTypes";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface MembershipUpgradeProps {}
const MembershipUpgrade: FC<MembershipUpgradeProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="Membership" />
      <div className="w-frame space-y-20">
        <div className="space-y-8">
          <h3 className="font-semibold text-[4.8rem] leading-[5.28rem]">
            NIPR Membership Upgrade
          </h3>
          <p className="text-2xl leading-[3rem]">
            A Member of the Institute is expected to be current and committed in
            the payment of his dues and levies as may be imposed by Council. All
            subscriptions are due on the 1st day of July each year. A Member
            whose subscription is in arrears for one year shall lose his
            membership of or affiliation to the Society. Every member or
            affiliate is bound to further, to the best of his ability, the
            objects, interests and influence of the Society.
          </p>
        </div>

        <MemberTypes />
      </div>
    </div>
  );
};

export default MembershipUpgrade;
