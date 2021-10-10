import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  StLoginContainer,
  StLoginForm,
  StLoginFormControl,
  StLoginFormControlInput,
  StSubmitBtn,
} from "./style";

const LoginForm = () => {
  const initialValues = {
    bankName: "",
    cost: 123,
    time: "",
  };

  const onSubmit = (values) => {
    console.log("from data : ", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This feild is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This feild is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <StLoginContainer>
      <StLoginForm onSubmit={formik.handleSubmit}>
        <StLoginFormControl>
          <label htmlFor="name">Name:</label>
          <StLoginFormControlInput
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </StLoginFormControl>
        <StLoginFormControl>
          <label htmlFor="email">Email:</label>
          <StLoginFormControlInput
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </StLoginFormControl>
        <StLoginFormControl>
          <label htmlFor="password">password:</label>
          <StLoginFormControlInput
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
          <h4 className="forgot-password">forgot password</h4>
        </StLoginFormControl>
        <StSubmitBtn type="submit">Submit</StSubmitBtn>
      </StLoginForm>
    </StLoginContainer>
  );
};

export default LoginForm;
