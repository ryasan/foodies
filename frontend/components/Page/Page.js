import PropTypes from 'prop-types';

import Header from '../Header/Header';
import { GlobalStyles } from './PageStyles';

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
