import styled from 'styled-components'

import { btns } from '../shared/Button'

const Navbar = styled.div`
    align-items: center;
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
    border: 2px solid var(--red-600);
    border-radius: 50%;
    color: var(--red-600);
    cursor: pointer;
    font-size: 2rem;
    height: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    width: 4.5rem;

    &:hover {
        background: var(--red-600);
        color: white;
    }
`

Navbar.Btn = styled.button`
    ${btns.clearRed}
    ${props => btns[props.modifier]}

    border-color: transparent;

    &:hover {
        border-color: inherit;
    }
`

export default Navbar
