import styled from 'styled-components'

const ErrorMessage = styled.div`
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 5px solid var(--red-600);
    margin: 2rem 0;
    padding: 2rem;
`

ErrorMessage.Text = styled.p`
    font-weight: 100;
    margin: 0;

    strong {
        margin-right: 1rem;
    }
`

export default ErrorMessage
