import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

import * as Yup from "yup";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../../../redux/accounts/actions";
import selectors from "../../../../redux/accounts/selectors";
import { banksColor } from "../../../helperDate";

import Switch from "react-switch";
import {
  StAddCartFormControlInput,
  StAddTransaction,
  StAddTransactionContent,
  StAddTransactionContentForm,
  StAddTransactionContentFormControl,
  StAddTransactionContentFormEnd,
  StAddTransactionContentFormSubmitBtn,
  StAddTransactionContentFormSubmitContainer,
  StAddTransactionContentItem,
  StAddTransactionContentSingleItem,
  StAddTransactionSelectTitle,
} from "./style";

const AddTransaction = ({ setIsAddTransactionPu }) => {
  const [bankAccId, setBankAccId] = useState("");
  const [isInputchecked, setIsInputchecked] = useState(false);

  const accounts = useSelector(selectors.getAccounts);

  const dispatch = useDispatch();

  const bankNameValue = (item) => () => {
    setBankAccId(item);
  };

  const initialValues = {
    name: "",
    price: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addTransaction({
        id: bankAccId,
        transaction: {
          ...values,
          id: uuidv4(),
          time: new Date(),
          bank: accounts.find((item) => item.id === bankAccId).bank,
        },
      })
    );
    setIsAddTransactionPu((prev) => !prev);
  };

  const validationSchema = Yup.object({
    price: Yup.string()
      .min(4, "اعداد وارد شده باید بیشتر از ۴ عدد باشد")
      .max(10, "قراتر از حداکثر مقدار تراکنش")
      .required("این فیلد الزامی میباشد"),
    name: Yup.string()
      .required("این فیلد الزامی میباشد")
      .max(16, "حداکثر کاراکتر در متن ۱۶ کاراکتر ")
      .min(4, "حروف وارد شده کمتر از ۴ کاراکتر میباشد"),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  const formIsInputHandler = (checked) => {
    formik.setFieldValue("isInput", checked);
    setIsInputchecked(!isInputchecked);
  };

  return (
    <StAddTransaction>
      <StAddTransactionContent>
        <span>
          <h1>افزودن تراکنش</h1>
          <IoClose onClick={() => setIsAddTransactionPu((prev) => !prev)} />
        </span>
        <StAddTransactionContentItem>
          {accounts.map((item) => {
            const Logo = banksColor[item.bank.toLocaleLowerCase()];
            return (
              <StAddTransactionContentSingleItem
                onClick={bankNameValue(item.id)}
                key={item.id}
                selected={item.id === bankAccId}
              >
                <Logo />
                <p>{item.name}</p>
              </StAddTransactionContentSingleItem>
            );
          })}
        </StAddTransactionContentItem>
        {bankAccId ? (
          <StAddTransactionContentForm onSubmit={formik.handleSubmit}>
            <StAddTransactionContentFormControl>
              <label htmlFor="name"> : عنوان تراکنش</label>
              <StAddCartFormControlInput
                type="text"
                id="name"
                name="name"
                placeholder="عنوان تراکنش"
                required
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <p>{formik.errors.name}</p>
              ) : null}
            </StAddTransactionContentFormControl>
            <StAddTransactionContentFormControl>
              <label htmlFor="price">: هزینه</label>
              <StAddCartFormControlInput
                type="number"
                id="price"
                name="price"
                placeholder="هزینه (تومان)"
                required
                {...formik.getFieldProps("price")}
              />
              {formik.errors.price && formik.touched.price ? (
                <p>{formik.errors.price}</p>
              ) : null}
            </StAddTransactionContentFormControl>
            <StAddTransactionContentFormSubmitContainer>
              <Switch checked={isInputchecked} onChange={formIsInputHandler} />
              آیا تراکنش واریزی است؟
            </StAddTransactionContentFormSubmitContainer>
            <StAddTransactionContentFormSubmitContainer>
              <StAddTransactionContentFormSubmitBtn type="submit">
                اضافه کردن
              </StAddTransactionContentFormSubmitBtn>
              <StAddTransactionContentFormEnd
                onClick={() => setIsAddTransactionPu((prev) => !prev)}
              >
                انصراف
              </StAddTransactionContentFormEnd>
            </StAddTransactionContentFormSubmitContainer>
          </StAddTransactionContentForm>
        ) : (
          <StAddTransactionSelectTitle>
            {accounts.length
              ? `لطفا حساب خود را انتخاب نمایید`
              : `لطفا یک حساب برای خود ایحاد نمایید`}
          </StAddTransactionSelectTitle>
        )}
      </StAddTransactionContent>
    </StAddTransaction>
  );
};

export default AddTransaction;
