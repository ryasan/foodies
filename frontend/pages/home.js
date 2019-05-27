import styled from 'styled-components';
import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MasonryHOC from '../components/Masonry/MasonryHOC';
import { limit } from '../constants';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .loader {
    position: absolute;
    bottom: 1rem;
  }
`;

const HomePage = () => {
  return (
    <Query query={ALL_PINS_QUERY} variables={{ skip: 0, limit }}>
      {({ data: { pins }, error, loading, fetchMore }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) {
          return (
            <HomeStyles>
              <Loader className="loader" />
            </HomeStyles>
          );
        }

        return (
          <HomeStyles>
            <MasonryHOC pins={pins} onLoadMore={() => ({})} />
          </HomeStyles>
        );
      }}
    </Query>
  );
};

export default HomePage;
