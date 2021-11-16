import React from "react";
import {GoGear} from "react-icons/go";
import {StLoadingContainer, StLoadingLogoContainer} from "./styles";

const Loading = ({page}) => {
  return (
    <StLoadingContainer page={page}>
      <StLoadingLogoContainer>
        <span>
          <GoGear />
          <GoGear />
        </span>
      </StLoadingLogoContainer>
    </StLoadingContainer>
  );
};

export default Loading;
