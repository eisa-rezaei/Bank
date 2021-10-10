import styled from "styled-components";

export const StHomeMoneyTransformItem = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  & span {
    min-width: 120px;
    text-align: center;
  }
  .data--name {
    font-weight: bold;
  }
  .data--time {
    color: #00000044;
  }
  .data--cost {
    min-width: 150px;
    color: ${(props) => (props.isInput ? `green` : `red`)};
  }
`;
