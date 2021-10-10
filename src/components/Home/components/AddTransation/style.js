import styled from "styled-components";

export const StAddTransaction = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00000060;
  position: absolute;
  top: 0;
  left: 0;
`;
export const StAddTransactionContent = styled.ul`
  width: 65%;
  height: 70%;
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 30px;
  position: relative;
  & span {
    width: 100%;
    height: 50px;
    display: flex;
    font-size: 1.5rem;
    margin-bottom: 30px;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    & svg {
      width: 30px;
      height: 30px;
      pad: 5px;
      color: #ff0000;
      border-radius: 50%;
      border: 1px solid #ff0000;
      cursor: pointer;
    }
  }
`;
export const StAddTransactionContentItem = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  z-index: 3;
  & svg {
    cursor: pointer;
  }
  & :nth-child(${(props) => props.numberBanks}) {
    background-color: greenyellow;
    border-radius: 10px;
  }
`;

export const StAddTransactionContentForm = styled.form`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  & p {
    color: red;
    font-weight: bold;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const StAddTransactionContentFormControl = styled.form`
  width: 100%;
  height: auto;
  margin: 20px auto;
  text-align: right;
`;

export const StAddCartFormControlInput = styled.input`
  width: 100%;
  height: 2rem;
  text-align: right;
  margin-top: 10px;
  padding: 0.5rem;
  color: #222;
  border-bottom: 2px solid #e0e0e0;
`;
export const StAddTransactionContentFormSubmitContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StAddTransactionContentFormSubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #fff;
  background: #88d453;
  cursor: pointer;
  border-radius: 10px;
`;
export const StAddTransactionContentFormEnd = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  color: #e74c3c;
  border: 2px solid #e74c3c;
  cursor: pointer;
  border-radius: 10px;
`;

export const StAddTransactionSelectTitle = styled.div`
  width: 100%;
  height: 300px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
