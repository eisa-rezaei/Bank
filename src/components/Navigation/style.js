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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StNavLink = styled.li`
  width: 100%;
  height: auto;
  padding-right: 20px;
  color: ${(props) => (props.path ? `#473252` : `#c1c1c1`)};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
  & svg {
    margin-left: 15px;
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
