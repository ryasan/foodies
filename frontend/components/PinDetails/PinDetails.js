import PropTypes from 'prop-types';
import Head from 'next/head';
import { Query } from 'react-apollo';

import PinDetailsStyles from './PinDetailsStyles';
import PIN_DETAILS_QUERY from '../../graphql/queries/pinDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const PinDetails = ({ id }) => (
  <Query query={PIN_DETAILS_QUERY} variables={{ id: id }}>
    {({ error, loading, data: { pinDetails } }) => {
      if (error) return <ErrorMessage error={error} />;
      if (loading) return <p>Loading...</p>;
      if (!pinDetails) return <p>No pin found for {id}</p>;

      return (
        <PinDetailsStyles>
          <Head>
            <title>NP | {pinDetails.title}</title>
          </Head>
          <div className="column img-container">
            <img src={pinDetails.largeImage} alt={pinDetails.title} />
          </div>
          <div className="column details">
            <h1>{pinDetails.title}</h1>
            <p>{pinDetails.description}</p>
          </div>
        </PinDetailsStyles>
      );
    }}
  </Query>
);

PinDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PinDetails;
