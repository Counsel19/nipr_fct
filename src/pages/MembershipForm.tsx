import BasicDetailsForm from "@/components/membership/organisms/BasicDetailsForm";
import CareerDetails from "@/components/membership/organisms/CareerDetails";
import FormStepper from "@/components/membership/organisms/FormStepper";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { Button } from "@/components/ui/button";
import { IMembershipForm, IQalification } from "@/types/membership";
import { FC, useState } from "react";

interface MembershipFormProps {}
const MembershipForm: FC<MembershipFormProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState<IMembershipForm>({
    sur_name: "",

    first_name: "",

    middle_name: "",

    email: "",

    phone: "",
    dob: "",

    job_title: "",

    responsibility: "",

    organization: "",

    business_address: "",

    business_postal_code: "",

    industry: "",

    is_devotion: 0,

    nature_of_duties: "",

    is_primary_function: 0,

    is_member: 0,

    grade_id: "",
    curernt_grade_date: "",

    qualifications: [
      {
        qualification_name: "",
        qualification_image: "",
      },
      {
        qualification_name: "",
        qualification_image: "",
      },
    ],
  });
  const [currentGradeDate, setCurrentGradeDate] = useState<Date>();
  const [qualification1, setQualification1] = useState<IQalification>({
    qualification_name: "",
    qualification_image: "",
  });
  const [qualification2, setQualification2] = useState<IQalification>({
    qualification_name: "",
    qualification_image: "",
  });

  const handleOnchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSelectChange = (value: string, name: string) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="space-y-20">
      <PageTitle title="Membership" />

      <img src="" alt="" />

      <div className="pagePadding">
        <div className=" bg-white p-8 shadow-md rounded-xl space-y-12">
          <div className="">
            <h3 className="text-[#101828] font-medium text-2xl leading-[2.8rem]">
              Chapter Membership Form
            </h3>
            <span className="text-base text-[#5D667D] leading-[2rem]">
              Please fill in your correct details below
            </span>
          </div>

          <FormStepper currentStep={currentStep} />

          {currentStep === 0 ? (
            <BasicDetailsForm
              inputValue={inputValue}
              handleOnchange={handleOnchange}
            />
          ) : (
            <CareerDetails
              inputValue={inputValue}
              handleOnchange={handleOnchange}
              handleSelectChange={handleSelectChange}
              currentGradeDate={currentGradeDate}
              setCurrentGradeDate={setCurrentGradeDate}
              qualification1={qualification1}
              setQualification1={setQualification1}
              qualification2={qualification2}
              setQualification2={setQualification2}
            />
          )}

          <div className="grid grid-cols-2 gap-8">
            <Button variant={"outline"} className="w-full">
              Cancel
            </Button>
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="w-full bg-primary"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
