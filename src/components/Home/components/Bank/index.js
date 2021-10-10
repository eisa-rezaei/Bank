import React from "react";

import { banks, banksName } from "../../../helperDate";
import { useSelector } from "react-redux";
import selectors from "../../../../redux/moneyTransform/selectors";
import {
  StHomeBankName,
  StHomeBankNameAdd,
  StHomeBankNameIconBox,
} from "./style";

const Bank = ({ currentBankName, setIsCardsPopedUp }) => {
  const moneyTransform = useSelector(selectors.getMoneyTransform);
  const currentBank = moneyTransform?.filter(
    (item) => item.bank.toLowerCase() === currentBankName.toLowerCase()
  );

  const Logo = banks[currentBankName?.toLowerCase()];
  const bankName = banksName[currentBankName?.toLowerCase()];

  const currentBankCash = currentBank.reduce((total, curr) => {
    return curr.isInput ? curr.cost + total : total;
  }, 0);

  return (
    <StHomeBankName onClick={() => setIsCardsPopedUp((prev) => !prev)}>
      <StHomeBankNameIconBox>
        <p>{bankName}</p>
        {<Logo />}
      </StHomeBankNameIconBox>
      <StHomeBankNameAdd>
        موجودی
        <p>{currentBankCash.toLocaleString("fa")}</p>
      </StHomeBankNameAdd>
    </StHomeBankName>
  );
};

export default Bank;
