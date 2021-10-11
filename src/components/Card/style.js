import styled from "styled-components";

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
  & h1 {
    margin-bottom: 40px;
    font-size: 1.6rem;
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
