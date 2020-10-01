import { Query } from 'react-apollo'
import styled from 'styled-components'

import ALL_PINS_QUERY from '../graphql/queries/recipes'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Loader from '../components/Loader/Loader'
import Grid from '../components/Grid/Grid'
import Landing from '../components/Landing/Landing'
import Navbar from '../components/Navbar/Navbar'
import { limit } from '../constants'
import { Fragment } from 'react'
import { Element } from 'react-scroll'

const Home = styled.div`
    position: relative;
    width: 100%;

    .loader {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
`

const HomePage = () => (
    <Fragment>
        <Landing />
        <Element name='home'>
            <Query
                query={ALL_PINS_QUERY}
                variables={{ skip: 0, limit }}
                fetchPolicy='cache-and-network'>
                {({ data, error, loading, fetchMore }) => {
                    if (error) return <ErrorMessage error={error} />

                    if (loading) {
                        return (
                            <Navbar position='sticky'>
                                <Home>
                                    <Loader className='loader' />
                                </Home>
                            </Navbar>
                        )
                    }

                    return (
                        <Navbar position='sticky'>
                            <Home>
                                <Grid
                                    recipes={data.recipes || []}
                                    fetchMore={fetchMore}
                                    propKey='recipes'
                                />
                            </Home>
                        </Navbar>
                    )
                }}
            </Query>
        </Element>
    </Fragment>
)

export default HomePage
