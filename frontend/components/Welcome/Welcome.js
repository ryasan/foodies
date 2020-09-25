import { FaGithub } from 'react-icons/fa';

import StyledWelcome from './WelcomeStyles';
import { repoUrl } from '../../constants';

const Welcome = () => (
  <StyledWelcome>
    <div className="text">
      <h2>Foodies</h2>
      <p>Share, like, and follow stuff you&apos;re into.</p>
    </div>
    <div className="bg" />
    <button
      className="icon-btn"
      onClick={() => window.open(repoUrl, '_blank').focus()}>
      <FaGithub />
    </button>
  </StyledWelcome>
);

export default Welcome;
