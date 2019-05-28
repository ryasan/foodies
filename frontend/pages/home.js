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
  min-height: 20rem;
  padding-bottom: 5vh;
  .loader {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;

const HomePage = () => {
  return (
    <Query
      query={ALL_PINS_QUERY}
      variables={{ skip: 0, limit }}
      fetchPolicy="cache-and-network">
      {({ data, error, loading, fetchMore }) => {
        if (error) return <ErrorMessage error={error} />;

        if (loading) {
          return (
            <HomeStyles>
              <MasonryHOC pins={data.pins || []} fetchMore={fetchMore} />
              <Loader className="loader" />
            </HomeStyles>
          );
        }

        return (
          <HomeStyles>
            <MasonryHOC pins={data.pins || []} fetchMore={fetchMore} />
          </HomeStyles>
        );
      }}
    </Query>
  );
};

export default HomePage;
