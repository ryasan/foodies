import { useState } from 'react';
import { Mutation } from 'react-apollo';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import PropTypes from 'prop-types';

import SIGNIN_MUTATION from '../../graphql/mutations/signin';
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin';
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser';
import SigninStyles from './SigninStyles';
import Form from '../shared/Form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Signin = ({ setIsSignup }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const saveFields = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, signin, toggleLogin) => {
    e.preventDefault();
    await signin();
    toggleLogin();
    setTimeout(() => setIsSignup(true), 500);
    setFields({ email: '', password: '' });
  };

  return (
    <Mutation
      mutation={SIGNIN_MUTATION}
      variables={fields}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {(signin, { loading, error }) => (
        <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
          {toggleLogin => (
            <SigninStyles>
              <Form onSubmit={e => handleSubmit(e, signin, toggleLogin)}>
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Sign into your account</h2>
                  <ErrorMessage error={error} />
                  <div className="input-group">
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
                  </div>
                  <button type="submit">Sign In</button>
                </fieldset>
              </Form>
              <p>
                Are you new? <a onClick={() => setIsSignup(true)}>Sign Up</a>
              </p>
            </SigninStyles>
          )}
        </Mutation>
      )}
    </Mutation>
  );
};

Signin.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};

export default Signin;
