import Login from './Login';
import { shallow } from 'enzyme';

describe('<Login />', () => {
  const wrapper = shallow(<Login loginIsOpen={false} />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
