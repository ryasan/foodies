import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Query } from 'react-apollo';

import Header from '../Header/Header';
import Login from '../Login/Login';
import Meta from '../Meta/Meta';
import { theme, GlobalStyles, Inner, PageWrap } from './PageStyles';
import LOCAL_STATE_QUERY from '../../graphql/queries/localState';

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Query query={LOCAL_STATE_QUERY}>
      {({ data: { loginIsOpen } }) => (
        <>
          <Meta />
          <GlobalStyles />
          <Login loginIsOpen={loginIsOpen} />
          <PageWrap loginIsOpen={loginIsOpen}>
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
