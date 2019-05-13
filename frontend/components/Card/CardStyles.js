import styled from 'styled-components';

const cardBorderRadius = '0.25rem';

const StyledCardItem = styled.li`
  grid-row-end: span ${({ span }) => span};
  padding: 0.5rem;
  border-radius: ${cardBorderRadius};
  background-color: rgba(251, 251, 251, 0);
  overflow: hidden;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  transition-property: opacity, box-shadow, background-color;
  will-change: opacity, box-shadow, background-color;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 0 1rem ${props => props.theme.bsColor};
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
