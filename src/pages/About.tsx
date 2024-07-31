import AboutUsCards from "@/components/about/organisms/AboutUsCards";
import HistoryOfNipr from "@/components/about/organisms/HistoryOfNipr";
import HaveAQuestion from "@/components/shared/molecules/HaveAQuestion";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface AboutProps {}
const About: FC<AboutProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="About" />

      <AboutUsCards />
      <div className=" w-frame lg:p-[10rem] grid gap-[10rem] lg:grid-cols-[4fr_2fr]">
        <HistoryOfNipr />
        <div />
      </div>

      <HaveAQuestion />
    </div>
  );
};

export default About;
