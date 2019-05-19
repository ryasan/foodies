import { Query } from 'react-apollo';

import MY_PINS_QUERY from '../graphql/queries/myPins';
import PleaseSignin from '../components/PleaseSignin/PleaseSignin';
import User from '../components/User/User';
import Masonry from '../components/Masonry/Masonry';
import Tile from '../components/Tile/Tile';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const AccountPage = () => (
  <PleaseSignin>
    <User>
      {({ data: { me } }) => {
        return (
          me && (
            <Query query={MY_PINS_QUERY} variables={{ id: me._id }}>
              {({ data: { myPins }, error, loading }) => {
                if (error) return <ErrorMessage error={error} />;
                if (loading) return <h1>Loading Pins...</h1>;

                return (
                  <Masonry>
                    {myPins.map(pin => (
                      <Tile key={pin._id} pin={pin} />
                    ))}
                  </Masonry>
                );
              }}
            </Query>
          )
        );
      }}
    </User>
  </PleaseSignin>
);

export default AccountPage;
