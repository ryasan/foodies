import { useState } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { lighten } from 'polished';

import MY_PINS_QUERY from '../graphql/queries/myPins';
import PleaseSignin from '../components/PleaseSignin/PleaseSignin';
import User from '../components/User/User';
import Masonry from '../components/Masonry/Masonry';
import Tile from '../components/Tile/Tile';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Button from '../components/shared/Button';

const AccountPageStyles = styled.div`
  width: 100%;

  button {
    margin-bottom: 1.5rem;
    &.active {
      background: ${props => lighten(0.35, props.theme.gray)};
      border: 3px solid ${props => lighten(0.35, props.theme.gray)};
    }
  }
`;

const AccountPage = () => {
  const [firstActive, setFirstActive] = useState(true);

  return (
    <PleaseSignin>
      <User>
        {({ data: { me } }) => {
          return (
            me && (
              <Query query={MY_PINS_QUERY} variables={{ userId: me._id }}>
                {({ data: { myPins }, error, loading }) => {
                  if (error) return <ErrorMessage error={error} />;
                  if (loading) return <h2>Loading Pins...</h2>;

                  return (
                    <AccountPageStyles>
                      <Button className={firstActive ? 'active' : ''}>
                        My Pins
                      </Button>
                      <Button className={firstActive ? '' : 'active'}>
                        Liked Pins
                      </Button>
                      {myPins.length ? (
                        <Masonry>
                          {myPins.map(pin => (
                            <Tile key={pin._id} pin={pin} />
                          ))}
                        </Masonry>
                      ) : (
                        <h2>You have no pins yet 😢</h2>
                      )}
                    </AccountPageStyles>
                  );
                }}
              </Query>
            )
          );
        }}
      </User>
    </PleaseSignin>
  );
};

export default AccountPage;
