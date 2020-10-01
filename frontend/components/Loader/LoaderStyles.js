import styled, { keyframes } from 'styled-components';

const lineScalePulseOut = keyframes`
        0% {
            transform: scaleY(1);
            transform: scaleY(1);
        }

        50% {
            transform: scaleY(0.4);
            transform: scaleY(0.4);
        }

        100% {
            transform: scaleY(1);
            transform: scaleY(1);
        }
`;

const StyledLoader = styled.div`
    .line-scale-pulse-out > div {
        animation: ${lineScalePulseOut} 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
        animation-fill-mode: both;
        background-color: var(--cyan-A400);
        border-radius: 2px;
        display: inline-block;
        height: 35px;
        margin: 2px;
        width: 4px;
    }

    .line-scale-pulse-out {
        div:nth-child(2),
        div:nth-child(4) {
            animation-delay: -0.4s;
        }

        div:nth-child(1),
        div:nth-child(5) {
            animation-delay: -0.2s;
        }
    }
`;

export default StyledLoader;
