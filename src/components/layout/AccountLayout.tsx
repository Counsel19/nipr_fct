import { FC } from "react";
import AccountSidebar from "../shared/molecules/AccountSidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import Navbar from "../shared/Navbar";
import NavbarMobile from "../shared/NavbarMobile";

interface AccountLayoutProps {}

const AccountLayout: FC<AccountLayoutProps> = () => {
  const { userProfile } = useSelector((store: RootState) => store.auth);
  return (
    <div>
      {userProfile ? (
        <div>
          <div className="hidden md:block">
            <Navbar />
          </div>

          <div className="md:hidden">
            <NavbarMobile />
          </div>
          <div className="w-frame pagePadding py-[8rem]">
            <div className="grid gap-[4rem] grid-cols-[28.8rem_1fr]">
              <AccountSidebar />

              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </div>
  );
};

export default AccountLayout;
