import gql from 'graphql-tag';

const UPDATE_PIN_LIKES_MUTATION = gql`
  mutation UPDATE_PIN_LIKES_MUTATION($pinId: ID!) {
    updatePinLikes(pinId: $pinId) {
      _id
      title
      description
      likedByIds
      image
      largeImage
      creatorUsername
      creatorId
    }
  }
`;

export default UPDATE_PIN_LIKES_MUTATION;
