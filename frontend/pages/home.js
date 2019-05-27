import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MasonryHOC from '../components/Masonry/MasonryHOC';

const HomePage = () => {
  return (
    <Query query={ALL_PINS_QUERY}>
      {({ data: { pins }, error, loading }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) {
          return (
            <div style={{ margin: '5rem' }}>
              <Loader />
            </div>
          );
        }

        return <MasonryHOC pins={pins} onLoadMore={() => ({})} />;
      }}
    </Query>
  );
};

export default HomePage;
