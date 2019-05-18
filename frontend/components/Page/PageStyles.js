import styled, { createGlobalStyle, css } from 'styled-components';
import device from '../../utils/device';

const theme = {
  primary: '#E60123',
  white: '#fff',
  offWhite: '#faf6f6',
  black: '#333',
  gray: '#8E8E8E',
  lightGray: '#f2f2f2',
  bsColor: '#bbb',
  br: '0.5rem',
  maxWidth: '1200px',
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 10px;
    @media ${device.mobileL} {
      font-size: 8px;
    }
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
    background: ${theme.gray};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  fieldset {
    &[disabled] {
      opacity: 0.5;
    }
  }
`;

const loginOpenCSS = css`
  filter: blur(3px) grayscale(0.5);
  transform: scale(0.95);
  pointer-events: none;
`;

const PageWrap = styled.div`
  transition: all 0.5s ease;
  background: ${theme.offWhite};
  ${props => (props.loginIsOpen ? loginOpenCSS : '')};
`;

const PageInner = styled.div`
  padding: 5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export { theme, GlobalStyles, PageInner, PageWrap };
