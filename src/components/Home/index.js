import React, {useLayoutEffect} from "react";
import {useState} from "react";

import {HiOutlinePlusSm} from "react-icons/hi";
import {RiEmotionUnhappyLine} from "react-icons/ri";

import ListOfActions from "./components/List";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import selectors from "../../redux/accounts/selectors";

import Bank from "./components/Bank";
import CartsPopUp from "./components/CartsPopUp";
import AddCartPopUp from "./components/AddCartPopUp";
import {StHomeBankName} from "./components/Bank/style";

import {
  StHomeBank,
  StHomeBankAddCard,
  StHomeContainer,
  StHomeDashboard,
  StHomeMoneyListNoAction,
  StHomeMoneyTransform,
  StHomeMoneyTransformTitle,
} from "./style";
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
      <AddCartPopUp
        setIsAddCardsPopedUp={setIsAddCardsPopedUp}
        isAddCardsPopedUp={isAddCardsPopedUp}
      />
      <AddTransaction
        setIsAddTransactionPu={setIsAddTransactionPu}
        isAddTransactionPu={isAddTransactionPu}
      />
      <StHomeDashboard>
        <StHomeMoneyTransformTitle>
          حساب کاربری
          <span onClick={() => setIsAddTransactionPu(true)}>افزودن تراکنش</span>
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

          <StHomeBankAddCard onClick={() => setIsAddCardsPopedUp(true)}>
            <span>
              <HiOutlinePlusSm />
            </span>
          </StHomeBankAddCard>
        </StHomeBank>
      </StHomeDashboard>
      <StHomeMoneyTransform>
        <StHomeMoneyTransformTitle>
          آخرین تراکنش ها
          <Link to="/statistic">
            <span>مشاهده همه</span>
          </Link>
        </StHomeMoneyTransformTitle>
        {Object.keys(currentAccount).length &&
        currentAccount?.transactions?.length ? (
          <ListOfActions currentAccount={currentAccount} />
        ) : (
          <StHomeMoneyListNoAction>
            <RiEmotionUnhappyLine /> تراکنشی تعریف نشده
          </StHomeMoneyListNoAction>
        )}
      </StHomeMoneyTransform>
    </StHomeContainer>
  );
};

export default Home;
