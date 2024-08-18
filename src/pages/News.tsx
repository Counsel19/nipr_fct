import NewsGrid from "@/components/news/organisms/NewsGrid";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  handleSearchNews,
  updateNewsStateValues,
} from "@/lib/redux/slices/news/newsSlice";
import { fetchAllNewsPost } from "@/lib/redux/slices/news/newsThunk";
import { AppDispatch } from "@/lib/redux/store";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface NewsProps {}
const News: FC<NewsProps> = () => {
  const [search, setSearch] = useState("");

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
    if (search == "") {
      dispatch(
        updateNewsStateValues({
          name: "filteredNewsPost",
          value: null,
        })
      );
    }
  }, [dispatch, search]);

  return (
    <div className="space-y-20">
      <PageTitle title="News" />
      <div className="w-frame space-y-20">
        <div className="lg:w-[60%] mx-auto space-y-8">
          <h5 className="text-[1.6rem] text-primary text-center leading-[2.4rme] font-semibold">
            OUR NEWS
          </h5>
          <h3 className=" text-[2.4rem] lg:text-[4.8rem] text-center text-primary lg:leading-[6rem]">
            Stories and interviews
          </h3>
          <p className="text-[#667085] text-center text-[1.6rem] lg:text-2xl leading-[3rem]"></p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(handleSearchNews(search));
            }}
            className="flex flex-col lg:flex-row gap-6 "
          >
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
              placeholder="Search here for news"
            />
            <Button className="h-full w-full lg:w-fit">Search</Button>
          </form>
        </div>

        <div>
          <h5 className="text-[1.8rem] mb-12 text-[#101828] leading-[2.4rme] font-semibold">
            OUR NEWS
          </h5>

          <NewsGrid />
        </div>
      </div>
    </div>
  );
};

export default News;
