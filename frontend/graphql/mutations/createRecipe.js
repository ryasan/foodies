import gql from 'graphql-tag';

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION($createRecipeInput: CreateRecipeInput!) {
    createRecipe(createRecipeInput: $createRecipeInput) {
      _id
      title
      directions
      ingredients
      likedByIds
      image
      largeImage
    }
  }
`;

export default CREATE_RECIPE_MUTATION;
