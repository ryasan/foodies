import styled, { keyframes } from 'styled-components';

const cardBorderRadius = '0.5rem';

const cardScale = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    visibility: visible;
  }
`;

const StyledCardItem = styled.li`
  grid-row-end: span ${({ span }) => span};
  padding: 0.5rem;
  border-radius: ${cardBorderRadius};
  transition: all 0.3s ease;
  box-shadow: 0 0 1rem ${props => props.theme.bsColor};
  visibility: hidden;
  animation: ${cardScale} 1s;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
  &:hover {
    box-shadow: 0 0 1rem ${props => props.theme.bsColor},
      0 1rem 1rem -2px ${props => props.theme.bsColor};
    cursor: zoom-in;
  }

  img {
    width: 100%;
    border-radius: ${cardBorderRadius};
  }
`;

export default StyledCardItem;
