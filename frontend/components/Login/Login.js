import StyledLogin from './LoginStyles';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { FaTimes } from 'react-icons/fa';

import Signup from '../Signup/Signup';

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

const Login = ({ loginIsOpen }) => (
  <StyledLogin loginIsOpen={loginIsOpen}>
    <Signup />
    <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
      {toggleLogin => (
        <FaTimes onClick={toggleLogin} size="3em" className="close">
          close
        </FaTimes>
      )}
    </Mutation>
  </StyledLogin>
);

Login.propTypes = {
  loginIsOpen: PropTypes.bool.isRequired,
};

export { LOCAL_STATE_QUERY, TOGGLE_LOGIN_MUTATION };
export default Login;
