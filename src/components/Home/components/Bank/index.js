import React from "react";
import { banks } from "../../../helperDate";

import {
  StHomeBankName,
  StHomeBankNameAdd,
  StHomeBankNameIconBox,
} from "./style";

const Bank = ({ currentAccount, setIsCardsPopedUp }) => {
  const Logo = banks[currentAccount?.bank?.toLowerCase()];
  return (
    <StHomeBankName onClick={() => setIsCardsPopedUp((prev) => !prev)}>
      <StHomeBankNameIconBox>
        <p>{currentAccount?.name}</p>
        <Logo />
      </StHomeBankNameIconBox>
      <StHomeBankNameAdd>
        موجودی
        <p>{currentAccount?.amount?.toLocaleString("fa")}</p>
      </StHomeBankNameAdd>
    </StHomeBankName>
  );
};

export default Bank;
