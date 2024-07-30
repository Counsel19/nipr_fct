import { format } from "date-fns";
import { FC } from "react";

interface NewsCardProps {
  id: string;
  image: string;
  title: string;
  postedOn: string;
  body: string;
}
const NewsCard: FC<NewsCardProps> = ({ body, postedOn, image, title }) => {
  return (
    <div className="space-y-10">
      <img src={image} alt={title} className="h-[24rem]" />
      <div className="space-y-8">
        <span className="text-base text-primary leading-[2rem]">{format(postedOn, "do MMM, YYY")}</span>

        <h5 className="font-semibold text-[#101828] text-[2.4rem] leading-[3.2rem]">{title}</h5>

        <p className="text-[1.6rem] text-[#667085] leading-[2.4rem]">{body}</p>
      </div>
    </div>
  );
};

export default NewsCard;
