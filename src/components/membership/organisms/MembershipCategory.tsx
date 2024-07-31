import React, { FC } from "react";
import MemberTypeCard from "../molecules/MemberTypeCard";

interface MembershipCatogoryProps {}

const allMembershipCatogory = [
  {
    title: "Graduate to Asscociate ",
    description:
      "A graduate member will spend maximum of 3 years before upgrading. During the 3 years, the member will go through three (3) of the Institute’s Mandatory Continuing Professional Development Program, MCPD. On completion of the three MCPDs, the member will pick the upgrade application form, complete it with one passport, a copy of his/her graduate membership certificate, and one photocopy each of the MCPD certificate respectively, with a fee of N30,000.00.",
    slug: "join-as-student",
  },
  {
    title: "Associate to Member",
    description:
      "This also apply when upgrading from Associate to member, but at this level the candidate will spend 5 years as an Associate with 3 additional MCPD Certificates. A completed upgrade application form, attached associate membership certificate, a passport and N30,000.00 fee",
    slug: "join-as-associate",
  },
  {
    title: "Member to Fellow",
    description:
      "To upgrade to the highest membership cadre of the Institute, the member must have spent 10 years as a member. The candidate will purchase the fellowship form at the sum of N50,000.00 attach membership certificate, one passport photograph, write a paper on any area of choice related to PR. Thereafter, he / she must appear before the Institute’s board of fellows for presentation. If cleared, the certificate is awarded to the member during the Institute’s Annual General Meeting / Conference.",
    slug: "join-as-professional",
  },
];

const MembershipCatogory: FC<MembershipCatogoryProps> = () => {
  return (
    <div>
      {allMembershipCatogory.map((type, index) => (
        <React.Fragment key={index}>
          <MemberTypeCard {...type} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MembershipCatogory;
