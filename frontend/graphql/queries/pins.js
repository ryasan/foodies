import gql from 'graphql-tag';

const ALL_PINS_QUERY = gql`
  query {
    pins {
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

export default ALL_PINS_QUERY;
