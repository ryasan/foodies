import styled from 'styled-components';

import device from '../../utils/device';

const PinDetailsStyles = styled.div`
  border-radius: ${props => props.theme.bigBr};
  box-shadow: ${props => props.theme.bigBoxShadow};
  background: ${props => props.theme.white};
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .column {
    width: 50%;
    padding: 3rem;
    height: 100%;
    @media ${device.laptop} {
      width: 100%;
    }
  }

  .img-container {
    img {
      border-radius: ${props => props.theme.bigBr};
      width: 100%;
      max-width: 500px;
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
