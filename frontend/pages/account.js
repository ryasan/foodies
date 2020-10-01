import { useState } from 'react'
import { Query } from 'react-apollo'
import { lighten } from 'polished'
import styled from 'styled-components'

import MY_RECIPES_QUERY from '../graphql/queries/myRecipes'
import LIKED_RECIPES_QUERY from '../graphql/queries/likedRecipes'
import PleaseSignin from '../components/PleaseSignin/PleaseSignin'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import button from '../components/shared/Button'
import Grid from '../components/Grid/Grid'
import Loader from '../components/Loader/Loader'
import { limit } from '../constants'

const AccountPageStyles = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .loader {
        margin-top: 2rem;
    }

    button {
        margin-bottom: 1.5rem;

        &.active {
            background: ${props => lighten(0.35, props.theme.gray)};
            pointer-events: none;
        }
    }
`

const tabs = [
    { title: 'My Recipes', query: MY_RECIPES_QUERY, propKey: 'myRecipes' },
    { title: 'Liked Recipes', query: LIKED_RECIPES_QUERY, propKey: 'likedRecipes' }
]

const AccountPage = () => {
    const [selectedIdx, setSelectedIdx] = useState(0)

    const changeTabs = i => {
        setSelectedIdx(i)
    }

    const { query, propKey } = tabs[selectedIdx]

    return (
        <PleaseSignin>
            <AccountPageStyles>
                <div>
                    {tabs.map(({ title }, i) => (
                        <button
                            key={title}
                            className={selectedIdx === i ? 'active' : ''}
                            onClick={() => changeTabs(i)}>
                            {title}
                        </button>
                    ))}
                </div>
                <Query
                    query={query}
                    variables={{ limit, skip: 0 }}
                    fetchPolicy='cache-and-network'>
                    {({ data, error, loading, fetchMore }) => {
                        if (error) return <ErrorMessage error={error} />
                        if (loading) return <Loader className='loader' />
                        const recipes = data[propKey]

                        return recipes.length ? (
                            <Grid
                                recipes={recipes || []}
                                fetchMore={fetchMore}
                                propKey={propKey}
                            />
                        ) : (
                            <h2>Nothing to see here 👀</h2>
                        )
                    }}
                </Query>
            </AccountPageStyles>
        </PleaseSignin>
    )
}

export default AccountPage
