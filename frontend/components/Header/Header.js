import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import { FaPlus, FaGithub } from 'react-icons/fa';

import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin';
import CURRENT_USER_QUERY from '../../graphql/queries/currentUser';
import SIGN_OUT_MUTATION from '../../graphql/mutations/signout';
import User from '../User/User';
import Button from '../shared/Button';
import StyledHeader, { Logo } from './HeaderStyles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const AuthView = me => {
  return (
    <Mutation
      mutation={SIGN_OUT_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
      {signout => {
        return (
          <nav>
            <Link href="/account">
              <Button>{me.username}</Button>
            </Link>
            <Link href="/pin-builder">
              <Button className="icon-btn">
                <FaPlus />
              </Button>
            </Link>
            <Button onClick={signout}>Signout</Button>
          </nav>
        );
      }}
    </Mutation>
  );
};

const UnAuthView = () => {
  return (
    <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
      {toggleLogin => (
        <nav>
          <Link href="/pin-builder">
            <Button className="icon-btn">
              <FaPlus />
            </Button>
          </Link>
          <Button onClick={toggleLogin}>Signin</Button>
        </nav>
      )}
    </Mutation>
  );
};

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a className="brand-link">
          <Logo>NP</Logo>
        </a>
      </Link>
      <User>
        {({ data: { me } }) => {
          return me ? AuthView(me) : UnAuthView();
        }}
      </User>
    </StyledHeader>
  );
};

export default Header;
