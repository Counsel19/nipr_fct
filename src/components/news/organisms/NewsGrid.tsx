import React, { FC } from "react";
import NewsCard from "../molecules/NewsCard";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import PageLoader from "@/components/shared/PageLoader";

interface NewsGridProps {
  sliceAt?: number;
}
const NewsGrid: FC<NewsGridProps> = ({ sliceAt }) => {
  const { allNewsPost } = useSelector((store: RootState) => store.news);

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {allNewsPost && allNewsPost.length > 0 ? (
        allNewsPost.slice(0, sliceAt ? sliceAt : -1).map((newsPost) => (
          <React.Fragment key={newsPost.id}>
            <NewsCard data={newsPost} />
          </React.Fragment>
        ))
      ) : allNewsPost && allNewsPost.length == 0 ? (
        <h3> No Held News Post at the Moment</h3>
      ) : (
        <div className="col-span-2">
          <PageLoader />
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
