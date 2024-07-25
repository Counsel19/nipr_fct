import React, { FC } from "react";
import BlogCard from "../molecules/BlogCard";

const blogList = [
  {
    id: "1",
    heading: "Annual PR Summit 2024: Registration Now Open for FCT Members",
    body: "New initiative pairs seasoned PR experts with emerging talent to foster growth and innovation in the field.",
    image: "/images/women_in_media.png",
    postedOn: "2024-06-10T11:43:35.000000Z",
  },
  {
    id: "2",
    heading:
      "NIPR FCT Collaborates with Tech Giants to Address Digital Communication Challenges",
    body: "Don't miss this year's premier event featuring keynote speakers, workshops, and networking opportunities. Early bird rates available.",
    image: "/images/global_alliance_baord.png",
    postedOn: "2024-06-10T11:43:35.000000Z",
  },
  {
    id: "3",
    heading:
      "NIPR FCT Chapter Launches Mentorship Program for Young PR Professionals",
    body: "New initiative pairs seasoned PR experts with emerging talent to foster growth and innovation in the field.",
    image: "/images/mental_health.png",
    postedOn: "2024-06-10T11:43:35.000000Z",
  },
];

interface OurBlogProps {}
const OurBlog: FC<OurBlogProps> = () => {
  return (
    <div className="w-frame space-y-12">
      <h3 className="text-[3.45rem] text-[#E8362B]">Our Blogs</h3>
      <div className="grid lg:grid-cols-3 gap-12">
        {blogList.map((item) => (
          <React.Fragment key={item.id}>
            <BlogCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
