import gql from 'graphql-tag';

const MY_RECIPES_QUERY = gql`
  query MY_RECIPES_QUERY($limit: Int, $skip: Int) {
    myRecipes(limit: $limit, skip: $skip) {
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

export default MY_RECIPES_QUERY;
