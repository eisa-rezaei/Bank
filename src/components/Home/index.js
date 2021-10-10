import React, { useLayoutEffect } from "react";
import { useState } from "react";

import { HiOutlinePlusSm } from "react-icons/hi";

import HomeListItem from "./components/List";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import selectors from "../../redux/accounts/selectors";

import Bank from "./components/Bank";
import CartsPopUp from "./components/CartsPopUp";
import AddCartPopUp from "./components/AddCartPopUp";
import { StHomeBankName } from "./components/Bank/style";

import {
  StHomeBank,
  StHomeBankAddCard,
  StHomeContainer,
  StHomeDashboard,
  StHomeMoneyTransform,
  StHomeMoneyTransformTitle,
} from "./style";
import { StHomeMoneyTransformItem } from "./components/List/style";
import AddTransaction from "./components/AddTransation";

const Home = () => {
  const accounts = useSelector(selectors.getAccounts);
  const [account, setAccount] = useState("");

  const [isCardsPopedUp, setIsCardsPopedUp] = useState(false);
  const [isAddCardsPopedUp, setIsAddCardsPopedUp] = useState(false);
  const [isAddTransactionPu, setIsAddTransactionPu] = useState(false);

  const currentAccount = accounts.find((item) => item.id === account) || {};

  useLayoutEffect(() => {
    if (!account && accounts.length) {
      setAccount(accounts[0]?.id);
    }
  }, [accounts, account]);

  return (
    <StHomeContainer>
      {isCardsPopedUp && (
        <CartsPopUp
          setIsCardsPopedUp={setIsCardsPopedUp}
          setAccount={setAccount}
        />
      )}
      {isAddCardsPopedUp && (
        <AddCartPopUp setIsAddCardsPopedUp={setIsAddCardsPopedUp} />
      )}
      {isAddTransactionPu && (
        <AddTransaction setIsAddTransactionPu={setIsAddTransactionPu} />
      )}
      <StHomeDashboard>
        <StHomeMoneyTransformTitle>
          حساب کاربری
          <span onClick={() => setIsAddTransactionPu(!isAddTransactionPu)}>
            افزودن تراکنش
          </span>
        </StHomeMoneyTransformTitle>
        <StHomeBank>
          {Object.keys(currentAccount).length ? (
            <Bank
              currentAccount={currentAccount}
              setIsCardsPopedUp={setIsCardsPopedUp}
            />
          ) : (
            <StHomeBankName> هیچ حسابی تغریف نشده</StHomeBankName>
          )}

          <StHomeBankAddCard
            onClick={() => setIsAddCardsPopedUp(!isAddCardsPopedUp)}
          >
            <span>
              <HiOutlinePlusSm />
            </span>
          </StHomeBankAddCard>
        </StHomeBank>
      </StHomeDashboard>
      <StHomeMoneyTransform>
        <StHomeMoneyTransformTitle>
          نقل و انتقالات
          <Link to="/statistic">
            <span>مشاهده همه</span>
          </Link>
        </StHomeMoneyTransformTitle>
        {Object.keys(currentAccount).length &&
        currentAccount?.transactions?.length ? (
          <HomeListItem currentAccount={currentAccount} />
        ) : (
          <StHomeMoneyTransformItem>
            تراکنشی تعریف نشده
          </StHomeMoneyTransformItem>
        )}
      </StHomeMoneyTransform>
    </StHomeContainer>
  );
};

export default Home;
