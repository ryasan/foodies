import gql from 'graphql-tag';

const RECIPE_DETAILS_QUERY = gql`
  query RECIPE_DETAILS_QUERY($recipeId: ID!) {
    recipeDetails(recipeId: $recipeId) {
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

export default RECIPE_DETAILS_QUERY;
