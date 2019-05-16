import Link from 'next/link';
import { Mutation } from 'react-apollo';

import { TOGGLE_LOGIN_MUTATION } from '../Login/Login';
import StyledHeader, { Logo } from './HeaderStyles';
import User from '../User/User';
import Signout from '../Signout/Signout';

const Header = () => {
  const renderAuthView = me => {
    if (me) return <Signout />;
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

  return (
    <User>
      {({ data }) => {
        const me = data ? data.me : null;
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
            {renderAuthView(me)}
          </StyledHeader>
        );
      }}
    </User>
  );
};

export default Header;
