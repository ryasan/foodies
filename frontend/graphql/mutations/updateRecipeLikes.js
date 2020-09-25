import gql from 'graphql-tag';

const UPDATE_RECIPE_LIKES_MUTATION = gql`
  mutation UPDATE_RECIPE_LIKES_MUTATION($recipeId: ID!) {
    updateRecipeLikes(recipeId: $recipeId) {
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

export default UPDATE_RECIPE_LIKES_MUTATION;
