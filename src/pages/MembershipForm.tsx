import BasicDetailsForm from "@/components/membership/organisms/BasicDetailsForm";
import CareerDetails from "@/components/membership/organisms/CareerDetails";
import FormStepper from "@/components/membership/organisms/FormStepper";
import PageTitle from "@/components/shared/molecules/PageTitle";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { applyForMembership } from "@/lib/redux/slices/membership/membershipThunk";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { IMembershipForm, IQalification } from "@/types/membership";
import { AxiosError } from "axios";
import { format } from "date-fns";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface MembershipFormProps {}
const MembershipForm: FC<MembershipFormProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState<IMembershipForm>({
    sur_name: "",

    first_name: "",

    middle_name: "",

    email: "",

    phone: "",
    dob: null,

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
    curernt_grade_date: null,

    qualifications: [
      {
        qualification_name: "",
        qualification_image: null,
      },
      {
        qualification_name: "",
        qualification_image: null,
      },
    ],
  });
  const [currentGradeDate, setCurrentGradeDate] = useState<Date>();
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [qualification1, setQualification1] = useState<IQalification>({
    qualification_name: "",
    qualification_image: null,
  });
  const [qualification2, setQualification2] = useState<IQalification>({
    qualification_name: "",
    qualification_image: null,
  });

  const { isLoading } = useSelector((store: RootState) => store.membership);

  const dispatch = useDispatch<AppDispatch>();

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

  const handleApply = async () => {
    try {
      if (!dateOfBirth || !currentGradeDate)
        return toast({ title: "Please Provide all Fields" });

      const formdata = new FormData();

      for (const [key, value] of Object.entries(inputValue)) {
        formdata.append(key, value);
        key == "dob"
          ? formdata.append(key, format(dateOfBirth, "yyyy-MM-dd"))
          : key == "curernt_grade_date"
          ? formdata.append(key, format(currentGradeDate, "yyyy-MM-dd"))
          : key == "qualifications"
          ? formdata.append(key, value)
          : null;
      }

      formdata.append(
        "qualifications[0][qualification_name]",
        qualification1.qualification_name
      );
      qualification1.qualification_image &&
        formdata.append(
          "qualifications[0][qualification_image]",
          qualification1.qualification_image
        );
      formdata.append(
        "qualifications[1][qualification_name]",
        qualification2.qualification_name
      );
      qualification2.qualification_image &&
        formdata.append(
          "qualifications[1][qualification_image]",
          qualification2.qualification_image
        );

      const res = await dispatch(applyForMembership(formdata));
      if (res.type.includes("rejected"))
        return toast({
          title: "An Error Occurred",
          description: res.payload as string,
          variant: "destructive",
        });
      toast({
        title: "Congratulations! Application Sent",
        description: "We will get back to you shotly",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          return toast({
            title: "Error Sending Application",
            description: error.response?.data,
            variant: "destructive",
          });
        }
      }

      toast({
        title: "Error Sending Application",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
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
              setDateOfBirth={setDateOfBirth}
              dateOfBirth={dateOfBirth}
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
            <Button
              onClick={() => {
                currentStep > 0 ? setCurrentStep(currentStep - 1) : null;
              }}
              variant={"outline"}
              className="w-full"
            >
              Cancel/Prev
            </Button>
            <Button
              isLoading={isLoading}
              onClick={() => {
                currentStep === 1
                  ? handleApply()
                  : setCurrentStep(currentStep + 1);
              }}
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
