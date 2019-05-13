import StyledCardList from './CardListStyles';
import Card from '../Card/Card';
import mockData from '../../mock.json';

const CardList = () => (
  <StyledCardList>
    {mockData.map(post => (
      <Card key={post.id} post={post} />
    ))}
  </StyledCardList>
);

export default CardList;
