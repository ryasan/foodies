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
    @media ${device.laptop} {
      width: 100%;
    }
  }

  .img-container {
    img {
      border-radius: ${props => props.theme.bigBr};
      width: 100%;
    }
  }

  .details-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .body {
    h1 {
      font-size: 3.5rem;
      margin-top: 0;
    }
    p {
      font-size: 2rem;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }
`;

export default PinDetailsStyles;
