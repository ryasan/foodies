import { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { FaTimes } from 'react-icons/fa';

import StyledLogin from './LoginStyles';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin';

const Login = ({ loginIsOpen }) => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <StyledLogin loginIsOpen={loginIsOpen}>
      {isSignup ? (
        <Signup setIsSignup={setIsSignup} />
      ) : (
        <Signin setIsSignup={setIsSignup} />
      )}
      <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
        {toggleLogin => (
          <FaTimes onClick={toggleLogin} size="3em" className="close">
            close
          </FaTimes>
        )}
      </Mutation>
    </StyledLogin>
  );
};

Login.propTypes = {
  loginIsOpen: PropTypes.bool.isRequired,
};

export default Login;
