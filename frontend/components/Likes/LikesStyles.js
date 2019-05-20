import styled, { keyframes } from 'styled-components';

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

const StyledLikes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.liked ? props.theme.primary : props.theme.gray)};
  &:hover {
    color: ${props => props.theme.primary};
    .icon {
      animation: ${throb} 1.5s infinite;
    }
  }

  .icon {
    margin: 0 0.5rem;
  }
`;

export default StyledLikes;
