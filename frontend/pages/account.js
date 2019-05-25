import { useState } from 'react';
import { Query } from 'react-apollo';
import { lighten } from 'polished';
import styled from 'styled-components';

import MY_PINS_QUERY from '../graphql/queries/myPins';
import LIKED_PINS_QUERY from '../graphql/queries/likedPins';
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
      pointer-events: none;
    }
  }
`;

const tabs = [
  { title: 'My Pins', query: MY_PINS_QUERY, key: 'myPins' },
  { title: 'Liked Pins', query: LIKED_PINS_QUERY, key: 'likedPins' },
];

const AccountPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const changeTabs = i => {
    setSelectedIdx(i);
  };

  return (
    <PleaseSignin>
      <User>
        {({ data: { me } }) => {
          return (
            me && (
              <Query query={tabs[selectedIdx].query}>
                {({ data, error, loading }) => {
                  if (error) return <ErrorMessage error={error} />;
                  if (loading) return <h2>Loading Pins...</h2>;
                  const pins = data[tabs[selectedIdx].key];

                  return (
                    <AccountPageStyles>
                      {tabs.map(({ title }, i) => (
                        <Button
                          key={title}
                          className={selectedIdx === i ? 'active' : ''}
                          onClick={() => changeTabs(i)}>
                          {title}
                        </Button>
                      ))}

                      {pins.length ? (
                        <Masonry>
                          {pins.map(pin => (
                            <Tile key={pin._id} pin={pin} />
                          ))}
                        </Masonry>
                      ) : (
                        <h2>Nothing to see here 👀</h2>
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
