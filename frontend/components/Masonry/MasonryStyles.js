import styled from 'styled-components';

const StyledMasonry = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch; */
  outline: 1px solid red;
  width: 100%;
  .masonry {
    outline: 1px solid red;
    background: red;
  }

  .column {
    min-width: ${props => `calc(300px / ${props.columns})`};
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-grow: 1;
  }
`;

export default StyledMasonry;
