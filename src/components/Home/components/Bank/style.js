import styled from "styled-components";
import {device} from "../../../screenSize";

export const StHomeBankName = styled.section`
  width: 85%;
  height: 300px;
  padding: 60px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #473252;
  border-radius: 40px;
  transition: all 0.4s linear;
  :hover {
    cursor: pointer;
    transition: all 0.1s linear;
    box-shadow: 0 15px 30px rgba(41, 20, 52, 0.4);
  }
  @media ${device.phone} {
    width: 90%;
    font-size: 1rem;
    text-align: right;
    margin-left: 10px;
    border-radius: 20px;
    height: 150px;
    padding: 20px;
    justify-content: space-between;
  }
`;
export const StHomeBankNameAdd = styled.div`
  width: 100%;
  height: 80px;
  color: #e0e0e099;
  font-size: 1.3rem;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  & p {
    color: ${(props) => (props.amount ? `#ea4c46` : `#fff`)};
    align-self: flex-start;
    font-size: 2rem;
  }
  @media ${device.phone} {
    height: 60px;
    font-size: 0.8rem;
    margin-top: 10px;
    & p {
      font-size: 1rem;
    }
  }
`;

export const StHomeBankNameIconBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  & span {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media ${device.phone} {
    font-size: 0.8rem;
    & span {
      width: 120px;
      & svg {
        width: 35px;
        height: 35px;
      }
    }
  }
`;
