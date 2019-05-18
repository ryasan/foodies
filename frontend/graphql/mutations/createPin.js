import gql from 'graphql-tag';

const CREATE_PIN_MUTATION = gql`
  mutation CREATE_PIN_MUTATION($createPinInput: CreatePinInput!) {
    createPin(createPinInput: $createPinInput) {
      title
      description
      likes
      image
      largeImage
    }
  }
`;

export default CREATE_PIN_MUTATION;
