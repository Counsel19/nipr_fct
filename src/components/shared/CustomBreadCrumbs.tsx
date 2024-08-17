import React, { FC, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface CustomBreadCrumbProps {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
}

const CustomBreadCrumb: FC<CustomBreadCrumbProps> = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((path) => path);

  return (
    <ul className={containerClasses}>
      <li className={listClasses}>
        <Link to={"/"}>{homeElement}</Link>
      </li>
      {pathNames.length > 0 && separator}
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const itemClasses =
          location.pathname === href
            ? `${listClasses} ${activeClasses}`
            : listClasses;
        const itemLink = capitalizeLinks
          ? link[0].toUpperCase() + link.slice(1, link.length)
          : link;
        return (
          <React.Fragment key={index}>
            <li className={itemClasses}>
              <Link to={href}>{itemLink.replace(/-/g, " ")}</Link>
            </li>
            {pathNames.length !== index + 1 && separator}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default CustomBreadCrumb;
