import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

import StyledTile from './TileStyles';

const Tile = ({ pin: { image, likes, creatorUsername } }) => (
  <StyledTile>
    <div className="content">
      <img src={image} />
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

Tile.propTypes = {
  pin: PropTypes.object.isRequired,
};

export default Tile;
