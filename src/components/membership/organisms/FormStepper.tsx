import React, { FC } from "react";
import Step from "../atoms/Step";
import { cn } from "@/lib/utils";

interface FormStepperProps {
  currentStep: number;
}

const allSteps = [
  {
    stepName: "Basic Details",
    stepDescription: " The summary and priority details",
  },
  {
    stepName: "Career Details",
    stepDescription: " Your career details And documents",
  },
  {
    stepName: "History Of Applicant",
    stepDescription: " for NIPR use only",
  },
  {
    stepName: " Chapter details",
    stepDescription: " for NIPR use only",
  },
];

const FormStepper: FC<FormStepperProps> = ({ currentStep }) => {
  return (
    <div className="grid lg:grid-cols-4">
      {allSteps.map((step, index) => (
        <div
          key={index}
          className={cn(
            "relative h-[8rem] lg:h-fit w-[23rem]",
            index !== allSteps.length - 1 &&
              "after:absolute  after:right-[94%] lg:after:-right-[13rem]  after:top-[60%] lg:after:top-4 after:bg-gray-300 after:h-[4rem]  lg:after:h-[1px] after:w-[1px] lg:after:w-full"
          )}
        >
          <Step index={index} currentStep={currentStep} {...step} />
        </div>
      ))}
    </div>
  );
};

export default FormStepper;
