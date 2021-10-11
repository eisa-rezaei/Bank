import React from "react";
import { banksColor } from "../../../helperDate";
import { convertToJalaliDate } from "../../../timeHelper";
import { StHomeMoneyTransformItem } from "./style";

const HomeListItem = ({ currentAccount }) => {
  const transactions = currentAccount?.transactions;
  return transactions
    .slice(transactions?.length - 3, transactions?.length)
    .reverse()
    .map(({ name, time, isInput, price, bank }) => {
      const Logo = banksColor[bank];
      return (
        <StHomeMoneyTransformItem isInput={isInput}>
          <span>
            <Logo />
          </span>
          <span className="data--name">{name}</span>
          <span className="data--time">
            {convertToJalaliDate(time)}
            {console.log(time)}
          </span>
          <span className="data--cost">
            تومان {price?.toLocaleString("fa")}
          </span>
        </StHomeMoneyTransformItem>
      );
    });
};

export default HomeListItem;
