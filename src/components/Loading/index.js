import React from "react";
import { GoGear } from "react-icons/go";
import { StLoadingContainer, StLoadingLogoConatainer } from "./styles";

const Loading = () => {
  return (
    <StLoadingContainer>
      <StLoadingLogoConatainer>
        <GoGear />
        <GoGear />
      </StLoadingLogoConatainer>
    </StLoadingContainer>
  );
};

export default Loading;
