import React from "react";
import { GoGear } from "react-icons/go";
import { StProfileContainer, StProfileLogoConatainer } from "./styles";

const Profile = () => {
  return (
    <StProfileContainer>
      <p>. . . در حال ساخت </p>
      <StProfileLogoConatainer>
        <GoGear />
        <GoGear />
      </StProfileLogoConatainer>
    </StProfileContainer>
  );
};

export default Profile;
