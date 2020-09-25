import { Mutation, Query } from 'react-apollo'
import { FaHeart } from 'react-icons/fa'
import PropTypes from 'prop-types'

import UPDATE_PIN_LIKES_MUTATION from '../../graphql/mutations/updateRecipeLikes'
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import ALL_RECIPES_QUERY from '../../graphql/queries/recipes'
import LIKED_RECIPES_QUERY from '../../graphql/queries/likedRecipes'
import MY_RECIPES_QUERY from '../../graphql/queries/myRecipes'
import TOGGLE_LOGIN_MUTATION from './../../graphql/mutations/toggleLogin'
import Likes from './LikesStyles'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Icon from '../icons'

const LikesComponent = ({ recipeId, likedByIds, me }) => {
    const liked = me && likedByIds.includes(me._id)

    const handleLikeClick = (updateRecipeLikes, toggleLogin) => {
        me ? updateRecipeLikes() : toggleLogin()
    }

    return (
        <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
            {toggleLogin => (
                <Mutation
                    mutation={UPDATE_PIN_LIKES_MUTATION}
                    variables={{ recipeId }}
                    refetchQueries={[
                        { query: ALL_RECIPES_QUERY },
                        { query: LIKED_RECIPES_QUERY },
                        { query: MY_RECIPES_QUERY }
                    ]}>
                    {(updateRecipeLikes, { loading, error }) => {
                        if (error) return <ErrorMessage error={error} />
                        return (
                            <Likes
                                liked={liked}
                                onClick={() =>
                                    handleLikeClick(
                                        updateRecipeLikes,
                                        toggleLogin
                                    )
                                }>
                                <Icon name='heart' />
                                {likedByIds.length}
                            </Likes>
                        )
                    }}
                </Mutation>
            )}
        </Mutation>
    )
}

const withUser = Component => {
    const WithUser = props => {
        return (
            <Query query={CURRENT_USER_QUERY}>
                {payload => <Component {...props} me={payload.data.me} />}
            </Query>
        )
    }
    WithUser.displayName = 'Likes'

    return WithUser
}

LikesComponent.propTypes = {
    me: PropTypes.object,
    recipeId: PropTypes.string.isRequired,
    likedByIds: PropTypes.array.isRequired
}

export default withUser(LikesComponent)
