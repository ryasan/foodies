import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  padding: 0.5rem;

  fieldset {
    border: none;
  }

  h2 {
    color: ${props => props.theme.black};
    text-align: center;
  }

  input {
    text-indent: 2rem;
    width: 100%;
    padding: 0.75rem 1.2rem;
    border: 1px solid ${props => props.theme.bsColor};
  }

  button,
  input[type='submit'] {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};
    width: 100%;
    border: none;
    padding: 1rem 1.2rem;
    margin: 1rem 0;
    border-radius: 3px;
  }

  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    input {
      border-bottom: none;
      outline: none;
    }
    .fa {
      position: absolute;
      margin: 0 1rem;
      color: ${props => props.theme.bsColor};
    }
    &:last-child {
      input {
        border-bottom: 1px solid ${props => props.theme.bsColor};
      }
    }
    &:focus-within {
      .fa {
        color: ${props => props.theme.primary};
      }
    }
  }
`;

export default Form;
