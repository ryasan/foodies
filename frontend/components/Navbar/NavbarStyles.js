import styled, { css } from 'styled-components'

import { btns } from '../shared/Button'

export const NavWrapper = styled.div`
    height: 100%;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    padding-top: 6rem;
    position: relative;
    width: 100%;
`

const Navbar = styled.div`
    align-items: center;
    display: flex;
    height: 6rem;
    justify-content: space-between;
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 999;
`

Navbar.Sticky = styled(Navbar)`
    background: var(--red-600);
    box-shadow: var(--box-shadow-xs);
    position: sticky;

    button {
        color: white;
    }

    a {
        border-color: white;
        color: white;
    }
`

Navbar.Absolute = styled(Navbar)`
    position: absolute;
`

Navbar.Nav = styled.nav`
    align-items: center;
    display: flex;
`

Navbar.Logo = styled.a`
    backface-visibility: hidden;
    border: 0.2rem solid var(--red-600);
    border-radius: 50%;
    color: var(--red-600);
    cursor: pointer;
    font-family: 'Poiret One', cursive, sans-serif;
    font-family: 'Oranienbaum', serif;
    font-size: 2rem;
    font-weight: bolder;
    height: 4.5rem;
    line-height: 4.5rem;
    text-align: center;
    width: 4.5rem;

    &:hover {
        background: var(--red-500);
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
