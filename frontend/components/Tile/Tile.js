import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

import StyledTile from './TileStyles';

const Tile = ({ post: { image, likes, user } }) => (
  <StyledTile>
    <div className="content">
      <img src={image} />
      <div className="card-body">
        {user.username}
        <div className="likes">
          <FaHeart className="icon" />
          {likes}
        </div>
      </div>
    </div>
  </StyledTile>
);

Tile.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Tile;
