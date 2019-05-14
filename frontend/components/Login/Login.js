import StyledLogin from './LoginStyles';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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
    <div className="content">
      <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
        {toggleLogin => <button onClick={toggleLogin}>close</button>}
      </Mutation>
    </div>
  </StyledLogin>
);

Login.propTypes = {
  loginIsOpen: PropTypes.bool.isRequired,
};

export { LOCAL_STATE_QUERY, TOGGLE_LOGIN_MUTATION };
export default Login;
