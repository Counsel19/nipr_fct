import PageTitle from "@/components/shared/molecules/PageTitle";
import { FC } from "react";

interface ComingSoonProps {}
const ComingSoon: FC<ComingSoonProps> = () => {
  return (
    <div>
      <PageTitle title="Coming Soon" />

      <div className="min-h-[50rem] flex flex-col items-center justify-center">
        <p className="text-gray-500 text-[2rem] mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
};
export default ComingSoon;
