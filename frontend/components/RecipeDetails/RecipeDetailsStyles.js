import styled from 'styled-components';

import device from '../../utils/device';

const RecipeDetailsStyles = styled.div`
    background: white;
    box-shadow: var(--box-shadow-sm);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    min-width: 50vw;

    .column {
        padding: 3rem;
        width: 50%;

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

export default RecipeDetailsStyles;
