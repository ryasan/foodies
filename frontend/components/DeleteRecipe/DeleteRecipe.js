import PropTypes from 'prop-types'
import Router from 'next/router'
import { Mutation } from 'react-apollo'

import DELETE_PIN_MUTATION from '../../graphql/mutations/deleteRecipe'
import ALL_RECIPES_QUERY from '../../graphql/queries/recipes'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import DeleteRecipe from './DeleteRecipeStyles'

const DeleteRecipeComponent = ({ recipeId }) => {
    const update = (cache, payload) => {
        const data = cache.readQuery({ query: ALL_RECIPES_QUERY })
        data.recipes = data.recipes.filter(
            ({ _id }) => _id !== payload.data.deleteRecipe._id
        )
        cache.writeQuery({ query: ALL_RECIPES_QUERY, data })
    }

    return (
        <Mutation
            mutation={DELETE_PIN_MUTATION}
            variables={{ recipeId }}
            update={update}>
            {(deleteRecipe, { error }) => {
                if (error) return <ErrorMessage error={error} />

                return (
                    <DeleteRecipe
                        onClick={() => {
                            if (confirm('Are you sure you want to delete?')) {
                                deleteRecipe().catch(err => alert(err.message))
                                Router.push('/')
                            }
                        }}>
                        Delete Recipe
                    </DeleteRecipe>
                )
            }}
        </Mutation>
    )
}

DeleteRecipeComponent.propTypes = {
    recipeId: PropTypes.string.isRequired
}

export default DeleteRecipeComponent
