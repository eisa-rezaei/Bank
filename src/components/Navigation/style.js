import styled from "styled-components";

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
`;

export const StNavLinksList = styled.ul`
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    font-size: 1.5rem;
    color: gray;
    cursor: pointer;
  }
`;
