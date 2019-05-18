import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import CURRENT_USER_QUERY from '../../graphql/queries/currentUser';
import TOGGLE_LOGIN_MUTATION from '../../graphql/mutations/toggleLogin';
import PleaseSigninStyles from './PleaseSigninStyles';
import Button from '../shared/Button';
import InnerContent from '../shared/InnerContent';

const PleaseSignin = ({ children }) => (
  <PleaseSigninStyles>
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (!data.me) {
          return (
            <InnerContent>
              <h2>Please sign in before continuing</h2>
              <Mutation mutation={TOGGLE_LOGIN_MUTATION}>
                {toggleLogin => (
                  <Button color="primary" onClick={toggleLogin}>
                    Signin
                  </Button>
                )}
              </Mutation>
            </InnerContent>
          );
        }
        return children;
      }}
    </Query>
  </PleaseSigninStyles>
);

PleaseSignin.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PleaseSignin;
