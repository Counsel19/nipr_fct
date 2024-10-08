import { FC } from "react";
import CustomBreadCrumb from "../CustomBreadCrumbs";
import { Home } from "lucide-react";

interface PageTitleProps {
  title: string;
}
const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div>
      <div className='bg-[url("/images/bgPatterns/page_title_pattern.svg")] bg-no-repeat bg-cover flex items-center relative h-[15rem]'>
        <div className="bg-[#00000099] absolute top-0 right-0 bottom-0 left-0" />

        <div className="w-frame relative text-white lg:px-[10rem]">
          <h3 className="font-semibold leading-[5rem] text-[3.2rem] lg:text-[5rem]">
            {title}
          </h3>
        </div>
      </div>
      <div className="lg:px-[10rem]">
        <CustomBreadCrumb
          homeElement={<Home size={20} className="text-gray-500" />}
          separator={"||"}
          activeClasses="text-primary"
          containerClasses="flex items-center gap-4 py-3 bg-trasparent text-base text-slate-700 mb-6"
          listClasses="hover:underline mx-2 font-bold"
          capitalizeLinks
        />
      </div>
    </div>
  );
};

export default PageTitle;
