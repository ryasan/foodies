import styled, { keyframes } from 'styled-components'

const throb = keyframes`
    0% {
        transform: scale(1);
    }

    20% {
        transform: scale(1.5);
    }

    40% {
        transform: scale(1);
    }

    60% {
        transform: scale(1.5);
    }

    80% {
        transform: scale(1);
    }

    100% {
        transform: scale(1);
    }
`

const Likes = styled.div`
    align-items: center;
    color: ${props => (props.liked ? 'var(--red-600)' : 'var(--gray-500)')};
    cursor: pointer;
    display: flex;
    justify-content: flex-end;

    &:hover {
        color: var(--red-600);

        svg {
            animation: ${throb} 1.5s infinite;
        }
    }

    svg {
        height: 1.5rem;
        margin-left: 0.5rem;
        width: 1.5rem;
    }
`

export default Likes
