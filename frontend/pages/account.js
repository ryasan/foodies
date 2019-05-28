import { useState } from 'react';
import { Query } from 'react-apollo';
import { lighten } from 'polished';
import styled from 'styled-components';

import MY_PINS_QUERY from '../graphql/queries/myPins';
import LIKED_PINS_QUERY from '../graphql/queries/likedPins';
import PleaseSignin from '../components/PleaseSignin/PleaseSignin';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Button from '../components/shared/Button';
import Masonry from '../components/Masonry/Masonry';
import Loader from '../components/Loader/Loader';

const AccountPageStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .loader {
    margin-top: 2rem;
  }

  button {
    margin-bottom: 1.5rem;
    &.active {
      background: ${props => lighten(0.35, props.theme.gray)};
      pointer-events: none;
    }
  }
`;

const tabs = [
  { title: 'My Pins', query: MY_PINS_QUERY, fetch: 'myPins' },
  { title: 'Liked Pins', query: LIKED_PINS_QUERY, fetch: 'likedPins' },
];

const AccountPage = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const changeTabs = i => {
    setSelectedIdx(i);
  };

  const { query, fetch } = tabs[selectedIdx];

  return (
    <PleaseSignin>
      <AccountPageStyles>
        <div>
          {tabs.map(({ title }, i) => (
            <Button
              key={title}
              className={selectedIdx === i ? 'active' : ''}
              onClick={() => changeTabs(i)}>
              {title}
            </Button>
          ))}
        </div>
        <Query query={query}>
          {({ data, error, loading, fetchMore }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader className="loader" />;
            const pins = data[fetch];

            return pins.length ? (
              <Masonry pins={pins || []} fetchMore={fetchMore} />
            ) : (
              <h2>Nothing to see here 👀</h2>
            );
          }}
        </Query>
      </AccountPageStyles>
    </PleaseSignin>
  );
};

export default AccountPage;
