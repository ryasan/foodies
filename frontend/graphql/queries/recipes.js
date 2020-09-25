import gql from 'graphql-tag';

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY($limit: Int, $skip: Int) {
    recipes(limit: $limit, skip: $skip) {
      _id
      title
      directions
      ingredients
      image
      likedByIds
      largeImage
      creatorUsername
      creatorId
    }
  }
`;

export default ALL_RECIPES_QUERY;
