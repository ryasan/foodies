import DeletePin from './DeletePin';
import { shallow } from 'enzyme';

describe('<DeletePin />', () => {
  const wrapper = shallow(<DeletePin pinId={'123abc'} />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
