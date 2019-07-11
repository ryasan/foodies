import Dropzone from './Dropzone';
import { shallow } from 'enzyme';

describe('<Dropzone />', () => {
  const wrapper = shallow(<Dropzone />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
