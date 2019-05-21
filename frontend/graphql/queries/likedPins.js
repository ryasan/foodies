import gql from 'graphql-tag';

const LIKED_PINS_QUERY = gql`
  query {
    likedPins {
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

export default LIKED_PINS_QUERY;
