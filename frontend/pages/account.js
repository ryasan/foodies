import { useState } from 'react'
import { Query } from 'react-apollo'
import { lighten } from 'polished'
import styled, { css } from 'styled-components'

import MY_RECIPES_QUERY from '../graphql/queries/myRecipes'
import LIKED_RECIPES_QUERY from '../graphql/queries/likedRecipes'
import PleaseSignin from '../components/PleaseSignin/PleaseSignin'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'
import Grid from '../components/Grid/Grid'
import Loader from '../components/Loader/Loader'
import { btns } from '../components/shared/Button'
import { limit } from '../constants'

const AccountPage = styled.div`
    align-items: center;
    color: var(--cyan-A400);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

AccountPage.BtnGroup = styled.div`
    display: flex;
    margin: 6rem 0;
`

AccountPage.Btn = styled.button`
    width: 11rem;

    ${btns.wide}
    ${btns.clearCyan}

    &:nth-child(2) {
        border-left: 0;
    }

    ${props =>
        props.active &&
        css`
            background: var(--cyan-A400);
            color: var(--black-400);
        `}
`

const tabs = [
    { title: 'My Recipes', query: MY_RECIPES_QUERY, propKey: 'myRecipes' },
    {
        title: 'Liked Recipes',
        query: LIKED_RECIPES_QUERY,
        propKey: 'likedRecipes'
    }
]

const AccountPageComponent = () => {
    const [selectedIdx, setSelectedIdx] = useState(0)

    const changeTabs = i => {
        setSelectedIdx(i)
    }

    const { query, propKey } = tabs[selectedIdx]

    return (
        <PleaseSignin>
            <AccountPage>
                <AccountPage.BtnGroup>
                    {tabs.map(({ title }, i) => (
                        <AccountPage.Btn
                            key={title}
                            active={selectedIdx === i}
                            onClick={() => changeTabs(i)}>
                            {title}
                        </AccountPage.Btn>
                    ))}
                </AccountPage.BtnGroup>
                <Query
                    query={query}
                    variables={{ limit, skip: 0 }}
                    fetchPolicy='cache-and-network'>
                    {({ data, error, loading, fetchMore }) => {
                        if (error) return <ErrorMessage error={error} />
                        if (loading) return <Loader />
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
            </AccountPage>
        </PleaseSignin>
    )
}

export default AccountPageComponent
