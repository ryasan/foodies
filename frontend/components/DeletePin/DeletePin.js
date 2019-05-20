import PropTypes from 'prop-types';
import Router from 'next/router';
import { Mutation } from 'react-apollo';

import DELETE_PIN_MUTATION from '../../graphql/mutations/deletePin';
import ALL_PINS_QUERY from '../../graphql/queries/pins';
import Button from '../shared/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const DeletePin = ({ pinId }) => {
  const update = (cache, payload) => {
    // manually update the cache on the client so it matches the server
    // 1. read the cache for the pins we want
    const data = cache.readQuery({ query: ALL_PINS_QUERY });
    // 2. filter the deleted item out of the page
    data.pins = data.pins.filter(
      ({ _id }) => _id !== payload.data.deletePin._id,
    );
    // 3. put the items back
    cache.writeQuery({ query: ALL_PINS_QUERY, data });
  };

  return (
    <Mutation
      mutation={DELETE_PIN_MUTATION}
      variables={{ pinId }}
      update={update}>
      {(deletePin, { error }) => {
        if (error) return <ErrorMessage error={error} />;

        return (
          <Button
            color="clear"
            onClick={() => {
              if (confirm('Are you sure you want to delete?')) {
                deletePin().catch(err => alert(err.message));
                Router.push('/');
              }
            }}>
            Delete Pin
          </Button>
        );
      }}
    </Mutation>
  );
};

DeletePin.propTypes = {
  pinId: PropTypes.string.isRequired,
};

export default DeletePin;
