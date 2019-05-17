import Link from 'next/link';
import { Mutation } from 'react-apollo';

import User from '../User/User';
import StyledHeader, { Logo } from './HeaderStyles';
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin';
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser';
import SIGN_OUT_MUTATION from '../../graphql/mutations/signout';

const AuthView = me => {
  return (
    <div className="auth-view">
      <p>{me.username}</p>
      <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
        {signout => {
          return (
            <button className="login-btn" onClick={signout}>
              Signout
            </button>
          );
        }}
      </Mutation>
    </div>
  );
};

const UnAuthView = () => {
  return (
    <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
      {toggleLogin => (
        <button className="login-btn" onClick={toggleLogin}>
          Login
        </button>
      )}
    </Mutation>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <div className="brand">
        <Link href="/">
          <a className="brand-link">
            <Logo>NP</Logo>
            <h1 className="brand-name">NotPinterest</h1>
          </a>
        </Link>
      </div>
      <User>
        {({ data }) => {
          const me = data ? data.me : null;
          return me ? AuthView(me) : UnAuthView();
        }}
      </User>
    </StyledHeader>
  );
};

export default Header;
