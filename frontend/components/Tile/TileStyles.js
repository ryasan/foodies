import styled from 'styled-components'
import { darken } from 'polished'

const Tile = styled.li`
    border-radius: 0.5rem;
    color: white;
    height: ${props => props.long ? '70rem' : '35rem'};
    list-style-type: none;
    transition: all 0.2s;
    width: 28.5rem;

    &:hover {
        box-shadow: var(--box-shadow-sm);
        color: var(--cyan-A400);
        transform: scale(1.02);
    }

`

Tile.Img = styled.img`
    border-radius: 0.5rem;
    cursor: zoom-in;
    height: ${props => props.long ? '67rem' : '32rem'};
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
