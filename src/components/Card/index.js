import React from "react";

import { useSelector } from "react-redux";
import selectors from "../../redux/accounts/selectors";
import { banksColor, banksName } from "../helperDate";
import { convertToJalaliDate } from "../timeHelper";
import { StCardContaienr, StCardListContainer, StCardListItem } from "./style";

const Card = () => {
  const accounts = useSelector(selectors.getAccounts);
  const transactions = [...accounts.map((item) => item.transactions)];
  let transactionList = [];
  transactions.forEach((item) => transactionList.push(...item));
  return (
    <StCardContaienr>
      <StCardListContainer>
        <h1>کیف پول شما</h1>
        {accounts.map((item) => {
          const Logo = banksColor[item?.bank?.toLowerCase()];
          return (
            <StCardListItem key={item.id}>
              <span>
                <Logo />
              </span>
              <span>{item.name}</span>
              <span>{banksName[item.bank.toLowerCase()]}</span>
              <span>{convertToJalaliDate(item.time)}</span>
            </StCardListItem>
          );
        })}
      </StCardListContainer>
    </StCardContaienr>
  );
};

export default Card;
