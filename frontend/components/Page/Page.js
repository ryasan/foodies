import { ThemeProvider } from 'styled-components'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login'
import Meta from '../Meta/Meta'
import LOCAL_STATE_QUERY from '../../graphql/queries/localState'
import { theme, GlobalStyles, Page } from './PageStyles'

const PageComponent = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Query query={LOCAL_STATE_QUERY}>
            {({ data: { loginIsOpen } }) => (
                <>
                    <Meta />
                    <GlobalStyles />
                    <Login loginIsOpen={loginIsOpen} />
                    <Page loginIsOpen={loginIsOpen}>
                        <Navbar />
                        <Page.Inner>{children}</Page.Inner>
                    </Page>
                </>
            )}
        </Query>
    </ThemeProvider>
)

PageComponent.propTypes = {
    children: PropTypes.object.isRequired
}

export default PageComponent
