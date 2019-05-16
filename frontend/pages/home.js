import Masonry from '../components/Masonry/Masonry';
import Tile from '../components/Tile/Tile';
import posts from '../mock.json';

const Home = () => (
  <Masonry>
    {posts.map(post => (
      <Tile key={post.id} post={post} />
    ))}
  </Masonry>
);

export default Home;
