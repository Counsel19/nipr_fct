import PageTitle from "@/components/shared/molecules/PageTitle";
import PageLoader from "@/components/shared/PageLoader";
import { buttonVariants } from "@/components/ui/button";
import { fetchEventById } from "@/lib/redux/slices/events/eventsThunk";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

interface SingleEventProps {}
const SingleEvent: FC<SingleEventProps> = () => {
  const { singleEvent } = useSelector((store: RootState) => store.events);
 const [ isLoading, setIsLoading ] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const { eventId } = useParams();
  useEffect(() => {
    if (!eventId) return;
    const getData = async () => {
      try {
        setIsLoading(true)
        await dispatch(fetchEventById(eventId));
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false)
      }
    };

    getData();
  }, []);

  return (
    <div className=" space-y-20 relative">
      <PageTitle title="Events" />

      {singleEvent && !isLoading ? (
        <>
          <img
            src={singleEvent.poster_image as string}
            alt={singleEvent.poster_image as string}
            className="h-[28.5rem] relative w-frame pagePadding"
          />

          <div className="w-frame pagePadding space-y-8">
            <h3 className="font-semibold text-primary leading-[5.58rem] text-[4.2rem]">
              {singleEvent.title}
            </h3>

            <p className="text-[1.53rem] font-poppins leading-[2.306rem]">
              {singleEvent.description}
            </p>
          </div>
          <div className="bg-[#FEF2F1] ">
            <div className="w-frame pagePadding py-8 flex justify-between items-center">
              <div className="flex gap-3  text-[1.55rem] leading-[1.76rem]">
                <span className="">
                  <strong>{format(singleEvent.start_date, "MMMM, dd")}</strong>,
                  <strong>{format(singleEvent.start_date, "k:mm bbb")}</strong>{" "}
                  -{" "}
                  <strong>{format(singleEvent.end_date, "MMMM, dd")}</strong>,
                  <strong>{format(singleEvent.end_date, "k:mm bbb")}</strong>
                </span>
                <span>0 RSVP'd</span>
              </div>

              <Link
                to="register"
                className={cn(
                  buttonVariants({
                    className:
                      "bg-primary font-semibold text-[1.8rem] font-playfairDisplay ",
                  })
                )}
              >
                Register Now
              </Link>
            </div>
          </div>

          <div className="space-y-8 w-frame pagePadding">
            <h3 className="font-semibold  leading-[5.58rem] text-[4.2rem]">
              About this Event
            </h3>

            <div
              className="text-[1.55rem] space-y-4 leading-[2.8rem]"
              dangerouslySetInnerHTML={{ __html: singleEvent.description }}
            ></div>
          </div>
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default SingleEvent;
