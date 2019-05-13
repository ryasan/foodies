import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 0.4rem ${props => props.theme.bsColor};
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;

  .brand {
    font-size: 3rem;
    margin-left: 1rem;
    a {
      color: ${props => props.theme.gray};
    }
  }
`;

const Logo = styled.h1`
  font-size: 3rem;
  transform: skew(-7deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.primary};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

export { Logo };
export default StyledHeader;
