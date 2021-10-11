import styled from "styled-components";

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
  font-size: 1.6rem;
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
`;

export const StMoneyTrTotalValue = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => (props.input ? `color:green;` : `color:red;`)}
`;
