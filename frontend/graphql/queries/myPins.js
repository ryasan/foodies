import gql from 'graphql-tag';

const MY_PINS_QUERY = gql`
  query MY_PINS_QUERY($userId: ID!) {
    myPins(userId: $userId) {
      _id
      title
      description
      likes
      image
      largeImage
      creatorUsername
      creatorId
    }
  }
`;

export default MY_PINS_QUERY;
