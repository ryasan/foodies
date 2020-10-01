import { useEffect } from 'react'
import PropTypes from 'prop-types'

import Tile from '../Tile/Tile'
import Grid from './GridStyles'

const Column = ({ recipes }) => (
    <Grid.Column>
        {recipes.map(recipe => (
            <Tile key={recipe._id} recipe={recipe} />
        ))}
    </Grid.Column>
)

const getDocumentHeight = () => {
    const body = document.body
    const html = document.documentElement

    return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    )
}

const getScrollTop = () => {
    return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
          ).scrollTop
}

const GridComponent = ({ recipes, fetchMore, propKey }) => {
    const columns = recipes.reduce(
        (m, t, i) => {
            // prettier-ignore
            m[i % 7].push(t)
            console.log()
            return m
        },
        [[], [], [], [], [], [], []]
    )

    const handleScroll = () => {
        // if (getScrollTop() < getDocumentHeight() - window.innerHeight) return
        // fetchMore({
        //     variables: {
        //         skip: recipes.length
        //     },
        //     updateQuery: (prev, { fetchMoreResult }) => {
        //         if (!fetchMoreResult) return prev
        //         return Object.assign({}, prev, {
        //             [propKey]: [
        //                 ...prev[propKey],
        //                 ...fetchMoreResult[propKey].filter(
        //                     m => !prev[propKey].some(p => p._id === m._id)
        //                 )
        //             ]
        //         })
        //     }
        // })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Grid>
            <Grid.Text>Lorem Ipsum Shit</Grid.Text>
            <Grid.Columns>
                {columns.map((items, i) => (
                    <Column key={i} recipes={items} />
                ))}
            </Grid.Columns>
        </Grid>
    )
}

GridComponent.propTypes = {
    fetchMore: PropTypes.func.isRequired,
    propKey: PropTypes.string.isRequired
}

export default GridComponent
