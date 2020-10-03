import { useState } from 'react'
import { Mutation } from 'react-apollo'
import { FaEnvelope, FaUser, FaKey } from 'react-icons/fa'
import PropTypes from 'prop-types'

import SIGNUP_MUTATION from '../../graphql/mutations/signup'
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin'
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import button from '../shared/Button'
import Icon from '../icons'
import Login from '../Login/LoginStyles'

const Signup = ({ setIsSignup }) => {
    const [fields, setFields] = useState({
        email: '',
        password: '',
        username: ''
    })

    const saveFields = e => {
        setFields({ ...fields, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e, signup, toggleLogin) => {
        e.preventDefault()
        await signup()
        toggleLogin()
        setFields({ email: '', password: '', username: '' })
    }

    return (
        <Mutation
            mutation={SIGNUP_MUTATION}
            variables={{ signupInput: fields }}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
            {(signup, { loading, error }) => (
                <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
                    {toggleLogin => (
                        <Login.FormOuter>
                            <Login.Form
                                onSubmit={e =>
                                    handleSubmit(e, signup, toggleLogin)
                                }>
                                <Login.Fieldset
                                    disabled={loading}
                                    aria-busy={loading}>
                                    <Login.Title>Sign up for an account</Login.Title>
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
                                        <Login.InputContainer>
                                            <Icon name='person' />
                                            <input
                                                required
                                                type='text'
                                                name='username'
                                                placeholder='Username'
                                                value={fields.username}
                                                onChange={saveFields}
                                            />
                                        </Login.InputContainer>
                                    </div>
                                    <Login.SubmitBtn type='submit'>
                                        Sign Up
                                    </Login.SubmitBtn>
                                </Login.Fieldset>
                            </Login.Form>
                            <Login.Text>
                                Already have an account?{' '}
                                <a onClick={() => setIsSignup(false)}>
                                    Sign In
                                </a>
                            </Login.Text>
                        </Login.FormOuter>
                    )}
                </Mutation>
            )}
        </Mutation>
    )
}

Signup.propTypes = {
    setIsSignup: PropTypes.func.isRequired
}

export default Signup
