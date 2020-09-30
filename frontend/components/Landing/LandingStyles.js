import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-scroll'

import { btns } from '../shared/Button'

const Landing = styled.header`
    align-items: center;
    display: flex;
    font-family: 'Poiret One', cursive, sans-serif;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &::before {
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
        bottom: 0;
        content: '';
        height: 200px;
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 999;
    }
`

const activeCSS = css`
    opacity: 1;
    transform: scale(1.2);
`

const OverlayBase = css`
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: transform 5s ease-out, opacity 2s linear;
    width: 100%;

    * {
        outline: none;
    }
`

// prettier-ignore
Landing.Overlay1 = styled.div`
    ${OverlayBase}
    ${props => props.active && activeCSS}

    background-image: url('../../static/images/bg-1-min.jpg');
    background-position: bottom center;
    filter: invert(0.1);
`

Landing.Overlay2 = styled.div`
    ${OverlayBase}
    ${props =>
        props.active &&
        activeCSS}

    background-image: url('../../static/images/bg-2-min.jpg');
`

Landing.Overlay3 = styled.div`
    ${OverlayBase}
    ${props =>
        props.active &&
        activeCSS}

    background-image: url('../../static/images/bg-3-min.jpg');
`

Landing.TextContainer = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 1;
`

Landing.Title = styled.h1`
    font-size: 8rem;
    margin: 0;
    text-shadow: 0.2rem 0.2rem var(--black-500);
`

Landing.Subtitle = styled.p`
    color: white;
    font-size: 3rem;
    margin: 0;
    text-shadow: 0.1rem 0.1rem var(--black-500);
`

Landing.IconBtn = styled.button`
    background: 0;
    border: 0;
    color: var(--red-600);
    height: 3.5rem;
    margin-right: 23rem;
    margin-top: 1.2rem;
    outline: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.2s;
    width: 3.5rem;
    z-index: 1;

    &:hover {
        color: white;
    }
`

const hover = keyframes`
    0% {
        transform: translate(-50%, 0);
    }

    50% {
        transform: translate(-50%, 20px);
    }

    100% {
        transform: translate(-50%, 0);
    }
`

Landing.ScrollBtn = styled(Link)`
    ${btns.clearRed}
    ${btns.rounded}

    animation: ${hover} 2s ease-in-out infinite forwards;
    bottom: 5rem;
    box-shadow: var(--box-shadow-md);
    height: 5rem;
    left: 50%;
    outline: none;
    padding: 0.5rem;
    position: absolute;
    transform: translateX(-50%);
    width: 5rem;
    z-index: 999;
`

export default Landing
