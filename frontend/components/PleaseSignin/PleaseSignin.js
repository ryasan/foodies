import { Query } from 'react-apollo'
import { Mutation } from 'react-apollo'
import PropTypes from 'prop-types'

import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'
import PleaseSignin from './PleaseSigninStyles'
import button from '../shared/Button'

const PleaseSigninComponent = ({ children }) => (
    <PleaseSignin>
        <Query query={CURRENT_USER_QUERY}>
            {({ data, loading }) => {
                if (loading) return <p>Loading...</p>
                if (!data.me) {
                    return (
                        <PleaseSignin.Inner>
                            <h2>Please sign in before continuing</h2>
                            <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
                                {toggleLogin => (
                                    <PleaseSignin.Btn onClick={toggleLogin}>
                                        Signin
                                    </PleaseSignin.Btn>
                                )}
                            </Mutation>
                        </PleaseSignin.Inner>
                    )
                }
                return children
            }}
        </Query>
    </PleaseSignin>
)

PleaseSigninComponent.propTypes = {
    children: PropTypes.object.isRequired
}

export default PleaseSigninComponent
