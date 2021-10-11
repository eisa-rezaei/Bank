import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg); 
    }
`;
const rotateRevers = keyframes`
    from {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(0deg); 
    }
`;

export const StProfileContainer = styled.main`
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 20vh 0;
  & p {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    & p {
      font-size: 1.2rem;
    }
  }
`;

export const StProfileLogoConatainer = styled.div`
  width: 150px;
  margin: 60px auto;
  position: relative;
  font-size: 4rem;
  & svg:first-child {
    animation: ${rotate} 3s linear infinite;
  }
  & svg:last-child {
    color: #c073c5;
    font-size: 3rem;
    position: absolute;
    top: 43px;
    right: 0px;
    animation: ${rotateRevers} 3s linear infinite;
  }
`;
