import React from "react";
import { convertToJalaliDate } from "../../../timeHelper";
import { StHomeMoneyTransformItem } from "./style";

const HomeListItem = ({ currentAccount }) => {
  const transactions = currentAccount?.transactions;
  return transactions
    .slice(transactions?.length - 3, transactions?.length)
    .reverse()
    .map(({ name, time, isInput, price }) => (
      <StHomeMoneyTransformItem isInput={isInput}>
        <span className="data--name">{name}</span>
        <span className="data--time">
          {convertToJalaliDate(time)}
          {console.log(time)}
        </span>
        <span className="data--cost">تومان {price?.toLocaleString("fa")}</span>
      </StHomeMoneyTransformItem>
    ));
};

export default HomeListItem;
