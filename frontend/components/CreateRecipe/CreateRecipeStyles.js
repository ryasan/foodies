import styled from 'styled-components'

import { device }from '../../utils/device'
import { btns } from '../shared/Button'

const CreateRecipe = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`

CreateRecipe.Form = styled.form`
    background: white;
    box-shadow: var(--box-shadow-xs);
    color: var(--gray-800);
    display: grid;
    flex-grow: 0;
    gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
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
    width: 30rem;

    &:focus {
        border-color: var(--cyan-A400);
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
    ${btns.wideRounded}
    ${btns.cyan}
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
    line-height: 2.5rem;
    list-style-position: inside;
    list-style-type: ${props => props.listStyleType};
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    svg {
        color: var(--cyan-A400);
        float: right;
        height: 2.5rem;
        visibility: hidden;
        width: 2.5rem;
    }

    &:hover {
        color: var(--cyan-A400);

        svg {
            visibility: visible;
        }
    }
`

export default CreateRecipe
