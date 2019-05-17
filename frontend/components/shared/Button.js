import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const defaultCSS = css`
  border: 2px solid transparent;
  color: ${props => props.theme.gray};
  background: none;
  &:hover {
    border: 2px solid ${props => props.theme.lightGray};
    background: ${props => props.theme.lightGray};
  }
`;

const clearCSS = css`
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  background: none;
  &:hover {
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
  }
`;

const primaryCSS = css`
  border: 2px solid ${props => props.theme.primary};
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  &:hover {
    color: ${props => props.theme.primary};
    background: none;
  }
`;

const StyledButton = styled.button`
  border-radius: 10rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  min-height: 4rem;
  transition: all 0.2s ease;

  ${props => {
    switch (props.color) {
      case 'primary':
        return primaryCSS;
      case 'clear':
        return clearCSS;
      default:
        return defaultCSS;
    }
  }};

  &.icon-btn {
    border-radius: 50%;
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ color, onClick, children, type, className }) => (
  <StyledButton
    color={color}
    onClick={onClick}
    type={type}
    className={className}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
