import styled from 'styled-components';

const StyledWelcome = styled.header`
    align-items: center;
    display: flex;
    height: 20rem;
    justify-content: center;
    position: relative;

    .text {
        align-items: center;
        background: rgba(47, 42, 42, 0.95);
        color: white;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        position: relative;
        width: 100%;
        z-index: 1;

        h2 {
            color: ${props => props.theme.primary};
            font-size: 3rem;
            margin: 0;
        }

        p {
            color: ${props => props.theme.white};
            margin: 0;
        }
    }

    button {
        background: 0;
        border: none;
        color: ${props => props.theme.white};
        font-size: 2.5rem;
        margin: 1rem;
        outline: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: all 0.3s;
        z-index: 1;

        &:hover {
            color: ${props => props.theme.primary};
        }
    }
`;

export default StyledWelcome;
