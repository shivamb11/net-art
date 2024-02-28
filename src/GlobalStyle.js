import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Bitter", serif;
  font-weight: 600;
}

ul {
  padding: 0;
}

strong {
  font-weight: bold;
}

body {
  background: rgb(255, 249, 178);
  background: linear-gradient(
    0deg,
    rgba(255, 249, 178, 0.8) 25%,
    rgba(255, 255, 255, 1) 100%
  );
  min-height: 100dvh;
  overflow-x: hidden
}
`;

export default GlobalStyles;
