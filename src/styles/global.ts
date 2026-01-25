import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFFFFF;
    font-size: 14px;
    color: #000000;
    font-family: sans-serif;
  }
`;