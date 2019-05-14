import PropTypes from 'prop-types';
import { FaEnvelope, FaUser, FaKey } from 'react-icons/fa';

import SignupStyles from './SignupStyles';
import Form from './../shared/Form';

const Signup = ({ setIsSignup }) => (
  <SignupStyles>
    <Form>
      <fieldset>
        <h2>Sign up for an account</h2>
        <div className="input-group">
          <div className="input-container">
            <FaEnvelope className="fa" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <FaKey className="fa" />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="input-container">
            <FaUser className="fa" />
            <input type="text" name="username" placeholder="Username" />
          </div>
        </div>
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
    <p>
      Already have an account? <a onClick={() => setIsSignup(false)}>Sign In</a>
    </p>
  </SignupStyles>
);

Signup.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};

export default Signup;
