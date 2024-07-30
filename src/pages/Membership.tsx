import SideLinks from "@/components/about/organisms/SideLinks";
import JoinNiprFct from "@/components/home/organisms/JoinNiprFct";
import WhyJoinUs from "@/components/membership/organisms/WhyJoinUs";
import HaveAQuestion from "@/components/shared/molecules/HaveAQuestion";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

const sideLinks = [
  {
    text: "Membership Upgrade",
    link: "/membership/upgrade",
  },
  {
    text: "Membership Criteria",
    link: "/membership/criteria",
  },
];

interface MembershipProps {}
const Membership: FC<MembershipProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="Membership" />

      <JoinNiprFct bgImage="bg-[url('/images/join_nipr_fct_man.jpg')]" />

      <div className="w-frame grid  gap-[10rem] lg:grid-cols-[4fr_2fr]">
        <div className="space-y-12">
          <h2 className="text-[4.8rem] leading-[5.28rem]">NIPR Membership</h2>
          <div className="space-y-8">
            <p className="text-2xl leading-[3rem] text-[#0D0D0D]">
              As a member of NIPR you can be sure of access to an exclusive
              range of benefits and services designed especially for you.
              Whether you’re looking for examples of PR excellence, advice on an
              issue affecting you at work, other members in your industry sector
              to talk to or simply support if you need it – we can help you.
              Membership of NIPR is open to anyone working or interested in
              public relations. Spend a few moments browsing through the options
              on the left for full details of how to apply for membership and
              more importantly, what you get in return.
            </p>
            <p className="text-2xl leading-[3rem] text-[#0D0D0D]">
              Membership of the Institute represents a statement that the holder
              is a qualified professional practitioner in Public Relations,
              subscribes to the Code of Ethics and the Professional Standards
              Guide.The Institute provides opportunities for life long learning
              to help you grow professionally. Also it helps members to
              specialize in different areas of PR. Every member is expected to
              be active as a member of a chapter. Members are required to serve
              in various workshop committees and assignments as may be
              necessary.
            </p>
          </div>
        </div>

        <SideLinks sideLinks={sideLinks} />
      </div>

      <WhyJoinUs />
      <HaveAQuestion />
    </div>
  );
};

export default Membership;
