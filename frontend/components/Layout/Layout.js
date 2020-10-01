import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login'
import Meta from '../Meta/Meta'
import LOCAL_STATE_QUERY from '../../graphql/queries/localState'
import { theme, GlobalStyles, Layout } from './LayoutStyles'

const PageComponent = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Query query={LOCAL_STATE_QUERY}>
            {({ data: { loginIsOpen } }) => (
                <Fragment>
                    <Meta />
                    <GlobalStyles />
                    <Login loginIsOpen={loginIsOpen} />
                    <Layout loginIsOpen={loginIsOpen}>
                        <Layout.Inner>{children}</Layout.Inner>
                    </Layout>
                </Fragment>
            )}
        </Query>
    </ThemeProvider>
)

PageComponent.propTypes = {
    children: PropTypes.object.isRequired
}

export default PageComponent
