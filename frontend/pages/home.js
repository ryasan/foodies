import styled from 'styled-components'
import { Query } from 'react-apollo'

import ALL_PINS_QUERY from '../graphql/queries/recipes'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Loader from '../components/Loader/Loader'
import Masonry from '../components/Masonry/Masonry'
import Landing from '../components/Landing/Landing'
import { limit } from '../constants'
import { Fragment } from 'react'
import { Element } from 'react-scroll'

const Home = styled.div`
    margin-top: 10rem;
    min-height: calc(100vh - 6rem);
    position: relative;

    .loader {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
`

const HomePage = () => {
    return (
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
                                <Home>
                                    <Loader className='loader' />
                                </Home>
                            )
                        }

                        return (
                            <Home>
                                <Masonry
                                    recipes={data.recipes || []}
                                    fetchMore={fetchMore}
                                    propKey='recipes'
                                />
                            </Home>
                        )
                    }}
                </Query>
            </Element>
        </Fragment>
    )
}

export default HomePage
