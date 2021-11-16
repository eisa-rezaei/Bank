import React from "react";
import Navigation from "../Navigation";
import {LayoutContainer, StInfoContainer} from "./style";

const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Navigation />
      <StInfoContainer>{children}</StInfoContainer>
    </LayoutContainer>
  );
};

export default Layout;
