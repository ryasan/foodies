import PropTypes from 'prop-types';
import Head from 'next/head';
import { Query } from 'react-apollo';

import PinDetailsStyles from './PinDetailsStyles';
import PIN_DETAILS_QUERY from '../../graphql/queries/pinDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import DeletePin from '../DeletePin/DeletePin';

const PinDetails = ({ pinId, currentUserId }) => {
  return (
    <Query query={PIN_DETAILS_QUERY} variables={{ id: pinId }}>
      {({ error, loading, data: { pinDetails } }) => {
        if (error) return <ErrorMessage error={error} />;
        if (loading) return <p>Loading...</p>;
        if (!pinDetails) return <p>No pin found for {pinId}</p>;
        const ownsPin = currentUserId === pinDetails.creatorId;

        return (
          <>
            <Head>
              <title>NP | {pinDetails.title}</title>
            </Head>
            <PinDetailsStyles>
              <div className="column img-container">
                <img src={pinDetails.largeImage} alt={pinDetails.title} />
              </div>
              <div className="column details-container">
                <div className="body">
                  <h1>{pinDetails.title}</h1>
                  <p>{pinDetails.description}</p>
                </div>
                <div className="footer">
                  <p>Post by: {pinDetails.creatorUsername}</p>
                  {ownsPin && <DeletePin pinId={pinId} />}
                </div>
              </div>
            </PinDetailsStyles>
          </>
        );
      }}
    </Query>
  );
};

PinDetails.propTypes = {
  pinId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string,
};

export default PinDetails;
