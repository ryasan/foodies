import PropTypes from 'prop-types';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import { FaHeart } from 'react-icons/fa';

import UPDATE_PIN_LIKES_MUTATION from '../../graphql/mutations/updatePinLikes';
import ALL_PINS_QUERY from './../../graphql/queries/pins';
import StyledTile from './TileStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Tile = ({ pin: { image, likes, creatorUsername, _id } }) => {
  const goToDetails = () => {
    Router.push({ pathname: '/pin-details', query: { id: _id } });
  };

  return (
    <Mutation
      mutation={UPDATE_PIN_LIKES_MUTATION}
      variables={{ pinId: _id }}
      refetchQueries={[{ query: ALL_PINS_QUERY }]}>
      {(updatePinLikes, { loading, error }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) return <p>Loading...</p>;

        return (
          <StyledTile>
            <div className="content">
              <img src={image} onClick={goToDetails} />
              <div className="card-body">
                {creatorUsername}
                <div className="likes">
                  <FaHeart className="icon" onClick={updatePinLikes} />
                  {likes}
                </div>
              </div>
            </div>
          </StyledTile>
        );
      }}
    </Mutation>
  );
};

Tile.propTypes = {
  pin: PropTypes.object.isRequired,
};

export default Tile;
