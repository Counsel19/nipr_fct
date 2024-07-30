import React, { FC } from "react";
import NewsCard from "../molecules/NewsCard";

const allNews = [
  {
    id: "1",
    image: "/images/attend_events.jpg",
    postedOn: new Date().toString(),
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "2",
    postedOn: new Date().toString(),
    image: "/images/attend_events.jpg",
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    id: "3",
    postedOn: new Date().toString(),
    image: "/images/attend_events.jpg",
    title: "Bill Walsh leadership lessons",
    body: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
];

interface NewsGridProps {}
const NewsGrid: FC<NewsGridProps> = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-12">

      {allNews.map((news, index) => (
        <React.Fragment key={index}>
          <NewsCard {...news} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default NewsGrid;
