import React from "react";
import { RiToggleLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";
import { LINKS_DATA } from "../helperDate";
import {
  StNavContainrer,
  StNavFooter,
  StNavLink,
  StNavLinksList,
} from "./style";

const Navigation = () => {
  const location = useLocation();
  return (
    <StNavContainrer>
      <h2>سیستم مدیریت بانکی</h2>
      <StNavLinksList>
        {LINKS_DATA.map(({ icon, title, path }, index) => (
          <StNavLink path={path === location.pathname} key={index}>
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
