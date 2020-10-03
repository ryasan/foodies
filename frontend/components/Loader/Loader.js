import PropTypes from 'prop-types'

import Loader from './LoaderStyles'

const LoaderComponent = ({ className }) => (
    <Loader className={className}>
        <Loader.Line />
        <Loader.Line />
        <Loader.Line />
        <Loader.Line />
        <Loader.Line />
    </Loader>
)

LoaderComponent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

export default LoaderComponent
