import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;