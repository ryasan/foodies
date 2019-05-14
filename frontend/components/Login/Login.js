import StyledLogin from './LoginStyles';
import gql from 'graphql-tag';

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

const Login = () => (
  <StyledLogin>
    <div className="content-wrap">
      <button>close</button>
    </div>
  </StyledLogin>
);

export { LOCAL_STATE_QUERY, TOGGLE_LOGIN_MUTATION };
export default Login;
