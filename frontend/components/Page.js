import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';

const Page = ({ children }) => (
  <StyledPage>
    <GlobalStyles />
    <Header />
    {children}
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

const theme = {
  primary: '#E60123',
  black: '#393939',
};

const StyledPage = styled.div``;

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 10px;
  }

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

export default Page;
