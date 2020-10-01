import styled from 'styled-components';

const Grid = styled.div`
    height: 100%;
    margin: 0 auto;
    position: absolute;
    width: 100%;
`;

Grid.Text = styled.h1`
    color: var(--red-600);
    font-family: 'Poiret One', cursive, sans-serif;
    font-size: 7rem;
    left: 50%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 5rem;
    transform: translateX(-50%);

`

Grid.Tiles = styled.ul`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(7, 1fr);
    height: 100%;
    justify-items: center;
    left: 50%;
    margin: 0 auto;
    position: absolute;
    transform: translateX(-50%);
    width: 1680px;
`
export default Grid;
