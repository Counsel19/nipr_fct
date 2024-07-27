import Branding from "@/components/shared/atoms/Branding";
import LabledInput from "@/components/shared/molecules/LabledInput";
import { Button } from "@/components/ui/button";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {}

const Register: FC<LoginProps> = () => {
  const [inputValue, setInputValue] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    password: "",
    email: "",
  });

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="grid lg:grid-cols-2 ">
      <div className="space-y-12 w-full p-12">
        <div className="w-[15.1rem]">
          <Branding />
        </div>

        <div className="w-full ">
          <div className="space-y-12 mx-auto w-full lg:w-[70%]">
            <h3 className="font-semibold text-[3rem] leading-[3.8rem]">
              Sign Up
            </h3>

            <p className="text-[1.6rem] leading-[1.6rem] text-[#667085]">
              Start your 30-day free trial.
            </p>

            <div className="space-y-8 w-full">
              <LabledInput
                label="Name"
                name="name"
                value={inputValue.name}
                setInputValue={handleOnchange}
              />
              <LabledInput
                label="Email"
                name="email"
                value={inputValue.email}
                setInputValue={handleOnchange}
              />
              <LabledInput
                label="Password"
                name="password"
                value={inputValue.password}
                setInputValue={handleOnchange}
              />

              <Button className="w-full bg-primary">Create Account</Button>

              <div className="space-x-2 text-center">
                <span className="text-base  text-[#667085]">
                  Already have an account?
                </span>
                <Link
                  className="font-medium text-base leading-[2rem] text-[#F6453C]"
                  to="/login"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/bgPatterns/auth_pattern.svg')] object-cover" />
    </div>
  );
};

export default Register;
