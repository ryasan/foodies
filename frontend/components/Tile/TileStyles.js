import styled from 'styled-components'
import { darken } from 'polished'

const Tile = styled.li`
    border-radius: 0.5rem;
    color: white;
    height: 35rem;
    list-style-type: none;
    padding: 0.5rem 0.5rem 0;
    transition: all 0.3s;
    width: 23rem;

    &:hover {
        background: white;
        box-shadow: var(--box-shadow-sm);
        color: var(--black-400);
    }

    &:nth-child(2) {
        margin-top: 150px;
    }

    &:nth-child(3) {
        margin-top: 250px;
    }

    &:nth-child(4) {
        margin-top: 350px;
    }

    &:nth-child(5) {
        margin-top: 250px;
    }

    &:nth-child(6) {
        margin-top: 150px;
    }
`

Tile.Img = styled.img`
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow-sm);
    cursor: zoom-in;
    height: 93%;
    object-fit: cover;
    width: 100%;
`

Tile.Body = styled.div`
    align-items: center;
    display: flex;
    font-size: var(--font-size-sm);
    justify-content: space-between;
    margin: auto;
`

Tile.Footer = styled.div`
    align-items: center;
    display: flex;
`

Tile.Text = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export default Tile
