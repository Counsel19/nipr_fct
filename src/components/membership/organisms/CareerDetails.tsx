import FileUpload from "@/components/shared/FileUpload";
import LabledInput from "@/components/shared/molecules/LabledInput";
import SelectDate from "@/components/shared/SelectDate";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IMembershipForm, IQalification } from "@/types/membership";
import React, { FC } from "react";

const isDevotionList = [
  {
    name: "Some",
    id: 0,
  },
  {
    name: "All",
    id: 1,
  },
];
const isPrimaryFunctionList = [
  {
    name: "No",
    id: 0,
  },
  {
    name: "Yes",
    id: 1,
  },
];
const isMemberList = [
  {
    name: "No",
    id: 0,
  },
  {
    name: "Yes",
    id: 1,
  },
];

interface CareerDetailsProps {
  handleOnchange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSelectChange: (value: string, name: string) => void;
  inputValue: IMembershipForm;
  currentGradeDate: Date | undefined;
  setCurrentGradeDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  qualification1: IQalification;
  qualification2: IQalification;
  setQualification1: React.Dispatch<React.SetStateAction<IQalification>>;
  setQualification2: React.Dispatch<React.SetStateAction<IQalification>>;
}
const CareerDetails: FC<CareerDetailsProps> = ({
  inputValue,
  handleOnchange,
  handleSelectChange,
  currentGradeDate,
  setCurrentGradeDate,
  qualification1,
  qualification2,
  setQualification1,
  setQualification2,
}) => {
  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <div className="space-y-4">
          <label className="font-medium text-base leading-[2.03rem]" htmlFor="">
            Do you devote some/all of your time to public relations practice
          </label>
          <Select
            onValueChange={(value) => handleSelectChange(value, "is_devotion")}
          >
            <SelectTrigger className="bg-slate-100 focus-visible:ring-0 focus-visible:ring-offset-0 ">
              <SelectValue placeholder="-Select-" />
            </SelectTrigger>
            <SelectContent>
              {isDevotionList.map((devotion) => (
                <SelectItem
                  key={devotion.id}
                  value={devotion.id.toString()}
                  className="text-base p-3"
                >
                  {devotion.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <LabledInput
          className="bg-slate-100"
          value={inputValue.nature_of_duties}
          isTextArea
          setInputValue={handleOnchange}
          label=" Explain the nature of your duties"
          name="nature_of_duties"
        />

        <div className="space-y-4">
          <label className="font-medium text-base leading-[2.03rem]" htmlFor="">
            Is your public relations work recognized by your organizations as
            your primary function
          </label>
          <Select
            onValueChange={(value) =>
              handleSelectChange(value, "is_primary_function")
            }
          >
            <SelectTrigger className="bg-slate-100 focus-visible:ring-0 focus-visible:ring-offset-0 ">
              <SelectValue placeholder="-Select-" />
            </SelectTrigger>
            <SelectContent>
              {isPrimaryFunctionList.map((choice) => (
                <SelectItem
                  key={choice.id}
                  value={choice.id.toString()}
                  className="text-base p-3"
                >
                  {choice.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          <label className="font-medium text-base leading-[2.03rem]" htmlFor="">
            Are you already a member of the Nigerian Institute of public
            relations?
          </label>
          <Select
            onValueChange={(value) => handleSelectChange(value, "is_member")}
          >
            <SelectTrigger className="bg-slate-100 focus-visible:ring-0 focus-visible:ring-offset-0 ">
              <SelectValue placeholder="-Select-" />
            </SelectTrigger>
            <SelectContent>
              {isMemberList.map((choice) => (
                <SelectItem
                  key={choice.id}
                  value={choice.id.toString()}
                  className="text-base p-3"
                >
                  {choice.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4">
          <label className="font-medium text-base leading-[2.03rem]" htmlFor="">
            if yes, what is your current grade of membership
          </label>
          <Select
            onValueChange={(value) => handleSelectChange(value, "is_member")}
          >
            <SelectTrigger className="bg-slate-100 focus-visible:ring-0 focus-visible:ring-offset-0 ">
              <SelectValue placeholder="-Select-" />
            </SelectTrigger>
            <SelectContent>
              {isMemberList.map((choice) => (
                <SelectItem
                  key={choice.id}
                  value={choice.id.toString()}
                  className="text-base p-3"
                >
                  {choice.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-4 flex flex-col">
          <label className="font-medium text-base leading-[2.03rem]" htmlFor="">
            if yes, what is your current grade of membership
          </label>
          <div className="w-full">
            <SelectDate
              classes="w-full rounded-lg"
              placeholder="Select Date"
              date={currentGradeDate}
              setDate={setCurrentGradeDate}
            />
          </div>
        </div>
      </div>

      <h4 className="text-2xl leading-[2.8rem]">
        Qualification/membership of professional bodies
      </h4>

      <div className="space-y-8">
        <LabledInput
          className="bg-slate-100"
          value={qualification1.qualification_name}
          setInputValue={(e) =>
            setQualification1({
              ...qualification1,
              qualification_name: e.target.value,
            })
          }
          label="  Name of professional body"
          name=""
        />
        <FileUpload
          setFile={(file: File) =>
            setQualification1({
              ...qualification1,
              qualification_image: file,
            })
          }
        />
      </div>
      <div className="space-y-8">
        <LabledInput
          className="bg-slate-100"
          value={qualification2.qualification_name}
          setInputValue={(e) =>
            setQualification2({
              ...qualification2,
              qualification_name: e.target.value,
            })
          }
          label="  Name of professional body"
          name=""
        />
        <FileUpload
          setFile={(file: File) =>
            setQualification2({
              ...qualification2,
              qualification_image: file,
            })
          }
        />
      </div>
    </div>
  );
};

export default CareerDetails;
