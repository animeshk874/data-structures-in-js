import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    background: ${({ theme }: any) => theme.colors.body};
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  * {
    transition: outline-color 0s;
  }

  *:focus {
    outline-color: #689fd2;
  }

  .Toastify__toast {
    padding: 6px 18px !important;
    border-radius: 5px !important;
    opacity: 0.9 !important;
  }
`;
