import styled, { createGlobalStyle, css } from 'styled-components'

import device from '../../utils/device'
import Theme from './Theme'

const theme = {
    primary: '#ff0033',
    white: '#fff',
    offWhite: '#faf6f6',
    black: '#333',
    gray: '#8E8E8E',
    lightGray: '#f2f2f2',
    bsColor: '#bbb',
    bigBoxShadow:
        '0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 0.5rem rgba(0, 0, 0, 0.2)',
    br: '0.5rem',
    bigBr: '1rem',
    maxWidth: '1200px'
}

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap');

${Theme}
html {
    box-sizing: border-box;
    font-size: 10px;

    @media ${device.mobileL} {
        font-size: 8px;
    }
}

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    transition: transform 0.7s ease;
}

a {
    cursor: pointer;
    text-decoration: none;
}

button {
    cursor: pointer;
}

fieldset {
    &[disabled] {
        opacity: 0.5;
    }
}

svg {
    height: 100%;
    width: 100%;
}

li {
    list-style-position: inside;
}

::-webkit-scrollbar {
    width: 0.3rem;
}

::-webkit-scrollbar-track {
    background: var(--gray-300);
}

::-webkit-scrollbar-thumb {
    background: var(--cyan-A400);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--cyan-A100);
}

`

const loginOpenCSS = css`
    filter: grayscale(1) blur(3px);
    pointer-events: none;
    transform: scale(1.1);
`

const Layout = styled.div`
    background: var(--black-400);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: all 0.3s;
    ${props => props.loginIsOpen && loginOpenCSS}

`

Layout.Inner = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export { theme, GlobalStyles, Layout }
