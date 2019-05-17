import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  background: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  box-shadow: 0 0 0.4rem ${props => props.theme.bsColor};

  .brand-link {
    display: flex;
    align-items: center;
    .brand-name {
      font-size: 2.5rem;
      margin-left: 1rem;
      color: ${props => props.theme.gray};
    }
  }

  .login-btn {
    background: none;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
    border-radius: ${props => props.theme.br};
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 0.2s ease;
    &:hover {
      color: ${props => props.theme.white};
      background: ${props => props.theme.primary};
    }
    &:focus {
      outline: 0;
    }
  }

  .auth-view {
    display: flex;
    align-items: center;
    p {
      margin-right: 1rem;
    }
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
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
