import LabledInput from "@/components/shared/molecules/LabledInput";
import { Button } from "@/components/ui/button";
import { IRegisterEvents } from "@/types/events";
import React, { FC, useState } from "react";

interface RegisterEventFormProps {}

const RegisterEventForm: FC<RegisterEventFormProps> = () => {
  const [inputValue, setInputValue] = useState<IRegisterEvents>({
    age: "",
    email: "",
    firstname: "",
    dob: "",
    middlename: "",
    phone: "",
    surname: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-[#101828] font-medium text-2xl leading-[2.8rem] text-center">
          Attendee Information
        </h3>
        <span className="text-center text-base leading-[2rem] ">
          Please fill in your correct details below
        </span>
      </div>
      <div className="space-y-12">
        <LabledInput
          name="surname"
          value={inputValue.surname}
          label="Surname"
          setInputValue={handleOnchange}
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <LabledInput
            name="middlename"
            value={inputValue.middlename}
            label="Middle Name"
            setInputValue={handleOnchange}
          />
          <LabledInput
            name="firstname"
            value={inputValue.firstname}
            label="First Name"
            setInputValue={handleOnchange}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <LabledInput
            name="dob"
            value={inputValue.dob}
            label="Date of Birth"
            setInputValue={handleOnchange}
          />
          <LabledInput
            name="age"
            value={inputValue.age}
            label="Age"
            setInputValue={handleOnchange}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <LabledInput
            name="phone"
            value={inputValue.phone}
            label="Phone Number"
            setInputValue={handleOnchange}
          />
          <LabledInput
            name="email"
            value={inputValue.email}
            label="Email"
            setInputValue={handleOnchange}
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Button variant={"outline"} className="w-full">
            Cancel
          </Button>
          <Button className="w-full bg-primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterEventForm;
