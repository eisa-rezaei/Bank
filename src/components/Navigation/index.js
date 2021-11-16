import React, {useState} from "react";
import Switch from "react-switch";
import {RiMoonFoggyFill} from "react-icons/ri";
import {BiSun} from "react-icons/bi";

import {Link, useLocation} from "react-router-dom";
import {LINKS_DATA} from "../helperDate";
import {StNavContainrer, StNavFooter, StNavLink, StNavLinksList} from "./style";
import {useSizeChecker} from "../Hooks/useSizeCheck";

const Navigation = () => {
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const isGreater = useSizeChecker(1024);
  const isGreater2 = useSizeChecker(768);

  return (
    <StNavContainrer>
      {isGreater ? <h2>سیستم مدیریت بانکی</h2> : isGreater2 && <h2>بانک</h2>}
      <StNavLinksList>
        {LINKS_DATA.map(({icon, title, path}, index) => (
          <StNavLink path={path === location.pathname} key={index}>
            {isGreater ? (
              <>
                {icon}
                <Link to={path}>{title}</Link>
              </>
            ) : (
              <Link to={path}>{icon}</Link>
            )}
          </StNavLink>
        ))}
      </StNavLinksList>
      <StNavFooter>
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          offColor="#ddd"
          onColor="#333"
          uncheckedIcon={<RiMoonFoggyFill />}
          checkedIcon={<BiSun className="switch-light-icon" />}
        />
        {isGreater ? "حالت تاریک" : ""}
      </StNavFooter>
    </StNavContainrer>
  );
};

export default Navigation;
