import gql from 'graphql-tag';

const ALL_PINS_QUERY = gql`
  query ALL_PINS_QUERY($limit: Int!, $skip: Int!) {
    pins(limit: $limit, skip: $skip) {
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
