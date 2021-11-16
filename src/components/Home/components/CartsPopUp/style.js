import styled from "styled-components";
import {device} from "../../../screenSize";

export const StCartPopUp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #00000060;
  position: absolute;
  top: 0;
  left: 0;
`;
export const StCartPopUpContent = styled.div`
  width: 50%;
  height: 50%;
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 30px;
  & h1 {
    font-size: 1.3rem;
    margin: 10px 0;
  }
  @media ${device.phone} {
    width: 90%;
    padding: 15px;
    & h1 {
      font-size: 0.8rem;
    }
  }
`;
export const StCartPopUpContentItem = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  :hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;
