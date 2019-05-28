import styled from 'styled-components';
import { darken } from 'polished';

const StyledTile = styled.li`
  margin: 0.4rem;

  .content {
    max-width: 250px;
    padding: 0.5rem;
    border-radius: ${props => props.theme.br};
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0 0 1rem ${props => props.theme.bsColor},
        0 1rem 1rem -2px ${props => props.theme.bsColor};
    }

    img {
      width: 100%;
      border-radius: ${props => props.theme.br};
      cursor: zoom-in;
    }

    .card-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 900;
      font-size: 1.4rem;
      color: ${props => darken(0.3, props.theme.gray)};
      font-size: 1.5rem;
      .end {
        display: flex;
        align-items: center;
        color: ${props => props.theme.gray};
      }
    }
  }
`;

export default StyledTile;
