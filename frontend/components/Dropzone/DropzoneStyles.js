import styled from 'styled-components'
import { lighten } from 'polished'

const Dropzone = styled.div`
    position: initial;
`

Dropzone.DropWrap = styled.div`
    background: var(--gray-300);
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    flex-flow: column;
    min-height: 40rem;
    opacity: ${props => (props.loading ? 0.5 : 1)};
    outline: none;
    padding: 2rem;
    padding: 1.5rem;
`

Dropzone.DropArea = styled.div`
    align-items: center;
    border: 0.2rem dashed var(--gray-500);
    border-radius: 0.5rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    padding: 1rem;
    text-align: center;
    white-space: nowrap;
    width: 100%;

    svg {
        color: var(--gray-500);
        height: 15rem;
        width: 15rem;
    }
`

Dropzone.ImgPreviewContainer = styled.div`
    border-radius: 1rem;
    max-width: 30rem;
    position: relative;
`

Dropzone.Img = styled.img`
    border-radius: 1rem;
    max-width: 300px;
    width: 100%;
`

Dropzone.Overlay = styled.div`
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
`

Dropzone.IconBtn = styled.button`
    background: white;

    &:hover {
        background: #d9d9d9;
        border: 2px solid #d9d9d9;
    }

    svg {
        fill: var(--black-400);
    }
`

export default Dropzone
