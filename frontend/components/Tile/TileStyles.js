import styled from 'styled-components'
import { darken } from 'polished'

const Tile = styled.li`
    border-radius: 0.5rem;
    height: 35rem;
    margin: 0.4rem;
    padding: 0.5rem 0.5rem 0;
    transition: all 0.3s ease;
    width: 23rem;

    &:hover {
        box-shadow: var(--box-shadow-sm);
    }
`

Tile.Img = styled.img`
    border-radius: 0.5rem;
    cursor: zoom-in;
    height: 93%;
    object-fit: cover;
    width: 100%;
`

Tile.Body = styled.div`
    align-items: center;
    color: var(--gray-800);
    display: flex;
    font-size: var(--font-size-sm);
    justify-content: space-between;
    margin: auto;
`

Tile.Footer = styled.div`
    align-items: center;
    color: var(--gray-800);
    display: flex;
`

Tile.Text = styled.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export default Tile
