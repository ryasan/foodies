import styled from 'styled-components'

const Grid = styled.div`
    position: relative;
    width: 100%;

    .loader {
        bottom: 0;
        display: flex;
        justify-content: center;
        margin: 6rem 0;
        position: relative;
    }
`

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
    column-gap: 0.5rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
    justify-items: center;
    left: 50%;
    margin-bottom: 6rem;
    min-height: 70vh;
    position: relative;
    transform: translateX(-50%);
    width: 1500px;

`

Grid.Column = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export default Grid
