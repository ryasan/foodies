import styled from 'styled-components';

const SignupStyles = styled.div`
  width: 30rem;
  background: ${props => props.theme.white};
  box-shadow: 0 0 1rem ${props => props.theme.bsColor};

  .footer {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export default SignupStyles;
