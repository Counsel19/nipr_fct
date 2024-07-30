import NewsGrid from "@/components/news/organisms/NewsGrid";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface NewsProps {}
const News: FC<NewsProps> = () => {
  return (
    <div className="space-y-20">
      <PageTitle title="News" />
      <div className="w-frame space-y-20">
        <div className="lg:w-[60%] mx-auto space-y-8">
          <h5 className="text-[1.6rem] text-primary text-center leading-[2.4rme] font-semibold">
            OUR NEWS
          </h5>
          <h3 className=" text-[2.4rem] lg:text-[4.8rem] text-center text-primary lg:leading-[6rem]">
            Stories and interviews
          </h3>
          <p className="text-[#667085] text-center text-[1.6rem] lg:text-2xl leading-[3rem]">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 ">
            <Input className="flex-1" placeholder="Search here for news" />
            <Button className="h-full w-full lg:w-fit">Search</Button>
          </div>
        </div>

        <div>
          <h5 className="text-[1.8rem] mb-12 text-[#101828] leading-[2.4rme] font-semibold">
            OUR NEWS
          </h5>

          <NewsGrid />
        </div>
      </div>
    </div>
  );
};

export default News;
