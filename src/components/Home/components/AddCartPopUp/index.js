import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { banksColor, banksNameArr } from "../../../helperDate";
import { useDispatch } from "react-redux";
import {
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
import { addingBank } from "../../../../redux/moneyTransform/productActions";

const AddCartPopUp = ({ setIsAddCardsPopedUp }) => {
  const [bankNamePu, setBankNamePustate] = useState("");
  const dispatch = useDispatch();
  const bankNameValue = (item) => () => {
    setBankNamePustate(item);
  };

  const initialValues = {
    cost: "",
    time: "",
  };

  const onSubmit = (values) => {
    dispatch(
      addingBank({
        ...values,
        bank: bankNamePu,
        isInput: true,
        id: Math.floor(Math.random() * 1000000),
        name: "افزودن درامد ",
      })
    );
    setIsAddCardsPopedUp((prev) => !prev);
  };

  const validationSchema = Yup.object({
    cost: Yup.string("تایپ وارد شده نادرست است")
      .min(7, "اعداد وارد شده باید بیشتر از ۷ عدد باشد")
      .max(10, "بیشترین مقدار")
      .required("این فیلد الزامی میباشد"),
    time: Yup.string()
      .required("این فیلد الزامی میباشد")
      .min(8, "تایپ وارد شده اشتباه میباشد لطفا طبق نمونه انجام دهید")
      .matches(/[0-9/]/, "لطفا فرمت درستی وارد کنید"),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  const BanksSelect = {
    refah: 1,
    saderat: 2,
    saman: 3,
    mellat: 4,
    melli: 5,
    sina: 6,
    tejarat: 7,
    shahr: 8,
  };
  const numberBanks = BanksSelect[bankNamePu.toLocaleLowerCase()];
  return (
    <StAddCartPopUp>
      <StAddCartPopUpContent>
        <h1>اضافه کردن کارت</h1>
        <StAddCartPopUpContentItem numberBanks={numberBanks}>
          {banksNameArr.map((item) => {
            const Logo = banksColor[item.toLocaleLowerCase()];
            return <Logo onClick={bankNameValue(item)} />;
          })}
        </StAddCartPopUpContentItem>
        <StAddCartPopUpContentForm onSubmit={formik.handleSubmit}>
          <StAddCartPopUpContentFormControl>
            <label htmlFor="cost">: دارایی فعلی</label>
            <StAddCartFormControlInput
              type="number"
              id="cost"
              name="cost"
              placeholder="دارایی (تومان)"
              required
              {...formik.getFieldProps("cost")}
            />
            {formik.errors.cost && formik.touched.cost ? (
              <p>{formik.errors.cost}</p>
            ) : null}
          </StAddCartPopUpContentFormControl>
          <StAddCartPopUpContentFormControl>
            <label htmlFor="time">: تاریخ ثبت</label>
            <StAddCartFormControlInput
              type="text"
              id="time"
              name="time"
              placeholder=" نمونه : 1400/03/02   لطفا از اعداد انگلیسی استفاده نمایید"
              {...formik.getFieldProps("time")}
            />
            {formik.touched.time && formik.errors.time ? (
              <p>{formik.errors.time}</p>
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
      </StAddCartPopUpContent>
    </StAddCartPopUp>
  );
};

export default AddCartPopUp;
