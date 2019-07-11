import Tile from './Tile';
import { shallow } from 'enzyme';

const testPin = {
  _id: 'abc123',
  title: 'Fake Title',
  image: 'fakeimgurl.com',
  likeByIds: ['123', '456'],
  creatorUsername: 'fake_user',
};

describe('<Tile/>', () => {
  const wrapper = shallow(<Tile pin={testPin} />);

  it('renders and displays the image', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(testPin.image);
    expect(img.props().alt).toBe(testPin.title);
  });

  it('renders and displays the title', () => {
    const cardBody = wrapper.find('.card-body');
    expect(cardBody.contains(testPin.title)).toBe(true);
  });

  it('renders and displays the username', () => {
    const createdBy = wrapper.find('small');
    expect(createdBy.contains(testPin.creatorUsername)).toBe(true);
  });

  it('renders likes', () => {
    const Likes = wrapper.find('Likes');
    expect(Likes.exists()).toBe(true);
  });
});
