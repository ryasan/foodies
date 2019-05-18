import gql from 'graphql-tag';

const ALL_PINS_QUERY = gql`
  query {
    pins {
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

export default ALL_PINS_QUERY;
