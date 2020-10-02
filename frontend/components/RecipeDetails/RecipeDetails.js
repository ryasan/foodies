import PropTypes from 'prop-types'
import Head from 'next/head'
import { Query } from 'react-apollo'

import RecipeDetails from './RecipeDetailsStyles'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import DeleteRecipe from '../DeleteRecipe/DeleteRecipe'
import Navbar from '../Navbar/Navbar'
import RECIPE_DETAILS_QUERY from '../../graphql/queries/recipeDetails'

const RecipeDetailsComponent = ({ recipeId, currentUserId }) => {
    return (
        <Query query={RECIPE_DETAILS_QUERY} variables={{ recipeId }}>
            {({ error, loading, data: { recipeDetails } }) => {
                if (error) return <ErrorMessage error={error} />
                if (loading) return <p>Loading...</p>
                if (!recipeDetails) return <p>No recipe found for {recipeId}</p>

                console.log(recipeDetails.ingredients)

                return (
                    <>
                        <Head>
                            <title>FD | {recipeDetails.title}</title>
                        </Head>
                        <Navbar>
                            <RecipeDetails.HugeText>
                                {recipeDetails.title}
                            </RecipeDetails.HugeText>
                            <RecipeDetails>
                                <RecipeDetails.GridLeft>
                                    <RecipeDetails.Img
                                        src={recipeDetails.largeImage}
                                        alt={recipeDetails.title}
                                    />
                                </RecipeDetails.GridLeft>
                                <RecipeDetails.GridRight>
                                    <RecipeDetails.TextBody>
                                        <RecipeDetails.Title>
                                            {recipeDetails.title}
                                        </RecipeDetails.Title>
                                        <RecipeDetails.Creator>
                                            By:{' '}
                                            <span>
                                                {recipeDetails.creatorUsername}
                                            </span>
                                        </RecipeDetails.Creator>

                                        <RecipeDetails.Directions>
                                            {recipeDetails.directions.map(
                                                (direction, i) => (
                                                    <RecipeDetails.DirectionItem
                                                        key={i}>
                                                        <span>{direction}</span>
                                                    </RecipeDetails.DirectionItem>
                                                )
                                            )}

                                            {recipeDetails.directions.map(
                                                (direction, i) => (
                                                    <RecipeDetails.DirectionItem
                                                        key={i}>
                                                        <span>{direction}</span>
                                                    </RecipeDetails.DirectionItem>
                                                )
                                            )}
                                        </RecipeDetails.Directions>
                                    </RecipeDetails.TextBody>
                                </RecipeDetails.GridRight>
                                <RecipeDetails.GridBottom>
                                    <RecipeDetails.Ingredients>
                                        {recipeDetails.ingredients.map(
                                            (ingredient, i) => (
                                                <RecipeDetails.IngredientItem
                                                    title={ingredient.trim()}
                                                    key={i}>
                                                    {ingredient}
                                                </RecipeDetails.IngredientItem>
                                            )
                                        )}
                                    </RecipeDetails.Ingredients>
                                    <RecipeDetails.DeleteRecipeContainer>
                                        {currentUserId ===
                                            recipeDetails.creatorId && (
                                            <DeleteRecipe recipeId={recipeId} />
                                        )}
                                    </RecipeDetails.DeleteRecipeContainer>
                                </RecipeDetails.GridBottom>
                            </RecipeDetails>
                        </Navbar>
                    </>
                )
            }}
        </Query>
    )
}

RecipeDetailsComponent.propTypes = {
    recipeId: PropTypes.string.isRequired,
    currentUserId: PropTypes.string
}

export default RecipeDetailsComponent
