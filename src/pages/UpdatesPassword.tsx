import LabledInput from "@/components/shared/molecules/LabledInput";
import { Button } from "@/components/ui/button";
import React, { FC, useState } from "react";

interface UpdatePasswordProps {}
const UpdatePassword: FC<UpdatePasswordProps> = () => {
  const [inputValue, setInputValue] = useState<{
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-[2.3rem] font-semibold leading-[3.6rem]">
          Password and Authentication
        </h3>
        <hr />
      </div>

      <div className="space-y-8">
        <LabledInput
          name="currentPassword"
          value={inputValue.currentPassword}
          label="Current Password"
          setInputValue={handleOnchange}
        />
        <LabledInput
          name="newPassword"
          value={inputValue.newPassword}
          label="New Password"
          setInputValue={handleOnchange}
        />
        <LabledInput
          name="confirmPassword"
          value={inputValue.confirmPassword}
          label="Confirm Password"
          setInputValue={handleOnchange}
        />

        <Button className="w-full bg-primary">Update</Button>
      </div>
    </div>
  );
};

export default UpdatePassword;
