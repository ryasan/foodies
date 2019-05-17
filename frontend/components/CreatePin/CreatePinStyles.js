import styled from 'styled-components';
import { lighten } from 'polished';

import device from '../../utils/device';

const CreatePinStyles = styled.div`
  background: ${props => props.theme.white};
  padding: 5rem;
  max-width: 1000px;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
  }

  .column {
    @media ${device.tablet} {
      width: 100%;
    }
  }

  .drop {
    width: 40%;
    .dropzone {
      width: 100%;
      max-width: 40rem;
      padding: 2rem;
      cursor: pointer;
      border-radius: 1rem;
      padding: 1.5rem;
      background: ${props => props.theme.lightGray};
      min-height: 45rem;
      display: flex;
      flex-flow: column;
      outline: none;
      .drop-area {
        flex: 1;
        width: 100%;
        border: 0.2rem dashed ${props => lighten(0.2, props.theme.gray)};
        border-radius: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .fa {
          font-size: 3rem;
          color: ${props => props.theme.gray};
        }
      }
    }
  }

  .text-inputs {
    width: 50%;
  }
`;

export default CreatePinStyles;
