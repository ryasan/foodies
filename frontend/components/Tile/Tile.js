import PropTypes from 'prop-types'
import Router from 'next/router'

import Tile from './TileStyles'
import Likes from '../Likes/Likes'

const TileComponent = ({
    recipe: { title, image, likedByIds, creatorUsername, _id }
}) => {
    const goToDetails = () => {
        Router.push({ pathname: '/recipe-details', query: { id: _id } })
    }

    return (
        <Tile>
            <Tile.Img src={image} onClick={goToDetails} alt={title} />
            <Tile.Body>
                <Tile.Text>{title}</Tile.Text>
                <Tile.Footer>
                    <Tile.Text>by {creatorUsername}</Tile.Text>
                    <Likes recipeId={_id} likedByIds={likedByIds} />
                </Tile.Footer>
            </Tile.Body>
        </Tile>
    )
}

TileComponent.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default TileComponent
