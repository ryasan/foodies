import gql from 'graphql-tag';

const LIKED_PINS_QUERY = gql`
  query LIKED_PINS_QUERY($limit: Int, $skip: Int) {
    likedPins(limit: $limit, skip: $skip) {
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
