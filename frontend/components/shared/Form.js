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

  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      border-radius: ${props => props.theme.br};
      display: block;
      background-image: linear-gradient(
        to right,
        #f64958 0%,
        #e2b04a 50%,
        #f64958 100%
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
    &:first-child {
      input {
        border-radius: ${props => `${props.theme.br} ${props.theme.br}`} 0 0;
      }
    }
    &:last-child {
      input {
        border-bottom: 1px solid ${props => props.theme.bsColor};
        border-radius: 0 0 ${props => `${props.theme.br} ${props.theme.br}`};
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
