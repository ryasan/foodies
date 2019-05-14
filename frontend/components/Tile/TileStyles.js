import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

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

const throb = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.5);
  }
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.5);
  }
  80% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledTile = styled.div`
  margin: 0.4rem;

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
        &:hover {
          color: ${props => props.theme.primary};
          .icon {
            animation: ${throb} 1.5s infinite;
          }
        }
        .icon {
          margin: 0 0.5rem;
        }
      }
    }
  }
`;

export default StyledTile;
