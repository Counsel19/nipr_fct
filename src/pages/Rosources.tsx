import ResourcesGrid from "@/components/resources/organisms/ResourcesGrid";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface RosourcesProps {}
const Rosources: FC<RosourcesProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="Resources" />
      <div className="w-frame space-y-28">
        <div className="lg:w-[60%] mx-auto space-y-8">
          <h3 className=" text-[2.4rem] lg:text-[4.8rem] text-center text-primary lg:leading-[6rem]">
            Resources and insights
          </h3>
          <p className="text-[#667085] text-center text-[1.6rem] lg:text-2xl leading-[3rem]"></p>

          <div className="flex flex-col lg:flex-row gap-6 ">
            <Input className="flex-1" placeholder="Search here for Resources" />
            <Button className="h-full w-full lg:w-fit">Search</Button>
          </div>
        </div>

        <div>
          <h5 className="text-[1.8rem] mb-12 text-[#101828] leading-[2.4rme] font-semibold">
            OUR RESOURCES
          </h5>

          <ResourcesGrid />
        </div>
      </div>
    </div>
  );
};

export default Rosources;
