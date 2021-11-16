import styled from "styled-components";
import {device} from "../../../screenSize";

export const StAddCartPopUp = styled.div`
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
  display: ${(props) => (props.isAddCardsPopedUp ? "flex" : "none")};

  @media ${device.phone} {
    padding: 0;
    display: flex;
    background: none;
    backdrop-filter: blur(2px);
    align-items: flex-end;
    transition: all 0.4s ease;
    transform: ${(props) =>
      props.isAddCardsPopedUp ? "translateY(0%)" : "translateY(100%);"};
  }
`;
export const StAddCartPopUpContent = styled.ul`
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
      margin-bottom: 20px;
    }
  }
`;

export const StAddCartPopUpContentForm = styled.form`
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

export const StAddCartPopUpContentFormControl = styled.form`
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
`;
export const StAddCartPopUpContentFormSubmitContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const StAddCartPopUpContentFormSubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #fff;
  align-self: flex-start;
  background: #88d453;
  cursor: pointer;
  border-radius: 10px;
  @media ${device.tablet} {
    bottom: 20px;
    right: 30px;
  }
  @media ${device.phone} {
    width: 40%;
    height: 40px;
    bottom: 10px;
    font-size: 0.9rem;
    left: 20px;
  }
`;
export const StAddCartPopUpContentFormEnd = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  color: #e74c3c;
  align-self: flex-end;
  border: 2px solid #e74c3c;
  cursor: pointer;
  border-radius: 10px;
  @media ${device.tablet} {
    bottom: 20px;
    left: 30px;
  }
  @media ${device.phone} {
    width: 40%;
    height: 40px;
    position: fixed;
    font-size: 0.9rem;
    bottom: 10px;
    right: 20px;
  }
`;

export const StAddCardSelectTitle = styled.div`
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

export const StAddCartPopUpContentItem = styled.div`
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
  }
  @media ${device.phone} {
    min-height: 110px;
    padding: 0 10px;
    overflow: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const StAddCartContentSingleItem = styled.div`
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
    width: 100px;
    margin-left: 10px;
    line-height: 26px;
  }
`;
