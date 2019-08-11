import React from 'react';
import { shallow } from 'enzyme';
import DropdownSelector from '../DropdownSelector';

describe('basic rendering tests', () => {
  it('renders without crashing', () => {
    shallow(<DropdownSelector />);
  });
});
