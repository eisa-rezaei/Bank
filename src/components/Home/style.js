import styled from "styled-components";

export const StHomeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StHomeDashboard = styled.div`
  width: 100%;
  height: auto;
  color: #473252;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
export const StHomeBank = styled.article`
  width: 100%;
  max-height: 300px;
  border-radius: 20px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const StHomeBankAddCard = styled.div`
  width: 50px;
  height: 100px;
  font-size: 1.5rem;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed black;
  transition: all 0.4s linear;
  :hover {
    cursor: pointer;
    transition: all 0.1s linear;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const StHomeMoneyTransform = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;

export const StHomeMoneyTransformTitle = styled.header`
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
`;

export const StHomeMoneyListNoAction = styled.div`
  width: 100%;
  height: 200px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin-right: 50px;
    font-size: 2rem;
  }
`;
