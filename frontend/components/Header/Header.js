import Link from 'next/link';
import { Mutation } from 'react-apollo';

import StyledHeader, { Logo } from './HeaderStyles';
import { TOGGLE_LOGIN_MUTATION } from '../Login/Login';

const Header = () => (
  <StyledHeader>
    <div className="brand">
      <Link href="/">
        <a className="brand-link">
          <Logo>NP</Logo>
          <h1 className="brand-name">NotPinterest</h1>
        </a>
      </Link>
    </div>
    <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
      {toggleLogin => (
        <button className="login-btn" onClick={toggleLogin}>
          Login
        </button>
      )}
    </Mutation>
  </StyledHeader>
);

export default Header;
