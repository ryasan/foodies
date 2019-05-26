import { useEffect } from 'react';
import { Query } from 'react-apollo';

import ALL_PINS_QUERY from '../graphql/queries/pins';
import Masonry from '../components/Masonry/Masonry';
import Tile from '../components/Tile/Tile';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';

const HomePage = () => {
  const getScrollTop = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  const getDocumentHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
      console.log('bottom reached');
    });
  });

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

        return (
          <Masonry>
            {pins.map(pin => (
              <Tile key={pin._id} pin={pin} />
            ))}
          </Masonry>
        );
      }}
    </Query>
  );
};

export default HomePage;
