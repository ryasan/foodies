import PropTypes from 'prop-types';

import StyledLoader from './LoaderStyles';

const Loader = ({ className }) => (
  <StyledLoader className={className}>
    <div className="line-scale-pulse-out">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </StyledLoader>
);

Loader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Loader;
