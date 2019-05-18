import styled from 'styled-components';
import { lighten } from 'polished';

const DropzoneStyles = styled.div`
  min-height: 40vh;
  .image-preview-container {
    border-radius: 1rem;
    position: relative;
    max-width: 30rem;
    &:hover {
      .overlay {
        opacity: 1;
      }
    }
    img {
      width: 100%;
      border-radius: 1rem;
    }

    .overlay {
      border-radius: 1rem;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease;
      opacity: 0;
      button {
        background: ${props => props.theme.white};
        &:hover {
          border: 2px solid #d9d9d9;
          background: #d9d9d9;
        }
        svg {
          fill: ${props => props.theme.black};
        }
      }
    }
  }

  .drop-wrap {
    padding: 2rem;
    border-radius: 1rem;
    padding: 1.5rem;
    background: ${props => props.theme.lightGray};
    min-height: 40rem;
    display: flex;
    flex-flow: column;
    outline: none;
    cursor: pointer;
    opacity: ${props => (props.loading ? 0.5 : 1)};

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
      padding: 1rem;
      text-align: center;
      white-space: nowrap;
      .fa {
        font-size: 3rem;
        color: ${props => props.theme.gray};
      }
    }
  }
`;

export default DropzoneStyles;
