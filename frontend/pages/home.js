import { useState } from 'react';
import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import MasonryHOC from '../components/Masonry/MasonryHOC';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';

const HomePage = () => {
  const [page, setPage] = useState(0);

  return (
    <Query
      query={ALL_PINS_QUERY}
      variables={{ page, limit: 10 }}
      fetchPolicy="cache-and-network">
      {({ data: { pins }, error, loading, fetchMore }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) {
          return (
            <div style={{ margin: '5rem' }}>
              <Loader />
            </div>
          );
        }

        return (
          <MasonryHOC collection={pins} onLoadMore={() => console.log(page)} />
        );
      }}
    </Query>
  );
};

export default HomePage;
