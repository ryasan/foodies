import styled from 'styled-components';

import device from '../../utils/device';

const PinDetailsStyles = styled.div`
  border-radius: ${props => props.theme.bigBr};
  box-shadow: ${props => props.theme.bigBoxShadow};
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .column {
    width: 50%;
    padding: 3rem;
    @media ${device.laptop} {
      width: 100%;
    }
  }

  .img-container {
    img {
      border-radius: ${props => props.theme.br};
      width: 100%;
    }
  }

  .details {
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

export default PinDetailsStyles;
