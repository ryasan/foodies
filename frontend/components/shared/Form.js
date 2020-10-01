import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

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
        border: 0;
    }

    h2 {
        color: ${props => props.theme.black};
        margin: 2rem 0;
        text-align: center;
    }

    input {
        border: 1px solid ${props => props.theme.bsColor};
        padding: 0.75rem 2rem;
        text-indent: 2rem;
        width: 100%;
    }

    fieldset {
        border: 0;
        padding: 0;

        &[disabled] {
            opacity: 0.5;
        }

        &::before {
            background-image:
                linear-gradient(
                    to right,
                    var(--cyan-A400) 0%,
                    var(--black-400) 50%,
                    var(--cyan-A400) 100%
                );
            border-radius: ${props => props.theme.br};
            content: '';
            display: block;
            height: 10px;
        }

        &[aria-busy='true']::before {
            animation: ${loading} 0.5s linear infinite;
            background-size: 50% auto;
        }
    }

    .input-container {
        align-items: center;
        display: flex;

        input {
            border-bottom: 0;
            outline: none;
        }

        svg {
            color: var(--black-400);
            height: 2rem;
            margin: 0 1rem;
            position: absolute;
            width: 2rem;
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
            svg {
                color: var(--cyan-A400);
            }
        }
    }
`;

export default Form;
