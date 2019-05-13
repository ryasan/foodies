import PropTypes from 'prop-types';

import Header from '../Header/Header';
import { GlobalStyles, Inner } from './PageStyles';

const Page = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <Inner>{children}</Inner>
  </>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
