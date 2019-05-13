import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const borderRadius = '0.5rem';

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

  .content {
    padding: 0.5rem;
    border-radius: ${props => props.theme.br};
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
      border-radius: ${props => props.theme.br};
    }

    .card-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 900;
      font-size: 1.4rem;
      color: ${props => darken(0.3, props.theme.gray)};
      .likes {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        font-size: 1.7rem;
        color: ${props => props.theme.gray};
        cursor: pointer;
        .icon {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export default StyledCardItem;
