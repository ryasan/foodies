import styled, { css, keyframes } from 'styled-components'

import Icon from '../icons'
import { btns } from '../shared/Button'

const loading = keyframes`
    from {
        background-position: 0 0;
    }

    to {
        background-position: 100% 100%;
    }
`

const hideLoginCSS = css`
    opacity: 0;
    pointer-events: none;
`

const showLoginCSS = css`
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
`

const Login = styled.div`
    align-items: center;
    background: var(--black-400);
    display: flex;
    height: 100%;
    justify-content: center;
    position: fixed;
    transition: all 0.5s ease;
    width: 100%;
    z-index: 1;
    ${props => (props.loginIsOpen ? showLoginCSS : hideLoginCSS)}
`

Login.FormOuter = styled.div`
    background: white;
    box-shadow: var(--box-shadow-lg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 30rem;
    padding-top: 1rem;
    width: 30rem;
`

Login.Form = styled.form`
    padding: 0.5rem;
`

Login.Fieldset = styled.fieldset`
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
        border-radius: 1rem;
        content: '';
        display: block;
        height: 10px;
    }

    &[aria-busy='true']::before {
        animation: ${loading} 0.5s linear infinite;
        background-size: 50% auto;
    }
`

Login.Title = styled.h2`
    color: var(--black-400);
    margin: 2rem 0;
    text-align: center;
`
Login.Text = styled.span`
    font-size: 1.2rem;
    margin: 0 0 1rem;
    text-align: center;

    a {
        color: var(--cyan-A400);
    }
`

Login.InputContainer = styled.div`
    align-items: center;
    display: flex;

    input {
        border: 0.1rem solid var(--gray-400);
        border-bottom: 0;
        outline: none;
        padding: 0.75rem 2rem;
        text-indent: 2rem;
        width: 100%;
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
            border-radius: 0.5rem 0.5rem 0 0;
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
`

Login.Close = styled(Icon)`
    color: var(--cyan-A400);
    cursor: pointer;
    height: 3rem;
    margin: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    width: 3rem;
`

Login.SubmitBtn = styled.button`
    ${btns.wideRounded}
    ${btns.cyan}

    margin-top: 2rem;
    padding: 0.5rem 0;
    width: 100%;
`

export default Login
