import CreatePin from './CreatePin';
import { shallow } from 'enzyme';

describe('<CreatePin />', () => {
  const wrapper = shallow(<CreatePin />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
