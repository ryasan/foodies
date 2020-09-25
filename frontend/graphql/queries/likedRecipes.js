import gql from 'graphql-tag';

const LIKED_RECIPES_QUERY = gql`
  query LIKED_RECIPES_QUERY($limit: Int, $skip: Int) {
    likedRecipes(limit: $limit, skip: $skip) {
      _id
      title
      directions
      ingredients
      likedByIds
      image
      largeImage
      creatorUsername
      creatorId
    }
  }
`;

export default LIKED_RECIPES_QUERY;
