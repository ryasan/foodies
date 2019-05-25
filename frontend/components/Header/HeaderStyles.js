import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem;
  box-shadow: 0 0 0.4rem ${props => props.theme.bsColor};

  .brand-link {
    display: flex;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  transform: skew(-10deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.primary};
  color: white;
  outline: 1px solid ${props => props.theme.primary};
`;

export { Logo };
export default StyledHeader;
