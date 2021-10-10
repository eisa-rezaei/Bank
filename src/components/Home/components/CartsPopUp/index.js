import React from "react";
import { useSelector } from "react-redux";
import selectors from "../../../../redux/moneyTransform/selectors";
import { banksColor, banksName } from "../../../helperDate";
import {
  StCartPopUp,
  StCartPopUpContent,
  StCartPopUpContentItem,
} from "./style";

const CartsPopUp = ({ setIsCardsPopedUp, setBank }) => {
  const moneyTransform = useSelector(selectors.getMoneyTransform);

  const bankName = [...new Set(moneyTransform.map((item) => item.bank))];

  const bankChangeHandler = (item) => () => {
    setBank(item);
  };

  return (
    <StCartPopUp onClick={() => setIsCardsPopedUp((prev) => !prev)}>
      <StCartPopUpContent>
        {bankName.map((item) => {
          const Logo = banksColor[item.toLowerCase()];
          return (
            <StCartPopUpContentItem onClick={bankChangeHandler(item)}>
              <h1>{banksName[item.toLowerCase()]}</h1>
              <h2>{<Logo />}</h2>
            </StCartPopUpContentItem>
          );
        })}
      </StCartPopUpContent>
    </StCartPopUp>
  );
};

export default CartsPopUp;
