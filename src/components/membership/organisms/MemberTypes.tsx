import React, { FC } from "react";
import MemberTypeCard from "../molecules/MemberTypeCard";

interface MemberTypesProps {}

const allMemberTypes = [
  {
    title: "Students member",
    description:
      "A Member of the Institute is expected to be current and committed in the payment of his dues and levies as may be imposed by Council. All subscriptions are due on the 1st day of July each year. A Member whose subscription is in arrears for one year shall lose his membership of or affiliation to the Society. Every member or affiliate is bound to further, to the best of his ability, the objects, interests and influence of the Society.",
    slug: "join-as-student",
  },
  {
    title: "Associates member",
    description:
      "A Member of the Institute is expected to be current and committed in the payment of his dues and levies as may be imposed by Council. All subscriptions are due on the 1st day of July each year. A Member whose subscription is in arrears for one year shall lose his membership of or affiliation to the Society. Every member or affiliate is bound to further, to the best of his ability, the objects, interests and influence of the Society.",
    slug: "join-as-associate",
  },
  {
    title: "Professional member",
    description:
      "A Member of the Institute is expected to be current and committed in the payment of his dues and levies as may be imposed by Council. All subscriptions are due on the 1st day of July each year. A Member whose subscription is in arrears for one year shall lose his membership of or affiliation to the Society. Every member or affiliate is bound to further, to the best of his ability, the objects, interests and influence of the Society.",
    slug: "join-as-professional",
  },
];

const MemberTypes: FC<MemberTypesProps> = () => {
  return (
    <div>
      {allMemberTypes.map((type, index) => (
        <React.Fragment key={index}>
          <MemberTypeCard {...type} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MemberTypes;
