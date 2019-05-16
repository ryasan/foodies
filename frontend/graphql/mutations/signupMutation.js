import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      email
      username
    }
  }
`;

export default SIGNUP_MUTATION;
