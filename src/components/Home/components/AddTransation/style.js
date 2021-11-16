import styled from "styled-components";
import {device} from "../../../screenSize";

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
  display: ${(props) => (props.isAddTransactionPu ? "flex" : "none")};

  @media ${device.phone} {
    padding: 0;
    display: flex;
    background: none;
    backdrop-filter: blur(2px);
    align-items: flex-end;
    transition: all 0.4s ease;
    transform: ${(props) =>
      props.isAddTransactionPu ? "translateY(0%)" : "translateY(100%)"};
  }
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
  @media ${device.tablet} {
    width: 80%;
    height: 90%;
  }
  @media ${device.phone} {
    width: 100%;
    height: 90%;
    min-height: 400px;
    padding: 15px;
    border-radius: 30px 30px 0 0;
    border: 1px solid #e0e0e0;
    font-size: 1rem;
    & span {
      font-size: 1rem;
    }
  }
`;

export const StAddTransactionContentItem = styled.div`
  width: clamp(40%, 50%, 100%);
  height: 70px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  & svg {
    cursor: pointer;
  }
`;

export const StAddTransactionContentSingleItem = styled.div`
  width: 100px;
  height: auto;
  padding: 10px;
  line-height: 46px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #efefef;
  background-color: ${(props) => (props.selected ? `greenyellow;` : `#fff;`)};
  @media ${device.phone} {
    width: 80px;
    line-height: 26px;
    & svg {
      width: 40px;
      height: 40px;
    }
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
  @media ${device.phone} {
    font-size: 0.8rem;
    margin: 10px auto;
  }
`;

export const StAddCartFormControlInput = styled.input`
  width: 100%;
  height: 2rem;
  text-align: right;
  margin-top: 10px;
  padding: 0.5rem;
  color: #222;
  border-bottom: 2px solid #e0e0e0;
  @media ${device.phone} {
    font-size: 0.8rem;
  }
`;
export const StAddTransactionContentFormSubmitContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.phone} {
    font-size: 0.8rem;
  }
`;

export const StAddTransactionContentFormSubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  bottom: 40px;
  left: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  border-radius: 10px;
  background-color: #88d453;
  @media ${device.tablet} {
    bottom: 20px;
    right: 30px;
  }
  @media ${device.phone} {
    width: 40%;
    bottom: 10px;
    font-size: 0.9rem;
    height: 40px;
    left: 20px;
  }
`;
export const StAddTransactionContentFormEnd = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  bottom: 40px;
  right: 40px;
  color: #e74c3c;
  cursor: pointer;
  position: absolute;
  border-radius: 10px;
  border: 2px solid #e74c3c;
  @media ${device.tablet} {
    bottom: 20px;
    right: 30px;
  }
  @media ${device.phone} {
    width: 40%;
    height: 40px;
    font-size: 0.9rem;
    bottom: 10px;
    right: 20px;
  }
`;

export const StAddTransactionSelectTitle = styled.div`
  width: 100%;
  height: 300px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.phone} {
    font-size: 0.8rem;
  }
`;
