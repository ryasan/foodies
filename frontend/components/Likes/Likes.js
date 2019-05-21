import { Mutation, Query } from 'react-apollo';
import { FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

import UPDATE_PIN_LIKES_MUTATION from '../../graphql/mutations/updatePinLikes';
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser';
import ALL_PINS_QUERY from './../../graphql/queries/pins';
import TOGGLE_LOGIN_MUTATION from './../../graphql/mutations/toggleLogin';
import StyledLikes from './LikesStyles';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Likes = ({ pinId, likedByIds, me }) => {
  const liked = me && likedByIds.includes(me._id);
  // manually update the cache on the client so it matches the server
  const update = (cache, payload) => {
    // // 1. read the cache for the pins we want
    // const data = cache.readQuery({ query: ALL_PINS_QUERY });
    // // 2. remove/add userId from likedByIds
    // data.pins = data.pins.map(pin => {
    //   let { likedByIds } = pin;
    //   if (liked) {
    //     likedByIds = likedByIds.filter(id => id !== me._id);
    //   } else {
    //     likedByIds = [...likedByIds, me._id];
    //   }
    //   return { ...pin };
    // });
    // // 3. put the items back
    // cache.writeQuery({ query: ALL_PINS_QUERY, data });
  };

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
            refetchQueries={[{ query: ALL_PINS_QUERY }]}>
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
  WithUser.displayName = 'WithUser';

  return WithUser;
};

Likes.propTypes = {
  me: PropTypes.object,
  pinId: PropTypes.string.isRequired,
  likedByIds: PropTypes.array.isRequired,
};

export default withUser(Likes);
