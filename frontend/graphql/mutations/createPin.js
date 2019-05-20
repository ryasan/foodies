import gql from 'graphql-tag';

const CREATE_PIN_MUTATION = gql`
  mutation CREATE_PIN_MUTATION($createPinInput: CreatePinInput!) {
    createPin(createPinInput: $createPinInput) {
      _id
      title
      description
      likedByIds
      image
      largeImage
    }
  }
`;

export default CREATE_PIN_MUTATION;
