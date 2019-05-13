import Link from 'next/link';

import StyledHeader, { Logo } from './HeaderStyles';

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
    <button className="login-btn">Login</button>
  </StyledHeader>
);

export default Header;
