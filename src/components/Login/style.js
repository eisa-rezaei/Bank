import styled from "styled-components";

export const StLoginContainer = styled.main`
  margin-left: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StLoginForm = styled.form`
  min-width: 500px;
  padding: 2rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.2;
  letter-spacing: 1px;
  text-transform: capitalize;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  .forgot-password {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-left: 70%;
    text-decoration: underline;
    cursor: pointer;
    color: rgba(29, 8, 8, 0.521);
  }
  .forgot-password:hover {
    cursor: pointer;
    color: rgba(34, 34, 34, 0.774);
  }
`;

export const StLoginFormControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-bottom: 2rem;
  & p {
    color: red;
    font-weight: bold;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const StLoginFormControlInput = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: 10px;
  padding: 0.5rem;
  color: #222;
  border-bottom: 2px solid #e0e0e0;
`;

export const StSubmitBtn = styled.button`
  color: #fff;
  cursor: pointer;
  width: 80%;
  height: 2.5rem;
  margin: 5px auto;
  border-radius: 20px;
  transition: all 0.3s linear;
  background: rgb(3, 247, 212);
  background: linear-gradient(
    90deg,
    rgba(3, 247, 212, 1) 20%,
    rgba(56, 29, 163, 1) 50%,
    rgba(243, 0, 255, 1) 80%
  );
`;
