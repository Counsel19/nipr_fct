import { cn } from "@/lib/utils";
import { FC } from "react";

interface MembershipSnapshotCardProps {
  title: string;
  description: string;
  borderRadiusClass: string;
}
const MembershipSnapshotCard: FC<MembershipSnapshotCardProps> = ({
  description,
  borderRadiusClass,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 items-center justify-center p-8 lg:w-[19.5rem] bg-white",
        borderRadiusClass
      )}
    >
      <h5 className="text-[2.4rem] font-bold text-primary">{title}</h5>
      <span className="text-black text-[1.2rem] text-center leading-[1.8rem]">{description}</span>
    </div>
  );
};

export default MembershipSnapshotCard;
