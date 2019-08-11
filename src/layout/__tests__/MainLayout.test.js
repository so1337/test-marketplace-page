import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from '../MainLayout';

describe('basic rendering tests', () => {
  it('renders without crashing', () => {
    shallow(<MainLayout><div /></MainLayout>);
  });
});
