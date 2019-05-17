import styled, { css } from 'styled-components';

const hideLoginCSS = css`
  transform: scale(1.5);
  opacity: 0;
  pointer-events: none;
`;

const showLoginCSS = css`
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
`;

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: transparent;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  ${props => (props.loginIsOpen ? showLoginCSS : hideLoginCSS)};

  .close {
    top: 0;
    right: 0;
    margin: 2rem;
    position: absolute;
    color: ${props => props.theme.primary};
    cursor: pointer;
  }

  .sign-form {
    width: 30rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.white};
    box-shadow: 0 0 1rem ${props => props.theme.bsColor};
    padding-top: 1rem;

    button {
      width: 100%;
      margin-top: 1rem;
      border-radius: ${props => props.theme.br};
    }

    p {
      text-align: center;
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
      a {
        color: ${props => props.theme.primary};
      }
    }
  }
`;

export default StyledLogin;
