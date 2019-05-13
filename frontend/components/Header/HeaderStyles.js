import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 0.4rem ${props => props.theme.bsColor};

  h1 {
    margin: 0;
    padding: 1rem;
  }
`;

export default StyledHeader;
