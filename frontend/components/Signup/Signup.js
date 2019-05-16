import { useState } from 'react';
import { Mutation } from 'react-apollo';
import { FaEnvelope, FaUser, FaKey } from 'react-icons/fa';
import PropTypes from 'prop-types';

import SIGNUP_MUTATION from '../../graphql/mutations/signupMutation';
import CURRENT_USER_QUERY from '../../graphql/queries/currentUserQuery';
import SignupStyles from './SignupStyles';
import Form from '../shared/Form';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';

const Signup = ({ setIsSignup }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    username: '',
  });

  const saveFields = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, signup) => {
    e.preventDefault();
    await signup();
    setFields({ email: '', password: '', username: '' });
  };

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={{ signupInput: fields }}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {(signup, { loading, error }) => (
        <SignupStyles>
          <Form onSubmit={e => handleSubmit(e, signup)}>
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign up for an account</h2>
              <ErrorMessage error={error} />
              <div>
                <div className="input-container">
                  <FaEnvelope className="fa" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={fields.email}
                    onChange={saveFields}
                  />
                </div>
                <div className="input-container">
                  <FaKey className="fa" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={fields.password}
                    onChange={saveFields}
                    autoComplete="true"
                  />
                </div>
                <div className="input-container">
                  <FaUser className="fa" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={fields.username}
                    onChange={saveFields}
                  />
                </div>
              </div>
              <button type="submit">Sign Up</button>
            </fieldset>
          </Form>
          <p>
            Already have an account?{' '}
            <a onClick={() => setIsSignup(false)}>Sign In</a>
          </p>
        </SignupStyles>
      )}
    </Mutation>
  );
};

Signup.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};

export default Signup;
