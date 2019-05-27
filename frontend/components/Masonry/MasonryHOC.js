import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Masonry from './Masonry';
import Tile from '../Tile/Tile';
import getScrollTop from '../../utils/getScrollTop';
import getDocumentHeight from '../../utils/getDocumentHeight';

const MasonryHOC = ({ collection, onLoadMore }) => {
  const handleSetPage = () => {
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
    onLoadMore();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSetPage);
    return () => window.removeEventListener('scroll', handleSetPage);
  });

  return (
    <Masonry>
      {collection.map(pin => (
        <Tile key={pin._id} pin={pin} />
      ))}
    </Masonry>
  );
};

MasonryHOC.propTypes = {
  collection: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default MasonryHOC;
