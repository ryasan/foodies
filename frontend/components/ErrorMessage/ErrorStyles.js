import styled from 'styled-components';

const ErrorStyles = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 5px solid var(--red-600);
    margin: 2rem 0;
    padding: 2rem;

    p {
        font-weight: 100;
        margin: 0;
    }

    strong {
        margin-right: 1rem;
    }
`;

export default ErrorStyles;
