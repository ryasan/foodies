import { ApolloProvider } from 'react-apollo'
import App, { Container } from 'next/app'
import PropTypes from 'prop-types'

import Layout from '../components/Layout/Layout'
import withData from '../utils/withData'

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        // expose the query params to the user
        pageProps.query = ctx.query

        return { pageProps }
    }

    render () {
        const { Component, apollo, pageProps } = this.props

        return (
            <Container>
                <ApolloProvider client={apollo}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ApolloProvider>
            </Container>
        )
    }
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired
}

export default withData(MyApp)
