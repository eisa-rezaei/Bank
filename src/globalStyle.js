import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*:before{
    margin: 0;
	padding: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
}
body {
	line-height: 1;
}
section {
    display: block;
}
input{
    border: none;
    outline: none;
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
}
a {
    text-decoration: none;
    color: inherit;
}
button{
    border: none;
}
`;
