import styled, { css } from 'styled-components'

import { btns } from '../shared/Button'

const Navbar = styled.div`
    align-items: center;
    background: var(--red-600);
    box-shadow: var(--box-shadow-sm);
    display: flex;
    height: 6rem;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
`

Navbar.Nav = styled.nav`
    align-items: center;
    display: flex;
`

Navbar.Logo = styled.h1`
    backface-visibility: hidden;
    border: 0.2rem solid white;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 2rem;
    height: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    width: 4.5rem;

    &:hover {
        background: var(--red-500);
    }
`

Navbar.Btn = styled.button`
    ${btns.clearWhite}
    ${props => btns[props.modifier]}

    border-color: transparent;

    &:hover {
        border-color: inherit;
    }
`

export default Navbar
