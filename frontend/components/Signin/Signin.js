import { FaEnvelope, FaUser, FaKey } from 'react-icons/fa';

import SigninStyles from './SigninStyles';
import Form from '../shared/Form';

const Signin = () => (
  <SigninStyles>
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
        </div>
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
    <small>
      Are you new? <a>Sign Up</a>
    </small>
  </SigninStyles>
);

export default Signin;
