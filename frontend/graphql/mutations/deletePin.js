import gql from 'graphql-tag';

const DELETE_PIN_MUTATION = gql`
  mutation DELETE_PIN_MUTATION($pinId: ID!) {
    deletePin(pinId: $pinId) {
      _id
    }
  }
`;

export default DELETE_PIN_MUTATION;
