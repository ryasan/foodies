import styled from 'styled-components';

const StyledCardItem = styled.li`
  grid-row-end: span ${({ span }) => span};
  /* background: red; */

  .card {
    img,
    .card-img {
      width: 100%;
    }
  }
`;

export default StyledCardItem;
