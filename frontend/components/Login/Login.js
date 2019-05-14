import { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { FaTimes } from 'react-icons/fa';

import StyledLogin from './LoginStyles';
import Signup from '../Signup/Signup';
import Signin from './../Signin/Signin';

const LOCAL_STATE_QUERY = gql`
  query {
    loginIsOpen @client
  }
`;

const TOGGLE_LOGIN_MUTATION = gql`
  mutation {
    toggleLogin @client
  }
`;

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

export { LOCAL_STATE_QUERY, TOGGLE_LOGIN_MUTATION };
export default Login;
