import React, {useState} from "react";

import {IoClose} from "react-icons/io5";

import {v4 as uuidv4} from "uuid";
import {useFormik} from "formik";
import * as Yup from "yup";

import {useDispatch} from "react-redux";
import {banksColor, banksName, banksNameArr} from "../../../helperDate";
import {addAccount} from "../../../../redux/accounts/actions";
import {
  StAddCardSelectTitle,
  StAddCartContentSingleItem,
  StAddCartFormControlInput,
  StAddCartPopUp,
  StAddCartPopUpContent,
  StAddCartPopUpContentForm,
  StAddCartPopUpContentFormControl,
  StAddCartPopUpContentFormEnd,
  StAddCartPopUpContentFormSubmitBtn,
  StAddCartPopUpContentFormSubmitContainer,
  StAddCartPopUpContentItem,
} from "./style";

const AddCartPopUp = ({setIsAddCardsPopedUp, isAddCardsPopedUp}) => {
  const [bankName, setBankName] = useState("");

  const dispatch = useDispatch();

  const bankNameValue = (item) => () => {
    setBankName(item);
  };

  const initialValues = {
    amount: "",
    name: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addAccount({
        ...values,
        bank: bankName,
        id: uuidv4(),
        transactions: [],
        time: new Date().toISOString(),
      })
    );
    setIsAddCardsPopedUp((prev) => !prev);
  };

  const validationSchema = Yup.object({
    amount: Yup.string()
      .min(7, "اعداد وارد شده باید بیشتر از ۷ عدد باشد")
      .max(10, "بیشترین مقدار")
      .required("این فیلد الزامی میباشد"),
    name: Yup.string()
      .required("این فیلد الزامی میباشد")
      .min(4, "مقدار وارد شده نباید کمتر از ۴ کاراکتر باشد")
      .max(12, "مقدار وارد شده نباید بیشتر از ۱۲ کاراکتر باشد"),
  });

  const formik = useFormik({initialValues, onSubmit, validationSchema});

  return (
    <StAddCartPopUp isAddCardsPopedUp={isAddCardsPopedUp}>
      <StAddCartPopUpContent>
        <span>
          <h1> افزودن حساب</h1>
          <IoClose onClick={() => setIsAddCardsPopedUp(false)} />
        </span>
        <StAddCartPopUpContentItem>
          {banksNameArr.map((item, index) => {
            const Logo = banksColor[item.toLocaleLowerCase()];
            return (
              <StAddCartContentSingleItem
                onClick={bankNameValue(item)}
                key={index}
                selected={item === bankName}
              >
                <Logo />
                <p>{banksName[item]}</p>
              </StAddCartContentSingleItem>
            );
          })}
        </StAddCartPopUpContentItem>
        {bankName ? (
          <StAddCartPopUpContentForm onSubmit={formik.handleSubmit}>
            <StAddCartPopUpContentFormControl>
              <label htmlFor="name"> : عنوان حساب</label>
              <StAddCartFormControlInput
                type="text"
                id="name"
                name="name"
                placeholder="عنوان حساب"
                required
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </StAddCartPopUpContentFormControl>
            <StAddCartPopUpContentFormControl>
              <label htmlFor="cost">: دارایی فعلی</label>
              <StAddCartFormControlInput
                type="number"
                id="amount"
                name="amount"
                placeholder="دارایی (تومان)"
                required
                {...formik.getFieldProps("amount")}
              />
              {formik.errors.amount && formik.touched.amount ? (
                <p>{formik.errors.amount}</p>
              ) : null}
            </StAddCartPopUpContentFormControl>
            <StAddCartPopUpContentFormSubmitContainer>
              <StAddCartPopUpContentFormSubmitBtn align type="submit">
                اضافه کردن
              </StAddCartPopUpContentFormSubmitBtn>
              <StAddCartPopUpContentFormEnd
                onClick={() => setIsAddCardsPopedUp((prev) => !prev)}
              >
                انصراف
              </StAddCartPopUpContentFormEnd>
            </StAddCartPopUpContentFormSubmitContainer>
          </StAddCartPopUpContentForm>
        ) : (
          <StAddCardSelectTitle>
            لطفا بانک را انتخاب نمایید
          </StAddCardSelectTitle>
        )}
      </StAddCartPopUpContent>
    </StAddCartPopUp>
  );
};

export default AddCartPopUp;
