import PageTitle from "@/components/shared/molecules/PageTitle";
import PageLoader from "@/components/shared/PageLoader";

import { fetchNewsPostById } from "@/lib/redux/slices/news/newsThunk";
import { AppDispatch, RootState } from "@/lib/redux/store";

import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface SingleNewsPostProps {}
const SingleNewsPost: FC<SingleNewsPostProps> = () => {
  const { singleNewsPost } = useSelector((store: RootState) => store.news);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { newsPostId } = useParams();
  useEffect(() => {
    if (!newsPostId) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchNewsPostById(newsPostId));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className=" space-y-20 relative">
      <PageTitle title="Our News" />

      {singleNewsPost && !isLoading ? (
        <>
          <img
            src={singleNewsPost.image as string}
            alt={singleNewsPost.image as string}
            className="h-[28.5rem] relative w-frame pagePadding"
          />

          <div className="w-frame pagePadding space-y-8">
            <h3 className="font-semibold text-primary leading-[5.58rem] text-[4.2rem]">
              {singleNewsPost.title}
            </h3>

            <div
              className="text-[1.55rem] space-y-4 leading-[2.8rem]"
              dangerouslySetInnerHTML={{ __html: singleNewsPost.body }}
            ></div>
          </div>
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default SingleNewsPost;
