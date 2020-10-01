import Page from './Layout';
import { shallow } from 'enzyme';

describe('<Page />', () => {
  const wrapper = shallow(<Page />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
