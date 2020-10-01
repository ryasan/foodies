import styled from 'styled-components';

const Grid = styled.div`
    min-height: 100vh;
    position: relative;
    width: 100%;
`;

Grid.Text = styled.h1`
    color: white;
    font-family: 'Poiret One', cursive, sans-serif;
    font-size: 7rem;
    left: 50%;
    margin: 0;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);

`

Grid.Columns = styled.div`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(7, 1fr);
    height: 100%;
    justify-items: center;
    left: 50%;
    margin: 0 auto;
    position: relative;
    transform: translateX(-50%);
    width: 1680px;
`

Grid.Column = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &:nth-child(2) {
        margin-top: 10rem;
    }

    &:nth-child(3) {
        margin-top: 15rem;
    }

    &:nth-child(4) {
        margin-top: 20rem;
    }

    &:nth-child(5) {
        margin-top: 15rem;
    }

    &:nth-child(6) {
        margin-top: 10rem;
    }

`

export default Grid;
