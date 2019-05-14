import styled from 'styled-components';

const StyledMasonry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
  margin: auto;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-grow: 1;
  }
`;

export default StyledMasonry;
