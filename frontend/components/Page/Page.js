import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Query } from 'react-apollo';

import Header from '../Header/Header';
import Login, { LOCAL_STATE_QUERY } from './../Login/Login';
import { theme, GlobalStyles, Inner, PageWrap } from './PageStyles';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Query query={LOCAL_STATE_QUERY}>
      {({ data: { loginIsOpen } }) => (
        <>
          <Login loginIsOpen={loginIsOpen} />
          <PageWrap loginIsOpen={loginIsOpen}>
            <GlobalStyles />
            <Header />
            <Inner>{children}</Inner>
          </PageWrap>
        </>
      )}
    </Query>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
