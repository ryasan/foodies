import { useEffect } from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';

// import Masonry from './Masonry';

import Tile from '../Tile/Tile';

const masonryOptions = {
  transitionDuration: 500,
  isFitWidth: true,
};

const style = {
  listStyleType: 'none',
  padding: 0,
  margin: '0 auto',
};

const MasonryHOC = ({ pins, fetchMore }) => {
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

  const getScrollTop = () => {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  const handleScroll = () => {
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;

    fetchMore({
      variables: {
        skip: pins.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          pins: [...prev.pins, ...fetchMoreResult.pins],
        });
      },
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Masonry style={style} elementType="ul" options={masonryOptions}>
      {pins.map(pin => (
        <Tile key={pin._id} pin={pin} />
      ))}
    </Masonry>
  );
};

MasonryHOC.propTypes = {
  pins: PropTypes.array.isRequired,
  fetchMore: PropTypes.func.isRequired,
};

export default MasonryHOC;
