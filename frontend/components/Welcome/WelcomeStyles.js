import styled from 'styled-components'

const Welcome = styled.header`
    align-items: center;
    background: url('../../static/images/bg.jpg') bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 20rem;
    justify-content: center;
    position: relative;
`

Welcome.Overlay = styled.div`
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

Welcome.TextContainer = styled.div`
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

Welcome.Title = styled.h1`
    color: var(--red-600);
    font-size: 7.5rem;
    margin: 0;
    text-shadow: 0.2rem 0.2rem white;
`

Welcome.Subtitle = styled.p`
    color: white;
    margin: 0;
    text-shadow: 0.1rem 0.1rem black;
`

Welcome.IconBtn = styled.button`
    background: 0;
    border: 0;
    color: white;
    font-size: 2.5rem;
    margin: 1rem;
    outline: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 0.2s;
    z-index: 1;

    &:hover {
        color: var(--red-600);
    }
`

export default Welcome
