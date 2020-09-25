import styled from 'styled-components'
import { Query } from 'react-apollo'

import ALL_PINS_QUERY from '../graphql/queries/recipes'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Loader from '../components/Loader/Loader'
import Masonry from '../components/Masonry/Masonry'
import { limit } from '../constants'

const HomeStyles = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 20rem;
    padding-bottom: 5vh;
    position: relative;

    .loader {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }
`

const HomePage = () => {
    return (
        <Query
            query={ALL_PINS_QUERY}
            variables={{ skip: 0, limit }}
            fetchPolicy='cache-and-network'>
            {({ data, error, loading, fetchMore }) => {
                if (error) return <ErrorMessage error={error} />

                if (loading) {
                    return (
                        <HomeStyles>
                            <Masonry
                                pins={data.pins || []}
                                fetchMore={fetchMore}
                                propKey='pins'
                            />
                            <Loader className='loader' />
                        </HomeStyles>
                    )
                }

                return (
                    <HomeStyles>
                        {/* <Masonry
                            pins={data.pins || []}
                            fetchMore={fetchMore}
                            propKey='pins'
                        /> */}
                    </HomeStyles>
                )
            }}
        </Query>
    )
}

export default HomePage
