import Meta from './Meta';
import { shallow } from 'enzyme';

describe('<Meta />', () => {
  const wrapper = shallow(<Meta />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
