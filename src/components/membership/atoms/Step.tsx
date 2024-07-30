import { cn } from "@/lib/utils";
import { CircleCheck, CircleDot } from "lucide-react";
import { FC } from "react";

interface StepProps {
  stepName: string;
  stepDescription: string;
  currentStep: number;
  index: number;
}
const Step: FC<StepProps> = ({
  index,
  currentStep,
  stepName,
  stepDescription,
}) => {
  return (
    <div className="space-y-2 min-w-[15rem] flex  gap-4 lg:gap-0 lg:flex-col items-center">
      <span>
        {currentStep > index ? (
          <CircleCheck size={25} className="text-primary" />
        ) : (
          <CircleDot
            size={25}
            className={cn(
              index === currentStep ? "text-primary" : "text-gray-400"
            )}
          />
        )}
      </span>
      <div className="flex flex-col">
        <h6
          className={cn(
            " font-semibold lg:text-center",
            index === currentStep ? "text-primary" : "text-slate-500"
          )}
        >
          {stepName}
        </h6>
        <span
          className={cn(
            "text-base lg:text-center  leading-[2rem]",
            index === currentStep ? "text-[#FA3329]" : "text-slate-500"
          )}
        >
          {stepDescription}
        </span>
      </div>
    </div>
  );
};

export default Step;
