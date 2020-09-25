import styled from 'styled-components'

import { btns } from '../shared/Button'

const Header = styled.div`
    align-items: center;
    background: white;
    box-shadow: var(--box-shadow-xs);
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    padding: 1rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
`

Header.Nav = styled.nav`
    align-items: center;
    display: flex;
`

Header.Logo = styled.h1`
    backface-visibility: hidden;
    background: var(--red-600);
    color: white;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    transform: skew(-10deg);
`

Header.Btn = styled.button`
    ${btns.clearGray}
    ${props => btns[props.modifier]}

    border-color: transparent;

    &:hover {
        border-color: inherit;
    }
`

export default Header
