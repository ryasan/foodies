import styled from 'styled-components';

const Grid = styled.div`
    /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch; */
    outline: 1px solid red;
    width: 100%;

    .masonry {
        background: red;
        outline: 1px solid red;
    }

    .column {
        align-content: stretch;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: flex-start;
        max-width: 400px;
        min-width: ${props => `calc(300px / ${props.columns}) `};
    }
`;

export default Grid;
