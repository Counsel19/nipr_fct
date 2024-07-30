import { FC } from "react";

interface PageTitleProps {
  title: string;
}
const PageTitle: FC<PageTitleProps> = ({ title }) => {
  return (
    <div className='bg-[url("/images/bgPatterns/page_title_pattern.svg")] bg-no-repeat bg-cover flex items-center relative h-[20.99rem]'>
      <div className="bg-[#00000099] absolute top-0 right-0 bottom-0 left-0" />

      <div className="w-frame relative text-white lg:p-[10rem]">
        <h3 className="font-semibold leading-[5rem] text-[3.2rem] lg:text-[5rem]">{title}</h3>
      </div>
    </div>
  );
};

export default PageTitle;
