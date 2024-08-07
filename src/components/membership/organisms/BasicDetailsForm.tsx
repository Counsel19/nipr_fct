import LabledInput from "@/components/shared/molecules/LabledInput";
import SelectDate from "@/components/shared/SelectDate";
import { IMembershipForm } from "@/types/membership";
import React, { FC } from "react";

interface BasicDetailsFormProps {
  handleOnchange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputValue: IMembershipForm;
  dateOfBirth: Date | undefined;
  setDateOfBirth: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
const BasicDetailsForm: FC<BasicDetailsFormProps> = ({
  inputValue,
  handleOnchange,
  dateOfBirth,
  setDateOfBirth,
}) => {
  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <LabledInput
          className="bg-slate-100"
          value={inputValue.sur_name}
          setInputValue={handleOnchange}
          label="Surname"
          name="sur_name"
        />

        <div className="grid lg:grid-cols-2  gap-8">
          <LabledInput
            className="bg-slate-100"
            value={inputValue.middle_name}
            setInputValue={handleOnchange}
            label="Middle Name"
            name="middle_name"
          />
          <LabledInput
            className="bg-slate-100"
            value={inputValue.first_name}
            setInputValue={handleOnchange}
            label="First Name"
            name="first_name"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4 flex flex-col">
            <label
              className="font-medium text-base leading-[2.03rem]"
              htmlFor=""
            >
              Date of birth
            </label>
            <div className="w-full">
              <SelectDate
                classes="w-full rounded-lg"
                placeholder="Select Date"
                date={dateOfBirth}
                setDate={setDateOfBirth}
              />
            </div>
          </div>
          <LabledInput
            className="bg-slate-100"
            value={inputValue.phone}
            setInputValue={handleOnchange}
            label="Phone Number"
            name="phone"
          />
        </div>

        <LabledInput
          className="bg-slate-100"
          value={inputValue.email}
          setInputValue={handleOnchange}
          label="Email"
          name="email"
        />
      </div>

      <h5 className="font-medium text-[1.8rem] text-[#101828] leading-[2.8rem]">
        Enter Request Details
      </h5>

      <div className="space-y-8">
        <LabledInput
          className="bg-slate-100"
          value={inputValue.job_title}
          setInputValue={handleOnchange}
          label="Job Title/Job Position"
          name="job_title"
        />
        <LabledInput
          className="bg-slate-100"
          value={inputValue.responsibility}
          setInputValue={handleOnchange}
          label="Responsibile To"
          name="responsibility"
        />
        <LabledInput
          className="bg-slate-100"
          value={inputValue.organization}
          setInputValue={handleOnchange}
          label="Organization"
          name="organization"
        />
        <LabledInput
          className="bg-slate-100"
          value={inputValue.business_address}
          setInputValue={handleOnchange}
          label="Business Address"
          name="business_address"
        />
        <LabledInput
          className="bg-slate-100"
          value={inputValue.business_postal_code}
          setInputValue={handleOnchange}
          label="Business Postal address"
          name="business_postal_code"
        />
        <LabledInput
          className="bg-slate-100"
          value={inputValue.industry}
          setInputValue={handleOnchange}
          label=" Industry ( nature of your organization's business or activity)"
          name="industry"
        />
      </div>
    </div>
  );
};

export default BasicDetailsForm;
