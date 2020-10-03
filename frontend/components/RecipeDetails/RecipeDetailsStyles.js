import styled from 'styled-components'

import { device }from '../../utils/device'

const RecipeDetails = styled.div`
    background: white;
    box-shadow: var(--box-shadow-xlg);
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 80% 20%;
    height: 50rem;
    justify-content: center;
    margin-top: 20rem;
    max-width: 1200px;
    position: relative;
`

RecipeDetails.HugeText = styled.h1`
    color: var(--gray-500);
    font-family: 'Poiret One', cursive, sans-serif;
    font-size: 30rem;
    left: 60vw;
    position: absolute;
    text-transform: uppercase;
    top: 5rem;
    white-space: nowrap;
`

RecipeDetails.GridLeft = styled.div`
    display: flex;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-content: center;
    position: relative;
`

RecipeDetails.Img = styled.img`
    box-shadow:
        0 1.9rem 3.8rem rgba(0, 0, 0, 0.6),
        0 1.5rem 1.2rem rgba(0, 0, 0, 0.44);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: -10rem;
    width: 70rem;
`

RecipeDetails.GridRight = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    overflow-y: scroll;
`

RecipeDetails.TextBody = styled.div`
    position: initial;
`

RecipeDetails.Title = styled.h1`
    color: var(--cyan-A400);
    margin: 2rem 0;
    position: relative;

    &::before {
        background: var(--cyan-A400);
        border-radius: 5rem;
        bottom: -2rem;
        content: '';
        height: 0.3rem;
        left: 0;
        position: absolute;
        width: 40%;
    }
`

RecipeDetails.Creator = styled.div`
    font-weight: bold;
    padding: 2rem 0;

    span {
        background: var(--cyan-A400);
        border-radius: 1.5rem;
        color: white;
        padding: 0.5rem 1rem;
    }
`

RecipeDetails.Directions = styled.ul`
    overflow-y: scroll;
`

RecipeDetails.DirectionItem = styled.li`
    font-weight: bold;
    list-style-position: outside;
    list-style-type: decimal;
    margin: 2rem;

    &:not(:first-child) {
        margin-top: 2rem;
    }

    span {
        font-weight: initial;
    }
`

RecipeDetails.GridBottom = styled.div`
    align-items: center;
    display: grid;
    grid-column: 1/3;
    grid-row: 2/3;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0 2rem 2rem;
`

RecipeDetails.Ingredients = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 25rem);
    overflow-y: scroll;
`

RecipeDetails.IngredientItem = styled.li`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

RecipeDetails.DeleteRecipeContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default RecipeDetails
