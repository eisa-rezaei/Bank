import styled from "styled-components";
import {device} from "../screenSize";
export const StProfileContainer = styled.main`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vh 0;
  & p {
    font-size: 3rem;
    text-align: right;
  }
  @media ${device.phone} {
    padding: 0;
    & p {
      font-size: 1.5rem;
    }
  }
`;
