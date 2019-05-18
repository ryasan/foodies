import PropTypes from 'prop-types';

import PinDetails from '../components/PinDetails/PinDetails';

const PinDetailsPage = ({ query }) => (
  <div>
    <PinDetails id={query.id} />
  </div>
);

PinDetailsPage.propTypes = {
  query: PropTypes.object,
};

export default PinDetailsPage;
