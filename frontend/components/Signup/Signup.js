import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaUser, FaKey } from 'react-icons/fa';

import SignupStyles from './SignupStyles';
import Form from './../shared/Form';

const Signup = ({ setIsSignup }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
    username: '',
  });

  const saveFields = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <SignupStyles>
      <Form>
        <fieldset>
          <h2>Sign up for an account</h2>
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
  );
};

Signup.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};

export default Signup;
