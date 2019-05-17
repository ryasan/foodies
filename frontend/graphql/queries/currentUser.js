import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      _id
      email
      username
    }
  }
`;

export default CURRENT_USER_QUERY;
