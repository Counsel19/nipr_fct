import Branding from "@/components/shared/atoms/Branding";
import LabledInput from "@/components/shared/molecules/LabledInput";
import { Button } from "@/components/ui/button";
import { RootState } from "@/lib/redux/store";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [inputValue, setInputValue] = useState<{
    email: string;
    password: string;
  }>({
    password: "",
    email: "",
  });

  const { userProfile } = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();



  useEffect(() => {
    userProfile && navigate("/account/profile");
  }, [userProfile]);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="grid lg:grid-cols-2 h-screen overflow-hidden">
      <div className="space-y-12 p-12">
        <div className="w-[15.1rem]">
          <Branding />
        </div>

        <div className=" w-full">
          <div className="space-y-12 mx-auto w-full lg:w-[70%]">
            <h3 className="font-semibold text-[3rem] leading-[3.8rem]">
              Login
            </h3>

            <p className="text-[1.6rem] leading-[1.6rem] text-[#667085]">
              Welcome back! Please enter your details.
            </p>

            <div className="space-y-8">
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

              <div className="flex justify-end">
                <Link
                  className="font-medium text-base leading-[2rem] text-[#F6453C]"
                  to="/forgot-password"
                >
                  Forgot Password
                </Link>
              </div>

              <Button className="w-full bg-primary">Sign In</Button>

              <div className="space-x-2 text-center">
                <span className="text-base text-[#667085]">
                  Don’t have an account?
                </span>
                <Link
                  className="font-medium text-base leading-[2rem] text-[#F6453C]"
                  to="/register"
                >
                  Sign Up
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

export default Login;
