import React from 'react';
import { shallow } from 'enzyme';
import Marketplace from '../Marketplace';

describe('basic rendering tests', () => {
  it('renders without crashing', () => {
    shallow(<Marketplace />);
  });
});
