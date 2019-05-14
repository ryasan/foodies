import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Header from '../Header/Header';
import Login from './../Login/Login';
import { theme, GlobalStyles, Inner, PageWrap } from './PageStyles';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Login />
      <PageWrap>
        <GlobalStyles />
        <Header />
        <Inner>{children}</Inner>
      </PageWrap>
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
