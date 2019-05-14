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
`;

export default StyledLogin;
