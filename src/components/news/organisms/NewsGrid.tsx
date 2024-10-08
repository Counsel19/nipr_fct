import React, { FC, useEffect, useState } from "react";
import NewsCard from "../molecules/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import PageLoader from "@/components/shared/PageLoader";
import { INews } from "@/types/news";
import { fetchAllNewsPost } from "@/lib/redux/slices/news/newsThunk";

interface NewsGridProps {
  sliceAt?: number;
}
const NewsGrid: FC<NewsGridProps> = ({ sliceAt }) => {
  const [newPostData, setNewsPostData] = useState<INews[] | null>(null);
  const { allNewsPost, filteredNewsPost } = useSelector(
    (store: RootState) => store.news
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(fetchAllNewsPost());
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (filteredNewsPost) {
      setNewsPostData(filteredNewsPost);
    } else {
      setNewsPostData(allNewsPost);
    }
  }, [allNewsPost, filteredNewsPost]);

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {newPostData && newPostData.length > 0 ? (
        newPostData
          .slice(0, sliceAt ? sliceAt : newPostData.length)
          .map((newsPost) => (
            <React.Fragment key={newsPost.id}>
              <NewsCard data={newsPost} />
            </React.Fragment>
          ))
      ) : newPostData && newPostData.length == 0 ? (
        <h3 className="text-2xl"> No News Post at the Moment</h3>
      ) : (
        <div className="col-span-2">
          <PageLoader />
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
