import gql from 'graphql-tag';

const PIN_DETAILS_QUERY = gql`
  query PIN_DETAILS_QUERY($id: ID!) {
    pinDetails(id: $id) {
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

export default PIN_DETAILS_QUERY;
