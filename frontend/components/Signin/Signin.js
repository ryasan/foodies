import { useState } from 'react'
import { Mutation } from 'react-apollo'
import { FaEnvelope, FaKey } from 'react-icons/fa'
import PropTypes from 'prop-types'

import SIGNIN_MUTATION from '../../graphql/mutations/signin'
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Icon from '../icons'
import Login from '../Login/LoginStyles'

const Signin = ({ setIsSignup }) => {
    const [fields, setFields] = useState({
        email: '',
        password: ''
    })

    const saveFields = e => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e, signin, toggleLogin) => {
        e.preventDefault()
        await signin()
        toggleLogin()
        setTimeout(() => setIsSignup(true), 500)
        setFields({ email: '', password: '' })
    }

    return (
        <Mutation
            mutation={SIGNIN_MUTATION}
            variables={fields}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
            {(signin, { loading, error }) => (
                <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
                    {toggleLogin => (
                        <Login.FormOuter>
                            <Login.Form
                                onSubmit={e =>
                                    handleSubmit(e, signin, toggleLogin)
                                }>
                                <Login.Fieldset
                                    disabled={loading}
                                    aria-busy={loading}>
                                    <Login.Title>
                                        Sign into your account
                                    </Login.Title>
                                    <ErrorMessage error={error} />
                                    <div>
                                        <Login.InputContainer>
                                            <Icon name='envelope' />
                                            <input
                                                required
                                                type='email'
                                                name='email'
                                                placeholder='Email'
                                                value={fields.email}
                                                onChange={saveFields}
                                            />
                                        </Login.InputContainer>
                                        <Login.InputContainer>
                                            <Icon name='key-outlined' />
                                            <input
                                                required
                                                type='password'
                                                name='password'
                                                placeholder='Password'
                                                value={fields.password}
                                                onChange={saveFields}
                                                autoComplete='true'
                                            />
                                        </Login.InputContainer>
                                    </div>
                                    <Login.SubmitBtn type='submit'>
                                        Sign In
                                    </Login.SubmitBtn>
                                </Login.Fieldset>
                            </Login.Form>
                            <Login.Text>
                                Are you new?{' '}
                                <a onClick={() => setIsSignup(true)}>Sign Up</a>
                            </Login.Text>
                        </Login.FormOuter>
                    )}
                </Mutation>
            )}
        </Mutation>
    )
}

Signin.propTypes = {
    setIsSignup: PropTypes.func.isRequired
}

export default Signin
