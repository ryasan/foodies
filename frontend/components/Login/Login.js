import { useState } from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { FaTimes } from 'react-icons/fa'

import Login from './LoginStyles'
import Signup from '../Signup/Signup'
import Signin from '../Signin/Signin'
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'

const LoginComponent = ({ loginIsOpen }) => {
    const [isSignup, setIsSignup] = useState(true)

    return (
        <Login loginIsOpen={loginIsOpen}>
            {isSignup ? (
                <Signup setIsSignup={setIsSignup} />
            ) : (
                <Signin setIsSignup={setIsSignup} />
            )}
            <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
                {toggleLogin => (
                    <Login.Close onClick={toggleLogin} name='close' />
                )}
            </Mutation>
        </Login>
    )
}

LoginComponent.propTypes = {
    loginIsOpen: PropTypes.bool.isRequired
}

export default LoginComponent
