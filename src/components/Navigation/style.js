import styled from "styled-components";
import {device} from "../screenSize";

export const StNavContainrer = styled.nav`
  width: 400px;
  height: 100vh;
  padding: 40px;
  font-size: 1.1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fafbfa;
  & a {
    margin: 40px 0;
  }
  @media ${device.tablet} {
    width: auto;
    padding: 40px 20px;
  }
  @media ${device.phone} {
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    position: absolute;
    border-top: 1px solid #e0e0e0;
    padding: 0 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StNavLinksList = styled.ul`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.phone} {
    flex-direction: row;
    margin-top: 0;
  }
`;
export const StNavLink = styled.li`
  width: 100%;
  height: 80px;
  font-size: 0.9rem;
  padding-right: 20px;
  color: ${(props) => (props.path ? `#473252` : `#c1c1c1`)};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  & svg {
    font-size: 1.4rem;
    margin-left: 25px;
  }
  & a {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media ${device.phone} {
    height: 60px;
    padding-right: 0;
    max-width: 80px;
    & a {
      justify-content: center;
    }
    & svg {
      margin-left: 0;
    }
  }
`;

export const StNavFooter = styled.footer`
  width: 100%;
  height: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 15px;
  & svg {
    width: 30px;
    height: 28px;
    color: gray;
    cursor: pointer;
  }
  & .switch-light-icon {
    color: orange;
  }

  @media ${device.phone} {
    width: auto;
    height: 60px;
    position: relative;
    bottom: 0;
  }
`;
