import PropTypes from 'prop-types';

import StyledLoader from './LoaderStyles';

const LoaderComponent = ({ className }) => (
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

LoaderComponent.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LoaderComponent;
