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
    background: ${theme.gray};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    margin: 0;
    overflow-x: hidden;
    padding: 0;

    /* transform: translate3d(0, 0, 0); */
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

::-webkit-scrollbar {
    width: 0.3rem;
}

::-webkit-scrollbar-track {
    background: var(--gray-300);
}

::-webkit-scrollbar-thumb {
    background: var(--red-600);
}

::-webkit-scrollbar-thumb:hover {
    background: white;
}

`

const loginOpenCSS = css`
    filter: blur(3px) grayscale(1);
    pointer-events: none;
    transform: scale(1.1);
`

const Page = styled.div`
    background: white;
    display: flex;
    min-height: 100vh;
    transition: all 0.5s ease;
    ${props => props.loginIsOpen && loginOpenCSS}
`

Page.Inner = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export { theme, GlobalStyles, Page }
