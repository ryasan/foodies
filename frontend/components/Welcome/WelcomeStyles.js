import styled from 'styled-components';

const StyledWelcome = styled.header`
  position: relative;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    position: relative;
    z-index: 1;
    background: rgba(47, 42, 42, 0.95);
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 3rem;
      margin: 0;
      color: ${props => props.theme.primary};
    }

    p {
      margin: 0;
      color: ${props => props.theme.white};
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('/static/images/welcome-bg.jpg') center center;
    filter: grayscale(1);
  }

  button {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    background: none;
    border: none;
    color: ${props => props.theme.white};
    font-size: 2.5rem;
    margin: 1rem;
    transition: all 0.3s;
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

export default StyledWelcome;
