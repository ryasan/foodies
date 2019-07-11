import Loader from './Loader';
import { shallow } from 'enzyme';

describe('<Loader />', () => {
  const wrapper = shallow(<Loader />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
