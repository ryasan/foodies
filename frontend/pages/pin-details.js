import PropTypes from 'prop-types';

import PinDetails from '../components/PinDetails/PinDetails';
import User from '../components/User/User';

const PinDetailsPage = ({ query }) => (
  <User>
    {({ data: { me } }) => {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PinDetails pinId={query.id} currentUserId={me && me._id} />
        </div>
      );
    }}
  </User>
);

PinDetailsPage.propTypes = {
  query: PropTypes.object,
};

export default PinDetailsPage;
