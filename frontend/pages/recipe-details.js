import PropTypes from 'prop-types'

import RecipeDetails from '../components/RecipeDetails/RecipeDetails'
import User from '../components/User/User'

const RecipeDetailsPage = ({ query }) => (
    <User>
        {({ data: { me } }) => {
            return (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <RecipeDetails
                        pinId={query.id}
                        currentUserId={me && me._id}
                    />
                </div>
            )
        }}
    </User>
)

RecipeDetailsPage.propTypes = {
    query: PropTypes.object
}

export default RecipeDetailsPage
