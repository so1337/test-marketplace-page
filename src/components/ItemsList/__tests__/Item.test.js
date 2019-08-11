import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

const mockedProps = {
  reward: 'reward',
  title: 'title',
  cover: 'cover',
  logo: 'logo',
  reach: [{
    id: 2,
    reach: '100_1000',
    channel: {
      id: 1,
      name: 'name',
      slug: 'facebook',
    },
  }],
};
describe('basic rendering tests', () => {
  it('renders without crashing with only required props', () => {
    const requiredProps = { ...mockedProps, reach: undefined };
    shallow(<Item {...requiredProps} />);
  });
  it('renders without crashing with all props', () => {
    shallow(<Item {...mockedProps} />);
  });
  it('renders with proper data', () => {
    const wrapper = shallow(<Item {...mockedProps} />);
    expect(wrapper.find('.reward').text()).toBe(mockedProps.reward);
    expect(wrapper.find('.title').text()).toBe(mockedProps.title);
    expect(wrapper.find('.cover img').prop('src')).toBe(mockedProps.cover);
    expect(wrapper.find('.logo img').prop('src')).toBe(mockedProps.logo);
    expect(wrapper.find('SocialReach').prop('amount')).toBe(mockedProps.reach[0].reach);
    expect(wrapper.find('SocialReach').prop('type')).toBe(mockedProps.reach[0].channel.slug);
    expect(wrapper.find('SocialReach').length).toBe(1);
  });
  it('renders 2 social blocks', () => {
    const reach2Items = [mockedProps.reach[0], mockedProps.reach[0]];
    const updatedProps = { ...mockedProps, reach: reach2Items };
    const wrapper = shallow(<Item {...updatedProps} />);
    expect(wrapper.find('SocialReach').length).toBe(2);
  });
});
