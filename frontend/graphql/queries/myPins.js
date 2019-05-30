import gql from 'graphql-tag';

const MY_PINS_QUERY = gql`
  query MY_PINS_QUERY($limit: Int, $skip: Int) {
    myPins(limit: $limit, skip: $skip) {
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

export default MY_PINS_QUERY;
