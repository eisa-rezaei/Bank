import React from "react";
import {useSelector} from "react-redux";
import selectors from "../../redux/accounts/selectors";
import {banksColor} from "../helperDate";
import {convertToJalaliDate} from "../timeHelper";
import {
  StMoneyTrStatistic,
  StMoneyTrStatisticItem,
  StMoneyTrStatisticTitle,
  StMoneyTrTotalValue,
} from "./style";

const Statistic = () => {
  const accounts = useSelector(selectors.getAccounts);
  const transactions = [...accounts.map((item) => item.transactions)];
  let transactionList = [];
  transactions.forEach((item) => transactionList.push(...item));

  const outPut = [...transactionList.filter((item) => !item.isInput)];
  const inPut = [...transactionList.filter((item) => item.isInput)];

  const calculator = (arr) => {
    return arr.reduce((total, current) => total + current.price, 0);
  };

  const outPutSum = calculator(outPut);
  const inPutSum = calculator(inPut);

  return (
    <StMoneyTrStatistic>
      <StMoneyTrStatisticTitle>آخرین تراکنش ها</StMoneyTrStatisticTitle>
      {accounts.length && transactionList[0] ? (
        transactionList.map((item) => {
          const Logo = banksColor[item.bank];
          return (
            <StMoneyTrStatisticItem isInput={item.isInput}>
              <span>
                <Logo />
              </span>
              <span className="data--name">{item.name}</span>
              <span className="data--time">
                {convertToJalaliDate(item.time)}
              </span>
              <span className="data--cost">
                تومان {item.price?.toLocaleString("fa")}
              </span>
            </StMoneyTrStatisticItem>
          );
        })
      ) : (
        <StMoneyTrStatisticItem>تراکنشی تعریف نشده</StMoneyTrStatisticItem>
      )}
      <StMoneyTrStatisticItem isSum>
        <StMoneyTrTotalValue input>
          {inPutSum.toLocaleString()} <p>ورودی</p>
        </StMoneyTrTotalValue>
        <StMoneyTrTotalValue>
          {outPutSum.toLocaleString()} <p>خروجی</p>
        </StMoneyTrTotalValue>
      </StMoneyTrStatisticItem>
    </StMoneyTrStatistic>
  );
};

export default Statistic;
