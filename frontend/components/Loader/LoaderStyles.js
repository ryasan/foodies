import styled, { keyframes } from 'styled-components';

const lineScalePulseOut = keyframes`
    0% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
    50% {
      -webkit-transform: scaley(0.4);
      transform: scaley(0.4);
    }
    100% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
`;

const StyledLoader = styled.div`
  .line-scale-pulse-out > div {
    background-color: ${props => props.theme.primary};
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    animation-fill-mode: both;
    display: inline-block;
    animation: ${lineScalePulseOut} 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
  }

  .line-scale-pulse-out {
    div:nth-child(2),
    div:nth-child(4) {
      animation-delay: -0.4s;
    }
    div:nth-child(1),
    div:nth-child(5) {
      animation-delay: -0.2s;
    }
  }
`;

export default StyledLoader;
