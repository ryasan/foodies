import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Header from '../Header/Header';
import { theme, GlobalStyles, Inner } from './PageStyles';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Header />
      <Inner>{children}</Inner>
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
