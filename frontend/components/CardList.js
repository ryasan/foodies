import Card from './Card';
import mockData from '../mock.json';

const CardList = () => (
  <div>
    {mockData.map(card => (
      <Card key={card.id} />
    ))}
  </div>
);

export default CardList;
