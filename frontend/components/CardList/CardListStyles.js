import styled from 'styled-components';
import { rowGap, rowHeight } from './../../constants';

const StyledCardList = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: ${rowGap}px;
  /* grid-auto-rows: ${rowHeight}px; */
`;

export default StyledCardList;
