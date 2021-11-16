import styled from "styled-components";
import {device} from "../screenSize";

export const StMoneyTrStatistic = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
`;

export const StMoneyTrStatisticTitle = styled.header`
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
    margin-bottom: 0;
    align-items: center;
    & span {
      font-size: 0.6rem;
    }
  }
`;
export const StMoneyTrStatisticItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.isSum && `border-top: 1px solid gray;`}

  & span {
    width: clamp(120px, 150px, 180px);
    text-align: center;
  }
  .data--name {
    font-weight: bold;
  }
  .data--time {
    color: #00000044;
  }
  .data--cost {
    color: ${(props) => (props.isInput ? `green` : `red`)};
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
    .data--cost {
      min-width: 70px;
    }
  }
`;

export const StMoneyTrTotalValue = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => (props.input ? `color:green;` : `color:red;`)}
  @media ${device.phone} {
    justify-content: space-around;
  }
`;
