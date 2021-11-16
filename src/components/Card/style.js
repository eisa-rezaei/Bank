import styled from "styled-components";
import {device} from "../screenSize";

export const StCardContaienr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StCardListContainer = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
`;

export const StCardsTitle = styled.header`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  font-size: 1.8rem;
  display: flex;
  align-self: baseline;
  flex-direction: row-reverse;
  justify-content: space-between;
  & span {
    align-self: center;
    font-size: 1rem;
    color: #dc7031;
    cursor: pointer;
  }
  @media ${device.phone} {
    font-size: 0.8rem;
    margin-bottom: 0px;
    align-items: center;
    & span {
      font-size: 0.6rem;
    }
  }
`;

export const StCardListItem = styled.li`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  & span {
    min-width: 60px;
  }
  @media ${device.phone} {
    font-size: 0.55rem;
    & span {
      min-width: 45px;
      & svg {
        width: 35px;
        height: 35px;
      }
    }
  }
`;
export const StCardListNoItem = styled.div`
  width: 100%;
  height: 500px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    margin-top: 20px;
    font-size: 3rem;
  }
`;
