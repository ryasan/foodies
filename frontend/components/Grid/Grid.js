import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Tile from '../Tile/Tile'
import Grid from './GridStyles'
import Loader from '../Loader/Loader'
import { sleep } from '../../utils/sleep'

const Column = ({ recipes, colIdx }) => (
    <Grid.Column>
        {recipes.map((recipe, i) => (
            <Tile key={recipe._id} long={(colIdx + i) % 2} recipe={recipe} />
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

// prettier-ignore
const columnize = items =>
    items.reduce((m, t, i) => {
            m[i % 5].push(t)
            return m
        },
        [[], [], [], [], []]
    )

const GridComponent = ({ recipes, fetchMore, propKey, loading }) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleScroll = () => {
        if (getScrollTop() < getDocumentHeight() - window.innerHeight) return
        fetchMore({
            variables: {
                skip: recipes.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev
                return Object.assign({}, prev, {
                    [propKey]: [
                        ...prev[propKey],
                        ...fetchMoreResult[propKey].filter(
                            m => !prev[propKey].some(p => p._id === m._id)
                        )
                    ]
                })
            }
        })
    }

    useEffect(() => {
        if (recipes.length) {
            setIsLoading(true)
            sleep(3000).then(() => {
                setIsLoading(false)
                setItems(columnize(recipes))
            })
        }
    }, [recipes.length])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Grid>
            <Grid.Columns>
                {items.map((items, i) => (
                    <Column key={i} colIdx={i} recipes={items} />
                ))}
            </Grid.Columns>
            {isLoading && <Loader className='loader' />}
        </Grid>
    )
}

GridComponent.propTypes = {
    fetchMore: PropTypes.func.isRequired,
    propKey: PropTypes.string.isRequired
}

export default GridComponent
