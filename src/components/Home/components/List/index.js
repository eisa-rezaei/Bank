import React from "react";
import { banksColor } from "../../../helperDate";
import { convertToJalaliDate } from "../../../timeHelper";
import { StHomeMoneyTransformItem } from "./style";

const HomeListItem = ({ currentAccount }) => {
  const transactions = currentAccount?.transactions;
  return transactions
    .slice(-3)
    .reverse()
    .map(({ name, time, isInput, price, bank, id }) => {
      const Logo = banksColor[bank];
      return (
        <StHomeMoneyTransformItem isInput={isInput} key={id}>
          <span>
            <Logo />
          </span>
          <span className="data--name">{name}</span>
          <span className="data--time">{convertToJalaliDate(time)}</span>
          <span className="data--cost">
            تومان {price?.toLocaleString("fa")}
          </span>
        </StHomeMoneyTransformItem>
      );
    });
};

export default HomeListItem;
