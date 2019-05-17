import gql from 'graphql-tag';

const TOGGLE_LOGIN_MUTATION = gql`
  mutation {
    toggleLogin @client
  }
`;

export default TOGGLE_LOGIN_MUTATION;
