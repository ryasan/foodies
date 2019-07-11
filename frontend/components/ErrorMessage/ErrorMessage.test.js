import ErrorMessage from './ErrorMessage';
import { shallow } from 'enzyme';

describe('<ErrorMessage />', () => {
  const wrapper = shallow(<ErrorMessage />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
