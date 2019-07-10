import PropTypes from 'prop-types';
import Router from 'next/router';

import StyledTile from './TileStyles';
import Likes from '../Likes/Likes';

const Tile = ({ pin: { title, image, likedByIds, creatorUsername, _id } }) => {
  const goToDetails = () => {
    Router.push({ pathname: '/pin-details', query: { id: _id } });
  };

  return (
    <StyledTile>
      <div className="content">
        <img src={image} onClick={goToDetails} alt={title} />
        <div className="card-body">
          {title}
          <div className="end">
            <small>by {creatorUsername}</small>
            <Likes pinId={_id} likedByIds={likedByIds} />
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
