import React from 'react'
import PropTypes from 'prop-types'

import ErrorMessage from './ErrorStyles'

const ErrorMessageComponent = ({ error }) => {
    if (!error || !error.message) return null
    if (
        error.networkError &&
        error.networkError.result &&
        error.networkError.result.errors.length
    ) {
        return error.networkError.result.errors.map((err, i) => (
            <ErrorMessage key={i}>
                <ErrorMessage.Text data-test='graphql-error'>
                    <strong>Shoot!</strong>
                    {err.message.replace('GraphQL error: ', '')}
                </ErrorMessage.Text>
            </ErrorMessage>
        ))
    }

    return (
        <ErrorMessage>
            <ErrorMessage.Text data-test='graphql-error'>
                <strong>Shoot!</strong>
                {error.message.replace('GraphQL error: ', '')}
            </ErrorMessage.Text>
        </ErrorMessage>
    )
    s
}

ErrorMessageComponent.defaultProps = {
    error: {}
}

ErrorMessageComponent.propTypes = {
    error: PropTypes.object
}

export default ErrorMessageComponent
