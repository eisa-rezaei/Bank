import React from "react";
import { useState } from "react";

import { HiOutlinePlusSm } from "react-icons/hi";

import HomeListItem from "./components/List";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import selectors from "../../redux/moneyTransform/selectors";

import {
  StHomeBank,
  StHomeBankAddCard,
  StHomeContaienr,
  StHomeDashboard,
  StHomeMoneyTransform,
  StHomeMoneyTransformTitle,
} from "./style";
import Bank from "./components/Bank";
import CartsPopUp from "./components/CartsPopUp";
import AddCartPopUp from "./components/AddCartPopUp";

const Home = () => {
  const [bank, setBank] = useState("melli");
  const [isCardsPopedUp, setIsCardsPopedUp] = useState(false);
  const [isAddCardsPopedUp, setIsAddCardsPopedUp] = useState(false);

  const moneyTransform = useSelector(selectors?.getMoneyTransform);
  const currentBank = moneyTransform?.filter(
    (item) => item?.bank?.toLowerCase() === bank?.toLowerCase()
  );

  return (
    <StHomeContaienr>
      {isCardsPopedUp && (
        <CartsPopUp setIsCardsPopedUp={setIsCardsPopedUp} setBank={setBank} />
      )}
      {isAddCardsPopedUp && (
        <AddCartPopUp setIsAddCardsPopedUp={setIsAddCardsPopedUp} />
      )}
      <StHomeDashboard>
        حساب کاربری
        <StHomeBank>
          <Bank
            currentBankName={currentBank[0].bank}
            setIsCardsPopedUp={setIsCardsPopedUp}
          />
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
          <Link to="/statistic">مشاهده همه</Link>
        </StHomeMoneyTransformTitle>
        {currentBank
          ?.reverse()
          .slice(0, 3)
          .map((item) => (
            <HomeListItem {...item} />
          ))}
      </StHomeMoneyTransform>
    </StHomeContaienr>
  );
};

export default Home;
