import React from "react";
import { HiHome } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";
import { MdInsertChart } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { RiToggleLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";
import {
  StNavContainrer,
  StNavFooter,
  StNavLink,
  StNavLinksList,
} from "./style";

const LINKS_DATA = [
  { icon: <HiHome />, title: "خانه", path: "/" },
  { icon: <IoWallet />, title: "کیف پول", path: "/card" },
  { icon: <MdInsertChart />, title: "آمار", path: "/statistic" },
  { icon: <IoMdPerson />, title: "پروفایل", path: "/profile" },
];

const Navigation = () => {
  const location = useLocation();
  return (
    <StNavContainrer>
      <h2>سیستم مدیریت بانکی</h2>
      <StNavLinksList>
        {LINKS_DATA.map(({ icon, title, path }) => (
          <StNavLink path={path === location.pathname}>
            {icon}
            <Link to={path}>{title}</Link>
          </StNavLink>
        ))}
      </StNavLinksList>
      <StNavFooter>
        <RiToggleLine /> حالت تاریک
      </StNavFooter>
    </StNavContainrer>
  );
};

export default Navigation;
