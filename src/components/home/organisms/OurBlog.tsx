import  { FC } from "react";
import NewsGrid from "@/components/news/organisms/NewsGrid";


interface OurBlogProps {}
const OurBlog: FC<OurBlogProps> = () => {
  return (
    <div className="w-frame space-y-12">
      <h3 className="text-[3.45rem] text-[#E8362B]">Our News</h3>
      <NewsGrid sliceAt={3}  />
    </div>
  );
};

export default OurBlog;
