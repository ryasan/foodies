import styled, { css } from 'styled-components'

import Icon from '../icons'
import { btns } from '../shared/Button'

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
    .sign-form {
        background: white;
        box-shadow: var(--box-shadow-lg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 30rem;
        padding-top: 1rem;
        width: 30rem;

        button {
            ${btns.wideRounded}
            ${btns.cyan}

            margin-top: 2rem;
            padding: 0.5rem 0;
            width: 100%;
        }

        p {
            font-size: 1.2rem;
            margin: 0 0 1rem;
            text-align: center;

            a {
                color: var(--cyan-A400);
            }
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

export default Login
