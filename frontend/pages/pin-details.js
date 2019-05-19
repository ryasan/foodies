import PropTypes from 'prop-types';

import PinDetails from '../components/PinDetails/PinDetails';
import User from '../components/User/User';

const PinDetailsPage = ({ query }) => (
  <User>
    {({ data: { me } }) =>
      me && (
        <div>
          <PinDetails pinId={query.id} currentUserId={me._id} />
        </div>
      )
    }
  </User>
);

PinDetailsPage.propTypes = {
  query: PropTypes.object,
};

export default PinDetailsPage;
