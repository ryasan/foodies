import { Container } from 'next/app';

import Page from './../components/Page';

const MyApp = ({ Component }) => (
  <Container>
    <Page>
      <Component />
    </Page>
  </Container>
);

export default MyApp;
