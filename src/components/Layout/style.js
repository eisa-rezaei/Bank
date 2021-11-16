import styled from "styled-components";
import {device} from "../screenSize";

export const LayoutContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;
  @media ${device.phone} {
    position: relative;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;
export const StInfoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media ${device.phone} {
    padding: 10px 10px 50px 10px;
    overflow-y: auto;
  }
`;
