import styled from 'styled-components';
import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MasonryHOC from '../components/Masonry/MasonryHOC';
import { limit } from '../constants';

// const HomeStyles = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   .top-loader {
//     position: absolute;
//     top: 5rem;
//   }
//   .bottom-loader {
//     position: absolute;
//     bottom: 1rem;
//   }
// `;

const HomePage = () => {
  return (
    <Query
      query={ALL_PINS_QUERY}
      variables={{ skip: 0, limit }}
      fetchPolicy="cache-and-network">
      {({ data, error, loading, fetchMore }) => {
        if (error) return <ErrorMessage error={error} />;

        return (
          data && (
            <MasonryHOC
              pins={data.pins || []}
              onLoadMore={() => {
                fetchMore({
                  variables: {
                    skip: data.pins.length,
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, {
                      pins: [...prev.pins, ...fetchMoreResult.pins],
                    });
                  },
                });
              }}
            />
          )
        );
      }}
    </Query>
  );
};

export default HomePage;
