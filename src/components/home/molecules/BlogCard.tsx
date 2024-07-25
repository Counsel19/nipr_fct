import { format } from "date-fns";
import { FC } from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  heading: string;
  body: string;
  image: string;
  postedOn: string;
}
const BlogCard: FC<BlogCardProps> = ({
  body,
  heading,
  id,
  image,
  postedOn,
}) => {
  return (
    <div className="bg-[#F7F7FF] shadow-md h-[60.2rem] ">
      <img src={image} alt={image} className="h-[50%]" />

      <div className="p-12 h-[50%] flex flex-col justify-between gap-8">
        <span className="tracking-[1.37px] font-medium text-[#636466] text-[1.5rem]">
          {format(postedOn, "dd MMMM, yyyy")}
        </span>

        <h5 className="font-bold text-[1.8rem] leading-[2.55rem] text-[#202C59] ">
          {heading}
        </h5>

        <p className="text-[1.4rem] leading-[1.95rem] text-[#676767] font-light">
          {body.slice(0, 200)}
          {body.length > 200 ? "..." : ""}
        </p>

        <Link
          to={`/blogs/${id}`}
          className="tracking-[0.84px ] uppercase font-bold leading-[1.95rem] underline underline-offset-8 text-[#202C59] text-[1.2rem] mt-6"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
