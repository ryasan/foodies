import { FaGithub } from 'react-icons/fa'

import Welcome from './WelcomeStyles'
import { repoUrl } from '../../constants'

const WelcomeComponent = () => (
    <Welcome>
        <Welcome.TextContainer className='text'>
            <Welcome.Title>Foodies</Welcome.Title>
            <Welcome.Subtitle>
                Share, like, and keep up with delicious recipes.
            </Welcome.Subtitle>
        </Welcome.TextContainer>
        <Welcome.Overlay />
        <Welcome.IconBtn onClick={() => window.open(repoUrl, '_blank').focus()}>
            <FaGithub />
        </Welcome.IconBtn>
    </Welcome>
)

export default WelcomeComponent
