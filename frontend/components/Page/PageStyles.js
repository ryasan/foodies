import styled, { createGlobalStyle } from 'styled-components';

const theme = {
  primary: '#E60123',
  black: '#333',
  gray: '#8E8E8E',
  bsColor: '#bbb',
};

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 10px;
  }

  /* * {
    outline: 1px solid red;
  } */

  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

const Inner = styled.div`
  padding: 5rem;
  background: #faf6f6;
`;

export { theme, GlobalStyles, Inner };
