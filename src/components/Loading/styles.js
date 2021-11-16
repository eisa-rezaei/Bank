import styled, {keyframes} from "styled-components";
import {device} from "../screenSize";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
        color: #118888;
    }
    50% {
        transform: rotate(180deg); 
        color: #c073c5;
    }
    100% {
        transform: rotate(0);
        color: #118888;
    }
`;
const rotateRevers = keyframes`
    0% {
        transform: rotate(180deg);
        color: #c073c5;
    }
    50% {
        transform: rotate(0deg); 
        color: #118888;
    }
     100% {
        transform: rotate(180deg); 
        color: #c073c5;
    }
`;

export const StLoadingContainer = styled.main`
  width: 100%;
  min-height: ${(props) => (props.page ? `100vh` : `50vh`)};
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    font-size: 3rem;
  }
  @media ${device.phone} {
    padding: 0px;
    & p {
      font-size: 1.2rem;
    }
  }
`;

export const StLoadingLogoContainer = styled.div`
  width: 150px;
  margin: 60px auto;
  position: relative;
  & svg {
    :first-child {
      font-size: 4rem;
      top: -40px;
      right: -10px;
      color: #fff;
      position: absolute;
      animation: ${rotate} 2.5s ease-in-out infinite;
    }
    :last-child {
      color: #c073c5;
      font-size: 3rem;
      position: absolute;
      top: 3px;
      right: 50px;
      animation: ${rotateRevers} 2.5s ease-in-out infinite;
    }
  }

  @media ${device.phone} {
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    padding-right: 20px;
    & svg {
      :first-child {
        position: static;
        font-size: 2.5rem;
      }
      :last-child {
        position: absolute;
        top: 56%;
        left: 43%;
        font-size: 2rem;
      }
    }
  }
`;
