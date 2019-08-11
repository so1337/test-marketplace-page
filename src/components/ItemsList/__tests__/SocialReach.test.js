import React from 'react';
import { shallow } from 'enzyme';
import SocialReach from '../SocialReach';
import google from '../../../assets/images/google.svg';

const mockedProps = {
  type: 'google-analytics',
  amount: '0_1000',
};
describe('basic rendering tests', () => {
  it('renders without crashing with no props', () => {
    shallow(<SocialReach />);
  });
  it('renders without crashing with all props', () => {
    shallow(<SocialReach {...mockedProps} />);
  });
  it('renders with proper data', () => {
    const wrapper = shallow(<SocialReach {...mockedProps} />);
    expect(wrapper.find('.media-logo').prop('src')).toBe(google);
    expect(wrapper.find('.media-amount').text()).toBe('1k views');
  });
});
