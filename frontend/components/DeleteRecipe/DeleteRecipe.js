import PropTypes from 'prop-types';
import Router from 'next/router';
import { Mutation } from 'react-apollo';

import DELETE_PIN_MUTATION from '../../graphql/mutations/deleteRecipe';
import ALL_RECIPES_QUERY from '../../graphql/queries/recipes';
import button from '../shared/button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const DeleteRecipe = ({ recipeId }) => {
  // manually update the cache on the client so it matches the server
  const update = (cache, payload) => {
    // 1. read the cache for the recipes we want
    const data = cache.readQuery({ query: ALL_RECIPES_QUERY });
    // 2. filter the deleted item out of the page
    data.recipes = data.recipes.filter(
      ({ _id }) => _id !== payload.data.deleteRecipe._id,
    );
    // 3. put the items back
    cache.writeQuery({ query: ALL_RECIPES_QUERY, data });
  };

  return (
    <Mutation
      mutation={DELETE_PIN_MUTATION}
      variables={{ recipeId }}
      update={update}>
      {(deleteRecipe, { error }) => {
        if (error) return <ErrorMessage error={error} />;

        return (
          <button
            color="clear"
            onClick={() => {
              if (confirm('Are you sure you want to delete?')) {
                deleteRecipe().catch(err => alert(err.message));
                Router.push('/');
              }
            }}>
            Delete Recipe
          </button>
        );
      }}
    </Mutation>
  );
};

DeleteRecipe.propTypes = {
  recipeId: PropTypes.string.isRequired,
};

export default DeleteRecipe;
