import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
