import gql from 'graphql-tag';

const MY_PINS_QUERY = gql`
  query {
    myPins {
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
