import Link from 'next/link';

import StyledHeader, { Logo } from './HeaderStyles';

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>NP</a>
      </Link>
    </Logo>
    <h1 className="brand">
      <Link href="/">
        <a>NotPinterest</a>
      </Link>
    </h1>
  </StyledHeader>
);

export default Header;
