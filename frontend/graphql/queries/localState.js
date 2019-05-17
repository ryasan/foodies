import gql from 'graphql-tag';

const LOCAL_STATE_QUERY = gql`
  query {
    loginIsOpen @client
  }
`;

export default LOCAL_STATE_QUERY;
