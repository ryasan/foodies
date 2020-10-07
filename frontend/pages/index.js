import { Query } from 'react-apollo'
import styled from 'styled-components'

import ALL_RECIPES_QUERY from '../graphql/queries/recipes'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Loader from '../components/Loader/Loader'
import Grid from '../components/Grid/Grid'
import Landing from '../components/Landing/Landing'
import Navbar from '../components/Navbar/Navbar'
import { limit } from '../constants'
import { Fragment } from 'react'
import { Element } from 'react-scroll'
import { sleep } from '../utils/sleep'

const Home = styled.div`
    position: relative;
    width: 100%;
`


const Index = () => (
    <Fragment>
        <Landing />
        <Element name='home'>
            <Query
                query={ALL_RECIPES_QUERY}
                variables={{ skip: 0, limit }}
                fetchPolicy='cache-and-network'>
                {({ data, error, loading, fetchMore }) => {
                    if (error) return <ErrorMessage error={error} />
                    return (
                        <Navbar position='sticky'>
                            <Home>
                                <Grid
                                    recipes={data.recipes || []}
                                    fetchMore={fetchMore}
                                    loading={loading}
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

export default Index
