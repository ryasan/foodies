import styled from 'styled-components';

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
    border-bottom: none;
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

  .input-group {
    .input-container {
      display: flex;
      align-items: center;
      &:last-child {
        input {
          border-bottom: 1px solid ${props => props.theme.bsColor};
        }
      }
      .fa {
        position: absolute;
        margin: 0 1rem;
        color: ${props => props.theme.bsColor};
      }
    }
  }
`;

export default Form;
