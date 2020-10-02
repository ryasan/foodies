import PropTypes from 'prop-types'
import Router from 'next/router'
import Reveal from 'react-reveal/Reveal'

import Tile from './TileStyles'
import Likes from '../Likes/Likes'

const TileComponent = ({
    recipe: { title, image, likedByIds, creatorUsername, _id },
    long
}) => {
    const goToDetails = () => {
        Router.push({ pathname: '/recipe-details', query: { id: _id } })
    }

    return (
        <Reveal>
            <Tile long={long}>
                <Tile.Img
                    long={long}
                    src={image}
                    onClick={goToDetails}
                    alt={title}
                />
                <Tile.Body>
                    <Tile.Text>{title}</Tile.Text>
                    <Tile.Creator>
                        <Tile.Text>by {creatorUsername}</Tile.Text>
                        <Likes recipeId={_id} likedByIds={likedByIds} />
                    </Tile.Creator>
                </Tile.Body>
            </Tile>
        </Reveal>
    )
}

TileComponent.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default TileComponent
