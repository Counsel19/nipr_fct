import RegisterEventForm from "@/components/events/organisms/RegisterEventForm";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface RegisterForEventProps {}
const RegisterForEvent: FC<RegisterForEventProps> = () => {
  return (
    <div className="space-y-20 relative">
      <PageTitle title="Events" />
      <img
        src="/images/bgPatterns/events_pattern.svg"
        alt="events_pattern "
        className="absolute left-0 top-[24rem] h-fit w-fit"
      />

      <div className="w-frame pagePadding ">
        <div className="relative rounded-3xl z-20 bg-white py-12">
          <div className="absolute top-8 left-8">
            <span className="w-[4.8rem] h-[4.8rem] rounded-full border-[0.8rem] border-[#F0F2F5] bg-[#FDF3F3]">
              <img
                src="/images/icons/chart_alt.png"
                alt="chart_alt"
                className="w-full h-full object-contain"
              />
            </span>
          </div>
          <RegisterEventForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterForEvent;
