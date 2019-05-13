import PropTypes from 'prop-types';
import { Container } from 'next/app';

import Page from './../components/Page/Page';

const MyApp = ({ Component }) => (
  <Container>
    <Page>
      <Component />
    </Page>
  </Container>
);

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default MyApp;
