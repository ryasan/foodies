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
        border: none;
    }

    h2 {
        color: ${props => props.theme.black};
        text-align: center;
    }

    input {
        border: 1px solid ${props => props.theme.bsColor};
        padding: 0.75rem 1.2rem;
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
                    ${props => props.theme.primary} 0%,
                    ${props => lighten(0.3, props.theme.primary)} 50%,
                    ${props => props.theme.primary} 100%
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
            border-bottom: none;
            outline: none;
        }

        .fa {
            color: ${props => props.theme.bsColor};
            margin: 0 1rem;
            position: absolute;
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
