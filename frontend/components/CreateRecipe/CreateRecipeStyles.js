import styled from 'styled-components'

import device from '../../utils/device'
import ContentWrap from '../shared/ContentWrap'
import { btns } from '../shared/button'

const CreateRecipe = ContentWrap

CreateRecipe.Form = styled.form`
    background: white;
    box-shadow: var(--box-shadow-xs);
    color: var(--gray-800);
    display: grid;
    flex-grow: 0;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 6rem;
    max-width: 1400px;
    overflow-x: auto;
    padding: 5rem;
    width: 100%;

    @media ${device.laptop} {
        flex-direction: column;
        padding: 2rem;
    }
`

CreateRecipe.Dropzone = styled.div`
    @media ${device.laptop} {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

CreateRecipe.Inputs = styled.div`
    display: flex;

    @media ${device.laptop} {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 100%;
    }
`

CreateRecipe.Fieldset = styled.fieldset`
    border: 0;
    position: relative;

    @media ${device.laptop} {
        align-items: center;
        margin: 0;
        width: 100%;
    }
`

CreateRecipe.TextInputs = styled.div`
    position: relative;
`

CreateRecipe.TextArea = styled.textarea`
    border: 0;
    border-bottom: 1px solid var(--gray-500);
    color: var(--gray-800);
    font-family: inherit;
    margin-bottom: 1rem;
    outline: none;
    padding: 1rem 0;
    resize: none;
    transition: all 0.3s ease;
    width: 30rem;

    &:focus {
        border-color: var(--red-600);
    }
`

CreateRecipe.Field = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
`

CreateRecipe.AddBtn = styled.button`
    ${btns.rounded}
    ${btns.clearGray}

    margin-left: 2rem;

    svg {
        pointer-events: none;
    }
`

CreateRecipe.SubmitBtn = styled.button`
    ${btns.wide}
    ${btns.red}
`

CreateRecipe.List = styled.ul`
    overflow: hidden;
    position: relative;
`

CreateRecipe.Title = styled.h4`
    position: relative;
`

CreateRecipe.Item = styled.li`
    cursor: pointer;
    list-style-position: inside;
    list-style-type: ${props => props.listStyleType};
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    svg {
        color: var(--red-600);
        float: right;
        transition: visibility 0.2s;
        visibility: hidden;
    }

    &:hover {
        color: var(--red-600);

        svg {
            visibility: visible;
        }
    }
`

export default CreateRecipe
