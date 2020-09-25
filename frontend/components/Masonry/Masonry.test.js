import Masonry from './Masonry';
import { shallow } from 'enzyme';

const testPins = [
  {
    _id: '5ce4716e039edc360ca1f82f',
    title: 'Say Cheese!',
    description: 'Just me with a camera',
    image:
      'https://res.cloudinary.com/dbir6orpj/image/upload/v1558475116/notpinterest/j41eaxl0zogenqf5mk5l.jpg',
    likedByIds: [
      '5ce466f6f17a0c008e3224e3',
      '5ce48af0b5f56600243e4139',
      '5ce48c88b5f56600243e413e',
      '5ce48d30b5f56600243e4142',
      '5ce48efab5f56600243e4147',
    ],
    largeImage:
      'https://res.cloudinary.com/dbir6orpj/image/upload/c_scale,q_auto,w_1000/v1558475116/notpinterest/j41eaxl0zogenqf5mk5l.jpg',
    creatorUsername: 'tri_sarah_tops',
    creatorId: '5ce466f6f17a0c008e3224e3',
    __typename: 'Pin',
  },
  {
    _id: '5ce44c6ad13f421f2430bf93',
    title: 'Lioness',
    description: 'Big murder kitten',
    image:
      'https://res.cloudinary.com/dbir6orpj/image/upload/v1558465640/notpinterest/m2k0lrwttxbrkgphwfdq.jpg',
    likedByIds: [
      '5ce466f6f17a0c008e3224e3',
      '5ce44c20d13f421f2430bf92',
      '5ce48af0b5f56600243e4139',
      '5ce48c88b5f56600243e413e',
      '5ce48d30b5f56600243e4142',
      '5ce48efab5f56600243e4147',
    ],
    largeImage:
      'https://res.cloudinary.com/dbir6orpj/image/upload/c_scale,q_auto,w_1000/v1558465640/notpinterest/m2k0lrwttxbrkgphwfdq.jpg',
    creatorUsername: 'bob_the_builder',
    creatorId: '5ce44c20d13f421f2430bf92',
    __typename: 'Pin',
  },
];

describe('<Masonry />', () => {
  const wrapper = shallow(<Masonry recipes={testPins} />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
