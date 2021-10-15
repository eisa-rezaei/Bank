import React from "react";
import { banks, banksName } from "../../../helperDate";

import {
  StHomeBankName,
  StHomeBankNameAdd,
  StHomeBankNameIconBox,
} from "./style";

const Bank = ({ currentAccount, setIsCardsPopedUp }) => {
  const Logo = banks[currentAccount?.bank?.toLowerCase()];
  const bankName = banksName[currentAccount?.bank?.toLowerCase()];

  const amount = currentAccount?.amount;
  return (
    <StHomeBankName onClick={() => setIsCardsPopedUp((prev) => !prev)}>
      <StHomeBankNameIconBox>
        <p>{currentAccount?.name}</p>
        <span>
          <Logo />
          <p>{bankName}</p>
        </span>
      </StHomeBankNameIconBox>
      <StHomeBankNameAdd amount={amount < 0}>
        موجودی
        <p>{amount.toLocaleString("fa")}</p>
      </StHomeBankNameAdd>
    </StHomeBankName>
  );
};

export default Bank;
