import LabledInput from "@/components/shared/molecules/LabledInput";
import { Button } from "@/components/ui/button";
import React, { FC, useState } from "react";

interface ProfileProps {}
const Profile: FC<ProfileProps> = () => {
  const [inputValue, setInputValue] = useState<{
    email: string;
    name: string;
  }>({
    email: "",
    name: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-[2.3rem] font-semibold leading-[3.6rem]">Profile</h3>
        <hr />
      </div>

      <div className="space-y-8">
        <LabledInput
          name="name"
          value={inputValue.name}
          label="Full Name"
          setInputValue={handleOnchange}
        />
        <LabledInput
          name="email"
          value={inputValue.email}
          label="Email"
          setInputValue={handleOnchange}
        />

        <Button className="w-full bg-primary">Update</Button>
      </div>
    </div>
  );
};

export default Profile;
