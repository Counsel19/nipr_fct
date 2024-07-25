import React, { FC } from "react";
import MembershipSnapshotCard from "../molecules/MembershipSnapshotCard";

const membershipSnapshotInfo = [
  {
    title: "$566m",
    description: "Industry generated revenue (2023)",
    borderRadiusClass: "rounded-t-lg",
  },
  {
    title: "3177",
    description: "NIPR Event attendees (2023)",
    borderRadiusClass: "rounded-r-lg",
  },
  {
    title: "642",
    description: "Members studying accredited degrees (2023)",
    borderRadiusClass: "rounded-l-lg",
  },
  {
    title: "822",
    description: "Training hours completed (2023)",
    borderRadiusClass: "rounded-b-lg",
  },
];

interface MembershipSnapshotProps {}
const MembershipSnapshot: FC<MembershipSnapshotProps> = () => {
  return (
    <div className="h-[50rem] bg-primary relative">
      <img
        src="/images/bgPatterns/spiral.png"
        alt="spiral"
        className="absolute -right-[15rem] top-0 bottom-0 w-fit "
      />
      <div className="flex items-center gap-[3rem] relative h-full  w-frame">
        <div className="text-white flex-1 space-y-8">
          <h4 className="font-bold text-3xl leading-[3rem]">Member Snapshot</h4>
          <p className="text-base leadning-[2.4rem]">
            Our membership brings together a diverse community of communication
            and public relations professionals across Nigeria. Our members
            contribute critical skills and expertise across a wide spectrum of
            businesses and represent the future of ethical communication in
            Nigeria.
          </p>
        </div>
        <div className="flex-1">
          <div className=" grid grid-cols-2 gap-4 w-fit">
            {membershipSnapshotInfo.map((item, index) => (
              <React.Fragment key={index}>
                <MembershipSnapshotCard {...item} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSnapshot;
