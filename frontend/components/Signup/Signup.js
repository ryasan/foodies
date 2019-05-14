import { FaEnvelope, FaUser, FaKey } from 'react-icons/fa';

import SignupStyles from './SignupStyles';
import Form from './../shared/Form';

const Signup = () => (
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
    <div className="footer">
      <small>
        Already have an account? <a>Sign In</a>
      </small>
    </div>
  </SignupStyles>
);

export default Signup;
