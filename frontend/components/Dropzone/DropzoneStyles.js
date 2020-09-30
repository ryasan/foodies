import styled from 'styled-components';
import { lighten } from 'polished';

const DropzoneStyles = styled.div`
    .image-preview-container {
        border-radius: 1rem;
        max-width: 30rem;
        position: relative;

        &:hover {
            .overlay {
                opacity: 1;
            }
        }

        img {
            border-radius: ${props => props.theme.bigBr};
            max-width: 300px;
            width: 100%;
        }

        .overlay {
            align-items: center;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 1rem;
            display: flex;
            height: 100%;
            justify-content: center;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transition: all 0.3s ease;
            width: 100%;

            button {
                background: ${props => props.theme.white};

                &:hover {
                    background: #d9d9d9;
                    border: 2px solid #d9d9d9;
                }

                svg {
                    fill: ${props => props.theme.black};
                }
            }
        }
    }

    .drop-wrap {
        background: ${props => props.theme.lightGray};
        border-radius: 1rem;
        cursor: pointer;
        display: flex;
        flex-flow: column;
        min-height: 40rem;
        opacity: ${props => (props.loading ? 0.5 : 1)};
        outline: none;
        padding: 2rem;
        padding: 1.5rem;

        .drop-area {
            align-items: center;
            border: 0.2rem dashed ${props => lighten(0.2, props.theme.gray)};
            border-radius: 0.5rem;
            display: flex;
            flex: 1;
            flex-direction: column;
            height: 100%;
            justify-content: space-evenly;
            padding: 1rem;
            text-align: center;
            white-space: nowrap;
            width: 100%;

            .fa {
                color: ${props => props.theme.gray};
                height: 10rem;
                width: 10rem;
            }
        }
    }
`;

export default DropzoneStyles;
