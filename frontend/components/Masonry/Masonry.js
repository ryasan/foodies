import { useEffect } from 'react'
import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'

import Tile from '../Tile/Tile'

const masonryOptions = {
    transitionDuration: 500,
    isFitWidth: true
}

const style = {
    listStyleType: 'none',
    padding: 0,
    margin: '0 auto'
}

const MasonryHOC = ({ recipes, fetchMore, propKey }) => {
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
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <Masonry style={style} elementType='ul' options={masonryOptions}>
            {recipes.map(recipe => (
                <Tile key={recipe._id} recipe={recipe} />
            ))}
        </Masonry>
    )
}

MasonryHOC.propTypes = {
    fetchMore: PropTypes.func.isRequired,
    propKey: PropTypes.string.isRequired
}

export default MasonryHOC
