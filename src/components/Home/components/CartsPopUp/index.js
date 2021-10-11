import React from "react";
import { useSelector } from "react-redux";
import selectors from "../../../../redux/accounts/selectors";
import { banksColor, banksName } from "../../../helperDate";
import {
  StCartPopUp,
  StCartPopUpContent,
  StCartPopUpContentItem,
} from "./style";

const CartsPopUp = ({ setIsCardsPopedUp, setAccount }) => {
  const accounts = useSelector(selectors.getAccounts);

  const bankChangeHandler = (item) => () => {
    setAccount(item);
  };

  return (
    <StCartPopUp onClick={() => setIsCardsPopedUp((prev) => !prev)}>
      <StCartPopUpContent>
        <h1>لیست کارت ها</h1>
        {accounts.map((account) => {
          const Logo = banksColor[account.bank.toLowerCase()];
          return (
            <StCartPopUpContentItem onClick={bankChangeHandler(account.id)}>
              <h1>بانک {banksName[account.bank.toLowerCase()]}</h1>
              <h2>{<Logo />}</h2>
            </StCartPopUpContentItem>
          );
        })}
      </StCartPopUpContent>
    </StCartPopUp>
  );
};

export default CartsPopUp;
