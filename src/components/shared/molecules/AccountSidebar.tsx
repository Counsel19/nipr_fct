import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const linksLIst = [
  {
    text: "Profile",
    icon: <User />,
    link: "/account/profile",
  },
  {
    text: "Password and Authentication",
    icon: <User />,
    link: "/account/passwords",
  },
];

interface AccountSidebarProps {}
const AccountSidebar: FC<AccountSidebarProps> = () => {
  const { pathname } = useLocation();
  return (
    <div className="space-y-6 text-base">
      {linksLIst.map((linkItem, index) => (
        <Link
          className={cn(
            "p-3 flex gap-2 ",
            pathname === linkItem.link
              ? "font-bold bg-[#FEF2F1] border-l-[4px] border-[#871C1F] "
              : ""
          )}
          key={index}
          to={linkItem.link}
        >
          {linkItem.icon}
          <span>{linkItem.text}</span>
        </Link>
      ))}
    </div>
  );
};

export default AccountSidebar;
