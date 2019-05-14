import PropTypes from 'prop-types';
import { FaEnvelope, FaKey } from 'react-icons/fa';

import SigninStyles from './SigninStyles';
import Form from '../shared/Form';

const Signin = ({ setIsSignup }) => (
  <SigninStyles>
    <Form>
      <fieldset>
        <h2>Sign into your account</h2>
        <div className="input-group">
          <div className="input-container">
            <FaEnvelope className="fa" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <FaKey className="fa" />
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
    <p>
      Are you new? <a onClick={() => setIsSignup(true)}>Sign Up</a>
    </p>
  </SigninStyles>
);

Signin.propTypes = {
  setIsSignup: PropTypes.func.isRequired,
};

export default Signin;
