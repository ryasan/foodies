import PropTypes from 'prop-types';
import Router from 'next/router';
import { FaHeart } from 'react-icons/fa';

import StyledTile from './TileStyles';

const Tile = ({ pin: { image, likes, creatorUsername, _id } }) => {
  const goToDetails = () => {
    Router.push({ pathname: '/pin-details', query: { id: _id } });
  };

  return (
    <StyledTile>
      <div className="content">
        <img src={image} onClick={goToDetails} />
        <div className="card-body">
          {creatorUsername}
          <div className="likes">
            <FaHeart className="icon" />
            {likes}
          </div>
        </div>
      </div>
    </StyledTile>
  );
};

Tile.propTypes = {
  pin: PropTypes.object.isRequired,
};

export default Tile;
