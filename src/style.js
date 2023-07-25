import { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    transition: all 100ms ease-out;
  }

  html {
    font-family: 'Signika', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 400;
    color: ${ ({ theme }) => theme.primary };
    background-color: ${ ({ theme }) => theme.background };
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background-color: transparent;
    padding: 0;
    border: 0;
    cursor: pointer;
  }
`;