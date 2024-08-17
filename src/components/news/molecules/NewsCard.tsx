import { INews } from "@/types/news";
import { format } from "date-fns";
import { FC } from "react";
import { Link } from "react-router-dom";

interface NewsCardProps {
  data: INews;
}
const NewsCard: FC<NewsCardProps> = ({
  data: { body, created_at, image, title, id },
}) => {
  return (
    <Link to={`/news/${id}`} className="space-y-10 shadow-md rounded-md p-4">
      <div className="border h-[24rem] rounded-md">
        <img src={image} alt={title} className="object-cover" />
      </div>
      <div className="space-y-2">
        <span className="text-base text-primary leading-[2rem]">
          {format(created_at, "do MMM, YYY")}
        </span>

        <h5 className="font-semibold text-[#101828] text-[2.4rem] leading-[3.2rem]">
          {title}
        </h5>

        <p
          className="text-[1.6rem] text-[#667085] leading-[2.4rem]"
          dangerouslySetInnerHTML={{ __html: body.slice(0, 200) }}
        ></p>
      </div>
    </Link>
  );
};

export default NewsCard;
