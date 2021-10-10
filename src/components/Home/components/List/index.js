import React from "react";
import { StHomeMoneyTransformItem } from "./style";

const HomeListItem = ({ name, time, cost, isInput }) => {
  return (
    <StHomeMoneyTransformItem isInput={isInput}>
      <span className="data--name">{name}</span>
      <span className="data--time">{time}</span>
      <span className="data--cost">تومان {cost.toLocaleString("fa")}</span>
    </StHomeMoneyTransformItem>
  );
};

export default HomeListItem;
