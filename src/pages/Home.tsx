import HomeCarosel from "@/components/home/organisms/HomeCarosel";
import JoinNiprFct from "@/components/home/organisms/JoinNiprFct";
import Leadership from "@/components/home/organisms/Leadership";
import MembershipSnapshot from "@/components/home/organisms/MembershipSnapshot";
import OurBlog from "@/components/home/organisms/OurBlog";
import QuickActions from "@/components/home/organisms/QuickActions";
import QuickNIPRInfo from "@/components/home/organisms/QuickNIPRInfo";
import UpcomingEvents from "@/components/home/organisms/UpcomingEvents";
import { FC } from "react";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  return (
    <div className="space-y-20">
      <HomeCarosel />
      <QuickNIPRInfo />
      <JoinNiprFct showPattarn bgImage="bg-[url('/images/join_nipr_fct.jpg')]" />
      <QuickActions />
      <MembershipSnapshot />
      <Leadership />
      <UpcomingEvents />
      <OurBlog />
    </div>
  );
};

export default Home;
