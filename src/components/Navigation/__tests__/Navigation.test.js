import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';

describe('basic rendering tests', () => {
  it('renders without crashing', () => {
    shallow(<Navigation />);
  });
});
