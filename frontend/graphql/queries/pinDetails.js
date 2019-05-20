import gql from 'graphql-tag';

const PIN_DETAILS_QUERY = gql`
  query PIN_DETAILS_QUERY($pinId: ID!) {
    pinDetails(pinId: $pinId) {
      _id
      title
      description
      image
      likedByIds
      largeImage
      creatorUsername
      creatorId
    }
  }
`;

export default PIN_DETAILS_QUERY;
