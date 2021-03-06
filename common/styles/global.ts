import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    font-size: 1.4rem;
  }

  h1 {
    font-size: 2.4rem;
    font-size: 2.4rem;
  }

  ul,
  li {
    list-style: none;
  }
  input {
    font-family: inherit;
  }
  textarea {
    resize: none;
  }

  a {
    color: inherit;
  }

  #EZDrawer__overlay {
    background: #70707033 0% 0% no-repeat padding-box !important;
    opacity: 1 !important;
    backdrop-filter: blur(0.2rem) !important;
    -webkit-backdrop-filter: blur(0.2rem) !important;
  }

  .ReactModal__Content .ReactModal__Content--after-open {
    border-radius: 2rem !important;
  }
`;
