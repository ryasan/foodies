import PropTypes from 'prop-types'
import Head from 'next/head'
import { Query } from 'react-apollo'

import RecipeDetailsStyles from './RecipeDetailsStyles'
import RECIPE_DETAILS_QUERY from '../../graphql/queries/recipeDetails'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe'

const RecipeDetails = ({ recipeId, currentUserId }) => {
    return (
        <Query query={RECIPE_DETAILS_QUERY} variables={{ recipeId }}>
            {({ error, loading, data: { recipeDetails } }) => {
                if (error) return <ErrorMessage error={error} />
                if (loading) return <p>Loading...</p>
                if (!recipeDetails) return <p>No recipe found for {recipeId}</p>
                const ownsRecipe = currentUserId === recipeDetails.creatorId

                return (
                    <>
                        <Head>
                            <title>NP | {recipeDetails.title}</title>
                        </Head>
                        <RecipeDetailsStyles>
                            <div className='column img-container'>
                                <img
                                    src={recipeDetails.largeImage}
                                    alt={recipeDetails.title}
                                />
                            </div>
                            <div className='column details-container'>
                                <div className='body'>
                                    <h1>{recipeDetails.title}</h1>
                                    <ul>
                                        {recipeDetails.ingredients.map(
                                            (ingredient, i) => (
                                                <li key={i}>{ingredient}</li>
                                            )
                                        )}
                                    </ul>
                                    <ul>
                                        {recipeDetails.directions.map(
                                            (direction, i) => (
                                                <li key={i}>{direction}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className='footer'>
                                    <p>
                                        Post by: {recipeDetails.creatorUsername}
                                    </p>
                                    {ownsRecipe && (
                                        <DeleteRecipe recipeId={recipeId} />
                                    )}
                                </div>
                            </div>
                        </RecipeDetailsStyles>
                    </>
                )
            }}
        </Query>
    )
}

RecipeDetails.propTypes = {
    recipeId: PropTypes.string.isRequired,
    currentUserId: PropTypes.string
}

export default RecipeDetails
