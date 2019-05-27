import PropTypes from 'prop-types';

import StyledLoader from './LoaderStyles';

const Loader = ({ className, style }) => (
  <StyledLoader className={className} style={style}>
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
