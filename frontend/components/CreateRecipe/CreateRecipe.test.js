import { shallow } from 'enzyme';

import CreatePin from './CreatePin';

describe('<CreatePin />', () => {
  const wrapper = shallow(<CreatePin />);

  it('exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
