import Likes from './Likes';
import { shallow } from 'enzyme';

describe('<Likes />', () => {
  const wrapper = shallow(<Likes />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
