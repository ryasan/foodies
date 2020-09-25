import gql from 'graphql-tag';

const DELETE_RECIPE_MUTATION = gql`
  mutation DELETE_RECIPE_MUTATION($recipeId: ID!) {
    deleteRecipe(recipeId: $recipeId) {
      _id
    }
  }
`;

export default DELETE_RECIPE_MUTATION;
