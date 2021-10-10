import styled from "styled-components";

export const StAddCartPopUp = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00000060;
  position: absolute;
  top: 0;
  left: 0;
`;
export const StAddCartPopUpContent = styled.ul`
  width: 65%;
  height: 70%;
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 30px;
  position: relative;
  & h1 {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;
export const StAddCartPopUpContentItem = styled.div`
  width: 100%;
  height: 70px;
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  & svg {
    cursor: pointer;
  }
  & :nth-child(${(props) => props.numberBanks}) {
    background-color: greenyellow;
    border-radius: 10px;
  }
`;

export const StAddCartPopUpContentForm = styled.form`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  & p {
    color: red;
    font-weight: bold;
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const StAddCartPopUpContentFormControl = styled.form`
  width: 100%;
  height: auto;
  margin: 20px auto;
  text-align: right;
`;

export const StAddCartFormControlInput = styled.input`
  width: 100%;
  height: 2rem;
  text-align: right;
  margin-top: 10px;
  padding: 0.5rem;
  color: #222;
  border-bottom: 2px solid #e0e0e0;
`;
export const StAddCartPopUpContentFormSubmitContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const StAddCartPopUpContentFormSubmitBtn = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: #fff;
  align-self: flex-start;
  background: #88d453;
  cursor: pointer;
  border-radius: 10px;
`;
export const StAddCartPopUpContentFormEnd = styled.button`
  width: 200px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  color: #fff;
  align-self: flex-end;
  background: #e74c3c;
  cursor: pointer;
  border-radius: 10px;
`;
