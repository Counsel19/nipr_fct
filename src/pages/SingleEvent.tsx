import PageTitle from "@/components/shared/molecules/PageTitle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FC } from "react";
import { Link } from "react-router-dom";

const singleEventDetails = {
  image: "/images/events/annual_gen_meeting.png",
  theme: "Annual general meeting",
  description:
    "This is the 2024 Annual General Meeting. All members are encouraged to attend.",
  date: "2024-06-10T11:43:35.000000Z",
  startTime: "2024-06-10T10:43:35.000000Z",
  endTime: "2024-06-10T11:43:35.000000Z",
  venue: "NIPR Headquarters",
  detailedInfo: `
  <p>Certification Study Groups are weekly events over 6 weeks designed for people who want to prepare for a Google Cloud 
certification. Join this Study Group to learn more and prepare for the Associate Cloud Engineer certification.</p>  
<p>This cohort is facilitated by Women TechMakers Ambassadors to help spread awareness and increase gender parity across the 
technology sector.</p> 

<p>The Certification Study Group offers:</p>
<ul>
<li>6 live sessions to go through certification content and exam questions.</li>
<li>6 live sessions to go through certification content and exam questions.</li>
</ul>

`,
};

interface SingleEventProps {}
const SingleEvent: FC<SingleEventProps> = () => {
  return (
    <div className=" space-y-20 relative">
      <PageTitle title="Events" />

      <img
        src={singleEventDetails.image}
        alt={singleEventDetails.image}
        className="h-[28.5rem] relative w-frame pagePadding"
      />

      <div className="w-frame pagePadding space-y-8">
        <h3 className="font-semibold text-primary leading-[5.58rem] text-[4.2rem]">
          {singleEventDetails.theme}
        </h3>

        <p className="text-[1.53rem] font-poppins leading-[2.306rem]">
          {singleEventDetails.description}
        </p>
      </div>
      <div className="bg-[#FEF2F1] ">
        <div className="w-frame pagePadding py-8 flex justify-between items-center">
          <div className="flex gap-3  text-[1.55rem] leading-[1.76rem]">
            <span className="">
              <strong>{format(singleEventDetails.date, "MMMM, dd")}</strong>,
              <strong>
                {format(singleEventDetails.startTime, "k:mm bbb")}
              </strong>{" "}
              -<strong>{format(singleEventDetails.endTime, "k:mm bbb")}</strong>
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
          dangerouslySetInnerHTML={{ __html: singleEventDetails.detailedInfo }}
        ></div>
      </div>
    </div>
  );
};

export default SingleEvent;
