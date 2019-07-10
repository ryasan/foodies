import { Mutation, Query } from 'react-apollo';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

import UPDATE_PIN_LIKES_MUTATION from '../../graphql/mutations/updatePinLikes';
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser';
import ALL_PINS_QUERY from '../../graphql/queries/pins';
import LIKED_PINS_QUERY from '../../graphql/queries/likedPins';
import MY_PINS_QUERY from '../../graphql/queries/myPins';
import TOGGLE_LOGIN_MUTATION from './../../graphql/mutations/toggleLogin';
import StyledLikes from './LikesStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// TODO: manually update the cache on the client so it matches the server
const Likes = ({ pinId, likedByIds, me }) => {
  const liked = me && likedByIds.includes(me._id);

  const handleLikeClick = (updatePinLikes, toggleLogin) => {
    me ? updatePinLikes() : toggleLogin();
  };

  return (
    <StyledLikes liked={liked}>
      <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
        {toggleLogin => (
          <Mutation
            mutation={UPDATE_PIN_LIKES_MUTATION}
            variables={{ pinId }}
            refetchQueries={[
              { query: ALL_PINS_QUERY },
              { query: LIKED_PINS_QUERY },
              { query: MY_PINS_QUERY },
            ]}>
            {(updatePinLikes, { loading, error }) => {
              if (error) return <ErrorMessage error={error} />;
              return (
                <div
                  onClick={() => handleLikeClick(updatePinLikes, toggleLogin)}>
                  <FaHeart className="icon" />
                  {likedByIds.length}
                </div>
              );
            }}
          </Mutation>
        )}
      </Mutation>
    </StyledLikes>
  );
};

const withUser = Component => {
  const WithUser = props => {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {payload => <Component {...props} me={payload.data.me} />}
      </Query>
    );
  };
  WithUser.displayName = 'Likes';

  return WithUser;
};

Likes.propTypes = {
  me: PropTypes.object,
  pinId: PropTypes.string.isRequired,
  likedByIds: PropTypes.array.isRequired,
};

export default withUser(Likes);
