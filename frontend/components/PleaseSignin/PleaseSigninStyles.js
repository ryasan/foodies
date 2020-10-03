import styled from 'styled-components'

import { btns } from '../shared/Button'

const PleaseSigninStyles = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: center;
    width: 100%;

    .inner {
        background-color: white;
        box-shadow: var(--box-shadow-md);
        color: var(--cyan-A400);
        margin-top: 20rem;
        padding: 3rem;
        width: 50rem;

        button {
            ${btns.clearCyan}
            ${btns.wideRounded}

            left: 50%;
            margin-top: 2rem;
            position: relative;
            transform: translateX(-50%);
        }
    }
`

export default PleaseSigninStyles
